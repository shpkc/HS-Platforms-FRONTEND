import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { AxiosResponse } from "axios";
import Link from "next/link";

const CarouselItem = ({ item }: { item: AxiosResponse["data"] }) => {
	return (
		<Link href={`/games/detail/${item.id}`}>
			<HsContainer
				position={"relative"}
				backgroundImage={`url(https://tennisflow.s3.ap-northeast-2.amazonaws.com/games/${item.id}/thumbnail.jpeg)`}
				backgroundSize={["cover", "100% 100%"]}
				backgroundRepeat="no-repeat"
				backgroundPosition="center"
				height={["360px", "500px"]}
				borderRadius={[0, 12]}
				cursor="pointer"
			>
				<HsContainer
					style={{
						position: "absolute",
						zIndex: 1,
						left: 0,
						top: 0,
						display: "block",
						height: "100%",
						width: "100%",
						background:
							"linear-gradient(30deg,rgba(0,0,0,0.5) 0,rgba(0,0,0,0) 100%)",
					}}
				/>
				<HsContainer
					position={"absolute"}
					left={0}
					bottom={0}
					zIndex={2}
					padding={"0 20px 20px"}
				>
					<HsText
						color={"white"}
						variant={"h3"}
						textAlign="left"
						margin="0 0 10px 0"
					>
						{item.title}
					</HsText>
					<HsText color={"white"} textAlign="left">
						{item.genre}
					</HsText>
				</HsContainer>
			</HsContainer>
		</Link>
	);
};

export default CarouselItem;
