import React from "react";
import { NFTS_API } from "src/constants/api";
import { queryParams } from "src/helper/queryParamHelper";
import { getMethod } from "src/hooks/apiMethod/getMethod";
import { infiniteScrollMapper } from "src/services/mapper/infiniteScrollMapper";

// NOTE : 1페이지당 20개의 게임
export const getNfts = ({ pageParam = 1 }: { pageParam?: number }) =>
	getMethod({
		url: queryParams(NFTS_API, [
			["page", `${pageParam}`],
			["perPage", "20"],
		]),
		mapper: infiniteScrollMapper(pageParam),
	})();

// NOTE : get game detail by id
export const getNftsDetailById = (id: string) =>
	getMethod({
		url: `${NFTS_API}/${id}`,
	})();

// NOTE : STATIC PROPS를 위한 get ID
export const getAllNftsId = () =>
	getMethod({
		url: `${NFTS_API}/all-id`,
	})();

// NOTE : STATIC PROPS를 위한 get ID
export const getMainNfts = () =>
	getMethod({
		url: `${NFTS_API}/main`,
	})();
