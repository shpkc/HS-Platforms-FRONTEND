import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import GameItem from "src/components/organisms/common/GameItem";
import InfiniteScrollTemplate from "src/components/templates/InniteScrollTemplate";

const GamesContents = ({
	data,
	nextPage,
}: {
	data: AxiosResponse["data"];
	nextPage: () => void;
}) => {
	return (
		<InfiniteScrollTemplate query="games" nextPage={nextPage}>
			<HsContainer padding="80px 0 0 0">
				{data.pages
					.map((item: AxiosResponse["data"]) => item.data)
					.flat()
					.map((item: any, index: number) => (
						<GameItem key={index} item={item} id={item.id} />
					))}
			</HsContainer>
		</InfiniteScrollTemplate>
	);
};

export default GamesContents;
