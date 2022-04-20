import React from "react";
import { PRODUCTS_API } from "src/constants/api";
import { queryParams } from "src/helper/queryParamHelper";
import { getMethod } from "src/hooks/apiMethod/getMethod";
import { post } from "src/hooks/apiMethod/post";
import { infiniteScrollMapper } from "src/services/mapper/infiniteScrollMapper";

// NOTE : main home api
export const getMain = () =>
	getMethod({
		url: `${PRODUCTS_API}/main`,
	})();

// NOTE : infinite scroll get products
export const getProducts = ({ pageParam = 1 }: { pageParam?: number }) =>
	getMethod({
		url: queryParams(PRODUCTS_API, [
			["page", `${pageParam}`],
			["perPage", "20"],
		]),
		mapper: infiniteScrollMapper(pageParam),
	})();

// NOTE : get products detail by id
export const getProductsDetailById = (id: string | string[]) =>
	getMethod({
		url: `${PRODUCTS_API}/${id}`,
	})();

// NOTE : STATIC PROPS를 위한 get ID
export const getAllProductsId = () =>
	getMethod({
		url: `${PRODUCTS_API}/all-id`,
	})();

// NOTE : 이벤트 상세 문의하기 등록
export const productRate = ({ id, score }: { id: string; score: number }) => {
	return post({
		url: `${PRODUCTS_API}/ratings/${id}`,
		body: {
			id,
			score,
		},
	})();
};
