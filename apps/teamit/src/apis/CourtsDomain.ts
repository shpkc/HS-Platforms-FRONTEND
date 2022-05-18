import React from "react";
import { COURTS_API } from "src/constants/api";
import { queryParams } from "src/helper/queryParamHelper";
import { getMethod } from "src/hooks/apiMethod/getMethod";
import { post } from "src/hooks/apiMethod/post";
import { infiniteScrollMapper } from "src/services/mapper/infiniteScrollMapper";

// NOTE : main home api
export const getMain = () =>
	getMethod({
		url: `${COURTS_API}/main`,
	})();

// NOTE : infinite scroll get products
export const getCourts = ({ pageParam = 1 }: { pageParam?: number }) =>
	getMethod({
		url: queryParams(COURTS_API, [
			["page", `${pageParam}`],
			["perPage", "20"],
		]),
		mapper: infiniteScrollMapper(pageParam),
	})();

// NOTE : get products detail by id
export const getCourtsDetailById = (id: string | string[]) =>
	getMethod({
		url: `${COURTS_API}/${id}`,
	})();

// NOTE : STATIC PROPS를 위한 get ID
export const getAllCourtsId = () =>
	getMethod({
		url: `${COURTS_API}/all-id`,
	})();

// NOTE : 이벤트 상세 문의하기 등록
export const courtsRate = ({ id, score }: { id: string; score: number }) => {
	return post({
		url: `${COURTS_API}/ratings/${id}`,
		body: {
			id,
			score,
		},
	})();
};
