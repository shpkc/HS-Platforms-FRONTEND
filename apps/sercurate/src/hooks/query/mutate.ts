import { AxiosResponse } from "axios";
import { isEmpty } from "lodash";
import { QueryClient, useMutation } from "react-query";

interface MutationProps<TError> {
	key: string;
	fetch: () => Promise<void>;
	refetchKey?: string;
	onSuccess?: (response: AxiosResponse["data"]) => void;
	onSettled?: (response: AxiosResponse["data"]) => void;
	onError?: (error: TError) => void;
	message?: string;
	errMessage?: string;
	retry?: number;
}

/**
 ** @key unique identifier 쿼리 키
 ** @fetch mutation 함수
 ** @refetchKey invalidation key
 ** @onSuccess 성공 콜백함수
 ** @onError 실패 콜백 함수
 ** @onSettled 성공 실패 상관없이 실행 콜백 함수
 ** @message 커스텀 성공 메세지
 ** @errMessage 커스텀 실패 메세지
 ** @retry retry 횟수 <default 3>
 */
export const useMutate = <TError>({
	key,
	fetch,
	refetchKey,
	onSuccess,
	onError,
	onSettled,
	message = "",
	errMessage = "",
	retry = 3,
}: MutationProps<TError>) => {
	const queryClient = new QueryClient();

	const isNotEmpty = value => !isEmpty(value);

	const mutation = useMutation(key, {
		mutationFn: fetch,
		onMutate: async variables => {
			return { variables };
		},
		onSuccess: (data, variables) => {
			// refetch
			isNotEmpty(refetchKey) && queryClient.invalidateQueries(refetchKey);

			// 성공 시 콜백
			onSuccess && onSuccess({ data: data, var: variables });
		},
		onError: (error: TError) => {
			// 실패 시 콜백
			onError && onError(error);
		},
		onSettled: (data, error, variables, previousValue) => {
			// 항상 실행 콜백
			onSettled &&
				onSettled({
					data: data,
					error: error,
					var: variables,
					prev: previousValue,
				});
		},

		retry: retry,
	});
	const mutate = (params: void) => mutation.mutate(params);
	const reset = mutation.reset;

	return { mutate, reset };
};
