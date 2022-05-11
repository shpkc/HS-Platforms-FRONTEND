import React from "react";
import { POSTS_API } from "src/constants/api";
import { queryParams } from "src/helper/queryParamHelper";
import { getMethod } from "src/hooks/apiMethod/getMethod";
import { infiniteScrollMapper } from "src/services/mapper/infiniteScrollMapper";

// NOTE : infinite scroll get products
export const getPosts = ({ pageParam = 1 }: { pageParam?: number }) =>
	getMethod({
		url: queryParams(POSTS_API, [
			["page", `${pageParam}`],
			["perPage", "20"],
		]),
		mapper: infiniteScrollMapper(pageParam),
	})();

// NOTE : get posts by id
export const getPostsBySlug = (slug: string) =>
	getMethod({
		url: `${POSTS_API}/${slug}`,
	})();

// NOTE : STATIC PROPS를 위한 get slug
export const getAllPostsSlug = () =>
	getMethod({
		url: `${POSTS_API}/all-slug`,
	})();
