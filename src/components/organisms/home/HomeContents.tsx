import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import CourtItem from "src/components/organisms/common/CourtItem";
import InfiniteScrollTemplate from "src/components/templates/InniteScrollTemplate";

const HomeContents = ({
	data,
	nextPage,
}: {
	data: AxiosResponse["data"];
	nextPage: () => void;
}) => {
	return (
		<InfiniteScrollTemplate query={"courts"} nextPage={nextPage}>
			<HsContainer backgroundColor="#f5f5f5" padding="80px 0 0 0">
				{data?.pages
					.map((item: AxiosResponse["data"]) => item.data)
					.flat()
					.map((item: any, index: number) => (
						<CourtItem key={index} item={item} id={item.id} />
					))}
			</HsContainer>
		</InfiniteScrollTemplate>
	);
};

export default HomeContents;
