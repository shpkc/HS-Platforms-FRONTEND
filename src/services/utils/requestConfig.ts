import axios, { AxiosResponse } from "axios";
import dotenv from "dotenv";
import { getFirstItem, getKeys } from "src/helper/getKeyValue";

dotenv.config();

const axiosConfig = axios.create({});

// 응답 예외 처리
const handleResponseException = (
	response: AxiosResponse["data"],
	type: string
) => {
	const errorState = {
		success: () => {
			return response;
		},
	} as { [key: string]: AxiosResponse["data"] };

	return errorState[type]();
};

axiosConfig.interceptors.response.use(
	response => {
		// 응답 상태 분기
		const responseState = () => {
			const url = response.config.url;
			const serverCode = response.data.serverCode;

			const isLogout = () => url?.includes("logout");

			const isLogin = () => url?.includes("/member/login");
			const isSnsLogin = () => url?.includes("/sns/login");

			// 실행순서
			const state = {
				isLogout: isLogout,

				isLogin: isLogin,
				isSnsLogin: isSnsLogin,
			} as { [key: string]: AxiosResponse["data"] };

			const stateResult = getKeys(state).filter(item => state[item]());

			return getFirstItem(stateResult) || "success";
		};

		return handleResponseException(response, responseState());
	},
	error => {
		return Promise.reject(error);
	}
);

export default axiosConfig;
