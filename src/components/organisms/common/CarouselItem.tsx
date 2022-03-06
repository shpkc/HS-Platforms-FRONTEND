import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { AxiosResponse } from "axios";
import Link from "next/link";

const CarouselItem = ({
	item,
	selected,
}: {
	item: AxiosResponse["data"];
	selected: boolean;
}) => {
	return (
		<Link href={`/games/detail/${item.id}`}>
			<HsContainer
				position={"relative"}
				backgroundImage={`url(${process.env.NEXT_PUBLIC_IMG_HOST}/${item.id}/thumbnail.jpeg)`}
				backgroundSize={["cover", "100% 100%"]}
				backgroundRepeat="no-repeat"
				backgroundPosition="center"
				height={["330px", "500px"]}
				cursor="pointer"
				width={["100%", "1100px"]}
				margin={[, "0 20px"]}
			>
				{!selected && (
					<HsContainer
						display={["none", "block"]}
						style={{
							position: "absolute",
							zIndex: 1,
							left: 0,
							top: 0,
							height: "100%",
							width: "100%",
							background:
								"linear-gradient(30deg,rgba(0,0,0,0.9) 0,rgba(0,0,0,0) 100%)",
						}}
					/>
				)}
				<HsContainer
					position={"absolute"}
					left={0}
					bottom={0}
					zIndex={2}
					width={"100%"}
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
