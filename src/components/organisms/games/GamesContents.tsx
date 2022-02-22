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
			<HsContainer padding="120px 20px 0 20px">
				{data.pages
					.map((item: AxiosResponse["data"]) => item.data)
					.flat()
					.map((item: any) => (
						<GameItem key={item.id} item={item} />
					))}
			</HsContainer>
		</InfiniteScrollTemplate>
	);
};

export default GamesContents;
