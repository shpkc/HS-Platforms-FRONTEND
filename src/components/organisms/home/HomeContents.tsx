import React from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import CarouselItem from "../common/BannerItem";
import HsText from "src/components/atoms/text/HsText";
import Link from "next/link";
import { GameType } from "src/types/game";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	const [currentPage, setCurrentPage] = React.useState(0);

	return (
		<HsContainer padding={"61px 0 0 0"} margin={[, "0 auto"]}>
			<HsContainer margin={["0 0 60px 0", "0 0 100px 0"]}>
				<HsContainer position={"relative"}>
					<Carousel
						showArrows={false}
						showStatus={false}
						showIndicators={false}
						showThumbs={false}
						selectedItem={currentPage}
					>
						{data.banner.map((item: GameType, index) => (
							<CarouselItem item={item} key={item.id} />
						))}
					</Carousel>
					<HsContainer
						borderRadius={50}
						width={"32px"}
						height={"32px"}
						backgroundColor="white"
						position={"absolute"}
						left={16}
						top={[274, 274]}
						display={["none", "flex"]}
						alignItems="center"
						justifyContent={"center"}
						cursor="pointer"
						onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
					>
						<IoIosArrowBack />
					</HsContainer>
					<HsContainer
						borderRadius={50}
						width={"32px"}
						height={"32px"}
						backgroundColor="white"
						position={"absolute"}
						right={16}
						top={[274, 274]}
						display={["none", "flex"]}
						alignItems="center"
						justifyContent={"center"}
						cursor="pointer"
						onClick={() =>
							currentPage + 1 < data.banner.length &&
							setCurrentPage(currentPage + 1)
						}
					>
						<IoIosArrowForward />
					</HsContainer>
				</HsContainer>
			</HsContainer>
			<HsContainer
				width={[, "1100px"]}
				padding="50px 0"
				margin={["0 20px", "0 auto"]}
				backgroundColor="#F8F9FA"
			>
				<HsText
					textAlign={"center"}
					fontWeight="bold"
					fontSize={"1.5rem"}
					margin="0 0 15px 0"
				>
					Start Your NFT Trade Here
				</HsText>
				<HsText textAlign={"center"} margin="0 0 10px 0" fontSize={"1.2rem"}>
					You can create and transfer your own extraordinary NFTs
				</HsText>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
