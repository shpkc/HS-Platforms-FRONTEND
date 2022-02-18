import React from "react";
import { GAMES_API } from "src/constants/api";
import { queryParams } from "src/helper/queryParamHelper";
import { getMethod } from "src/hooks/apiMethod/getMethod";
import { infiniteScrollMapper } from "src/services/mapper/infiniteScrollMapper";

// NOTE : 1페이지당 20개의 게임
export const getGames = ({ pageParam = 1 }: { pageParam?: number }) =>
	getMethod({
		url: queryParams(GAMES_API, [
			["page", `${pageParam}`],
			["perPage", "20"],
		]),
		mapper: infiniteScrollMapper(pageParam),
	})();

// NOTE : get game detail by id
export const getGamesDetailById = (id: string) =>
	getMethod({
		url: `${GAMES_API}/${id}`,
	})();

// NOTE : STATIC PROPS를 위한 get ID
export const getAllGamesId = () =>
	getMethod({
		url: `${GAMES_API}/all-id`,
	})();
