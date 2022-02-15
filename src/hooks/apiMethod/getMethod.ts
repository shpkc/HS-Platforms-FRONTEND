import { AxiosResponse } from "axios";
import { fetchCommon } from "./useFetch";

// url정보와 서버로 보낼 body 타입 정의
type GetData = {
	url: string;
	success?: (res: AxiosResponse["data"]) => void;
	isToken?: boolean;
	hasCustomHeader?: { [key: string]: string };
	fail?: (err: { errorName: string; msg: string }) => void;
	infinitePending?: boolean;
	every?: (res: AxiosResponse["data"]) => void; // 항상 실행 (옵셔널)
	chainingExcute?: (res: AxiosResponse["data"]) => void;
	isEmptyHeader?: boolean;
	isFormData?: boolean;
	mapper?: (data: AxiosResponse["data"]) => AxiosResponse["data"];
	method?: "get" | "delete" | "put";
	needLogin?: boolean;
	isShowLoginAlert?: boolean;
	errorHandler?: (error: { [key: string]: string }) => void;
};

export const getMethod = (initialData: GetData) => {
	return fetchCommon(
		{ method: initialData.method, url: `${initialData.url}` },
		{
			mapper: initialData.mapper,
			needLogin: initialData.needLogin,
			isShowLoginAlert: initialData.isShowLoginAlert,
			errorHandler: initialData.errorHandler,
		}
	);
};
