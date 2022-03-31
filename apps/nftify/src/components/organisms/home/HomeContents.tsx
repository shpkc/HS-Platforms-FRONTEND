import React from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import ProductItem from "../common/ProductItem";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import HomeBanner from "src/components/organisms/home/homeComponents/HomeBanner";
import CollectionItem from "../common/CollectionItem";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<HsContainer padding={"61px 0 0 0"}>
			<HsContainer margin={["0 0 60px 0", "0 0 100px 0"]}>
				<HomeBanner data={data.banner} />
			</HsContainer>
			<HsContainer
				width={[, "1200px"]}
				margin={[, "0 auto"]}
				padding={"0 16px"}
			>
				<HsContainer
					padding={["30px 6px", "50px 0"]}
					backgroundColor="#F8F9FA"
					margin={["0 0 50px 0", "0 0 100px 0"]}
				>
					<HsText
						textAlign={"center"}
						fontWeight="bold"
						fontSize={["1.2rem", "1.5rem"]}
						margin="0 0 15px 0"
					>
						Start Your NFT Trade Here
					</HsText>
					<HsText
						textAlign={"center"}
						margin="0 0 10px 0"
						fontSize={["1rem", "1.5rem"]}
						lineHeight={"20px"}
					>
						Discover NFTs in various categories and collect your own NFTs
					</HsText>
				</HsContainer>
				<HsContainer
					margin="0 0 50px 0"
					display={"flex"}
					justifyContent="space-between"
					alignItems={"center"}
				>
					<HsText variant="h4">Collections</HsText>
					<Link href={"/collections"}>
						<HsContainer display={"flex"} alignItems="center" cursor="pointer">
							<HsText
								fontWeight={500}
								margin="0 10px 0 0"
								display={["none", "block"]}
							>
								Explore More Collections
							</HsText>
							<HsContainer
								width={"24px"}
								height={"24px"}
								borderRadius={"50%"}
								display="flex"
								alignItems={"center"}
								justifyContent="center"
								backgroundColor={"black"}
							>
								<BsArrowRightShort size={24} color="white" />
							</HsContainer>
						</HsContainer>
					</Link>
				</HsContainer>
				<HsContainer
					display={[, "flex"]}
					justifyContent="space-between"
					margin={"0 0 100px 0"}
				>
					{data.mainCollections.map(item => (
						<CollectionItem data={item} key={item.id} />
					))}
				</HsContainer>
				<HsContainer>
					<HsContainer
						margin="0 0 50px 0"
						display={"flex"}
						justifyContent="space-between"
						alignItems={"center"}
					>
						<HsText variant="h4">Explore</HsText>
						<Link href={"/explore"}>
							<HsContainer
								display={"flex"}
								alignItems="center"
								cursor="pointer"
							>
								<HsText
									fontWeight={500}
									margin="0 10px 0 0"
									display={["none", "block"]}
								>
									Explore More NFTs
								</HsText>
								<HsContainer
									width={"24px"}
									height={"24px"}
									borderRadius={"50%"}
									display="flex"
									alignItems={"center"}
									justifyContent="center"
									backgroundColor={"black"}
								>
									<BsArrowRightShort size={24} color="white" />
								</HsContainer>
							</HsContainer>
						</Link>
					</HsContainer>
					<HsContainer display={"flex"} flexWrap={"wrap"}>
						{data.mainProducts.map(item => (
							<ProductItem data={item} key={item.id} />
						))}
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
