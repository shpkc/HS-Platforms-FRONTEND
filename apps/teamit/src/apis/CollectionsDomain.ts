import React from "react";
import { COLLECTIONS_API, PRODUCTS_API } from "src/constants/api";
import { queryParams } from "src/helper/queryParamHelper";
import { getMethod } from "src/hooks/apiMethod/getMethod";
import { post } from "src/hooks/apiMethod/post";
import { infiniteScrollMapper } from "src/services/mapper/infiniteScrollMapper";

// NOTE : infinite scroll get products
export const getCollections = ({ pageParam = 1 }: { pageParam?: number }) =>
	getMethod({
		url: queryParams(COLLECTIONS_API, [
			["page", `${pageParam}`],
			["perPage", "20"],
		]),
		mapper: infiniteScrollMapper(pageParam),
	})();

// NOTE : get products detail by id
export const getCollectionsDetailById = (id: string | string[]) =>
	getMethod({
		url: `${PRODUCTS_API}/${id}`,
	})();
