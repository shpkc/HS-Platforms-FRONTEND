import { AxiosResponse } from "axios";
import { InView } from "react-intersection-observer";
import { useQueryClient } from "react-query";
import { css } from "@emotion/react";
import HsContainer from "src/components/atoms/layout/HsContainer";

const InfiniteScrollTemplate = ({
	query,
	children,
	nextPage,
	category,
}: {
	query: string;
	children: JSX.Element;
	nextPage: () => void;
	category?: string;
}) => {
	const queryClient = useQueryClient();
	const data = queryClient.getQueryData(query) as AxiosResponse["data"];
	return (
		<HsContainer>
			{children}
			<InView
				onChange={(inView, _) => {
					const getData = (data as AxiosResponse["data"]).pages
						.map((item: AxiosResponse["data"]) =>
							category ? item.data[category] : item.data
						)
						.flat().length;

					inView && getData < data.pages[0].totalCount && nextPage();
				}}
			></InView>
		</HsContainer>
	);
};

export default InfiniteScrollTemplate;
