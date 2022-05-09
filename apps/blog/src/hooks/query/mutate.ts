import { MutationFunction, useMutation, useQueryClient } from "react-query";
import { AxiosResponse } from "axios";

type MutateType = {
	getFetch: MutationFunction<AxiosResponse["data"], AxiosResponse["data"]>;
	onSuccess?: (res: AxiosResponse["data"]) => void;
	refetch?: string[] | string;
	onError?: (err: AxiosResponse["data"]) => void;
	always?: (params: AxiosResponse["data"]) => void;
	successMsg?: string;
	customAlertMsg?: string;
	queryKey?: string;
	errAlert?: boolean;
	refetchInfinite?: () => void;
	refetchFn?: () => void;
};

export const useMutate = ({
	queryKey,
	getFetch,
	onSuccess,
	refetch,
	refetchInfinite,
	always,
	onError,
	successMsg = "",
	customAlertMsg,
	errAlert = false,
	refetchFn,
}: MutateType) => {
	const queryClient = useQueryClient();

	const mutation = useMutation(getFetch, {
		onMutate: variables => {
			// 뮤테이션 시작
			return variables;
		},
		onError: async (error, variables, context) => {
			// 에러 alert
			errAlert && alert(error);

			// passing error log
			onError && onError(queryClient.getQueryData("error"));
		},
		onSuccess: async (
			data: AxiosResponse["data"],
			variables: AxiosResponse["data"],
			context
		) => {
			const success = () => {
				// setting success alert

				// infinitescroll refetch
				refetchInfinite && refetchInfinite();

				// refetch query 없을때 직접 실행
				refetchFn && refetchFn();

				//refetch query 있을때
				refetch &&
					(Array.isArray(refetch)
						? refetch.map(item =>
								queryClient.invalidateQueries(item, { exact: true })
						  )
						: queryClient.invalidateQueries(refetch, { exact: true }));

				// 성공 시 실행
				onSuccess &&
					onSuccess({
						variables,
						data: data,
					});
			};

			return !queryClient.getQueryData("error") && success();
		},
		onSettled: (data, error, variables, context) => {
			// 무조건 실행
			always && always(data);
		},
	});

	const setter = (params: AxiosResponse["data"]) => mutation.mutate(params);
	const reset = mutation.reset;

	return { setter, reset };
};
