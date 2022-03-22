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
		<Link href={`/nft/goods/detail/${item.id}`}>
			<HsContainer
				position={"relative"}
				backgroundImage={`url(${process.env.NEXT_PUBLIC_IMG_HOST}/${item.id}/thumbnail.jpeg)`}
				backgroundSize={"cover"}
				backgroundRepeat="no-repeat"
				backgroundPosition="center"
				height={["310px", "580px"]}
				cursor="pointer"
			>
				<HsContainer
					position={"absolute"}
					left={80}
					bottom={80}
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
