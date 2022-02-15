import { AxiosResponse } from "axios";
import { QueryClient, useInfiniteQuery, useQuery } from "react-query";
import CourtsDomain from "src/domains/CourtsDomain";

const { getCourts, getCourtsDetail } = CourtsDomain();

export async function usePrefetchCourts() {
	const queryClient = new QueryClient();
	await queryClient.prefetchInfiniteQuery("courts", getCourts, {
		getNextPageParam: (lastPage: AxiosResponse["data"]) => {
			return lastPage.nextPageNum;
		},
	});
	return queryClient;
}

export function useQueryCourts() {
	return useInfiniteQuery("courts", getCourts, {
		getNextPageParam: (lastPage: AxiosResponse["data"]) => {
			return lastPage.nextPageNum;
		},
	});
}

export async function usePrefetchCourtsDetail(id: string) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(`courtsDetail${id}`, () =>
		getCourtsDetail(id as any)
	);
	return queryClient;
}

export function useQueryCourtsDetail(id: string) {
	return useQuery(`courtsDetail${id}`, () => getCourtsDetail(id));
}
