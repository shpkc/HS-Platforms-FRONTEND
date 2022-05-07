import { AxiosResponse } from "axios";
import { fetchCommon } from "./useFetch";
import qs from "qs";

// url정보와 서버로 보낼 body 타입 정의
type PostData = {
	url: string;
	mapper?: (res: AxiosResponse["data"]) => void;
	body?: { [key: string]: AxiosResponse["data"] } | string;
	needLogin?: boolean;
	method?: "post" | "put" | "delete";
	isShowLoginAlert?: boolean;
	isOrigin?: boolean;
	customHeader?: { [key: string]: AxiosResponse["data"] };
	errorHandler?: (error: { [key: string]: string }) => void;
};

export const post = ({
	method = "post",
	isOrigin = false,
	customHeader,
	...initialData
}: PostData) => {
	return fetchCommon(
		{
			method: method,
			url: `${initialData.url}`,
			data: isOrigin ? initialData?.body : qs.stringify(initialData?.body),
		},
		{
			mapper: initialData.mapper,
			needLogin: initialData.needLogin,
			isShowLoginAlert: initialData.isShowLoginAlert,
			errorHandler: initialData.errorHandler,
			customHeader: customHeader,
		}
	);
};
