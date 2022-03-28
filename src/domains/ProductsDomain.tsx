import React from "react";
import { BASE_API } from "src/constants/api";
import { queryParams } from "src/helper/queryParamHelper";
import { getMethod } from "src/hooks/apiMethod/getMethod";
import { infiniteScrollMapper } from "src/services/mapper/infiniteScrollMapper";

// NOTE : main home api
export const getMain = () =>
	getMethod({
		url: `${BASE_API}/main`,
	})();

// NOTE : 1페이지당 20개의 게임
export const getProducts = ({ pageParam = 1 }: { pageParam?: number }) =>
	getMethod({
		url: queryParams(BASE_API, [
			["page", `${pageParam}`],
			["perPage", "20"],
		]),
		mapper: infiniteScrollMapper(pageParam),
	})();

// NOTE : get game detail by id
export const getProductsDetailById = (id: string | string[]) =>
	getMethod({
		url: `${BASE_API}/${id}`,
	})();

// NOTE : STATIC PROPS를 위한 get ID
export const getAllNftsId = () =>
	getMethod({
		url: `${BASE_API}/all-id`,
	})();
