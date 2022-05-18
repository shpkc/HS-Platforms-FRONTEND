import { AxiosResponse } from "axios";

export const infiniteScrollMapper =
	(pageIndex: number) => (res: AxiosResponse["data"]) => {
		const { result, totalCount } = res;
		return {
			data: result,
			nextPageNum: pageIndex + 1,
			currentPageNum: pageIndex,
			prevPageNum: pageIndex <= 1 ? pageIndex : pageIndex - 1,
			totalCount: totalCount,
		};
	};
