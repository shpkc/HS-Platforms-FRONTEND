import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosConfig from "src/services/utils/requestConfig";
import { getCookie } from "src/services/utils/cookies";
import { queryClient } from "src/pages/_app";

export const fetch = (
	method: "post" | "get" | "delete" | "put",
	success: (res: AxiosResponse) => void,
	url: string
) => {
	const fetch = async () => {
		const instance = axiosConfig;
		const hasToken = getCookie("accessToken");
		const apiHeader = {
			// accessToken: hasToken ?? store.userInfoStore.getUserToken(),
			// "Cache-Control": "max-age=31536000",
			// "Access-Control-Allow-Origin": "*",
		};

		try {
			const response = await instance({
				method: method,
				url: `${url}`,
				headers: { ...apiHeader },
			});

			return success(response.data);
		} catch (error) {
			return error;
		}
	};
	return fetch;
};

export const fetchCommon = (
	setting: AxiosRequestConfig,
	{
		mapper,
		needLogin,
		isShowLoginAlert,
		errorHandler,
		customHeader = {},
	}: {
		mapper?: (data: AxiosResponse["data"]) => AxiosResponse["data"];
		needLogin?: boolean;
		isShowLoginAlert?: boolean;
		errorHandler?: (error: { [key: string]: string }) => void;
		customHeader?: { [key: string]: AxiosResponse["data"] };
	}
) => {
	const fetch = async () => {
		const instance = axiosConfig;
		const hasToken = getCookie("accessToken");
		const apiHeader = {
			// accessToken: hasToken ?? store.userInfoStore.getUserToken(),
			// "Cache-Control": "max-age=31536000",
			// "Access-Control-Allow-Origin": "*",
		};
		try {
			const response = await instance({
				...setting,
				headers: { ...apiHeader },
			});
			// delete error message
			queryClient.removeQueries("error", { exact: true });
			return mapper ? mapper(response.data) : response.data;
		} catch (error: AxiosResponse["data"]) {
			const isEmptyData =
				error.status === "ERR0008" || error.status === "ERR0003";
			const getErrorMessage = () => {
				queryClient.setQueryData("error", error.msg);
				if (errorHandler) {
					return errorHandler(error);
				}
				throw new Error(error);
			};
			const setEmpty = () => {
				queryClient.setQueryData("error", true);
				return error;
			};

			return isEmptyData ? setEmpty() : getErrorMessage();
		}
	};

	const loginService = async () => {
		// isShowLoginAlert && needLoginAlert();
		return await "needLogin";
	};
	const isAuth = getCookie("accessToken");
	return (needLogin || isShowLoginAlert) && !isAuth ? loginService : fetch;
};
