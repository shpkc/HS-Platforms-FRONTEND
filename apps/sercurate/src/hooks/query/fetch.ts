import { AxiosResponse } from "axios";
import { QueryClient, useInfiniteQuery, useQuery } from "react-query";

/**
 ** @key unique identifier 쿼리 키
 ** @fetch fetch 함수
 ** @options fetch options
 */

export const useFetch = (
	key: string | any,
	fetch: () => void,
	options?: any
) => {
	return useQuery(key, fetch, options) as AxiosResponse["data"];
};

export const usePreFetch = async (
	key: string | any,
	fetch: () => void,
	options?: any
) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(key, fetch, options);
	return queryClient;
};

export const usePreFetchInfinite = async (
	key: string | any,
	fetch: () => void,
	options?: any
) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchInfiniteQuery(key, fetch, {
		getNextPageParam: (lastPage: AxiosResponse["data"]) => {
			return lastPage.nextPageNum;
		},
	});
	return queryClient;
};

export const useFetchInfinite = (
	key: string | any,
	fetch: () => void,
	options?: any
) => {
	return useInfiniteQuery(key, fetch, {
		getNextPageParam: (lastPage: AxiosResponse["data"]) => {
			return lastPage.nextPageNum;
		},
	});
};
