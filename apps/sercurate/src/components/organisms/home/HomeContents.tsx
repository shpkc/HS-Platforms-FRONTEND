import React from "react";
import { AxiosResponse } from "axios";
import ProductItem from "../common/ProductItem";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import HomeBanner from "src/components/organisms/home/homeComponents/HomeBanner";
import CollectionItem from "../common/CollectionItem";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	console.log(data);
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
					margin="0 0 50px 0"
					display={"flex"}
					justifyContent="space-between"
					alignItems={"center"}
				>
					<HsText variant="h4">추천 컬렉션</HsText>
					<Link href={"/collections"}>
						<HsContainer display={"flex"} alignItems="center" cursor="pointer">
							<HsText
								fontWeight={500}
								margin="0 10px 0 0"
								display={["none", "block"]}
							>
								전체 컬렉션
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
					{data.recommendCollections.map(item => (
						<CollectionItem data={item} key={item.id} />
					))}
				</HsContainer>
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
						서비스를 위한 서비스, 서큐레잇
					</HsText>
					<HsText
						textAlign={"center"}
						margin="0 0 10px 0"
						fontSize={["1rem", "1.5rem"]}
						lineHeight={"20px"}
					>
						서큐레잇에서 당신만의 서비스를 찾고 즐기세요
					</HsText>
				</HsContainer>
				<HsContainer>
					<HsContainer
						margin="0 0 50px 0"
						display={"flex"}
						justifyContent="space-between"
						alignItems={"center"}
					>
						<HsText variant="h4">BEST 서비스</HsText>
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
									전체 서비스
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
						{data.bestProducts.map(item => (
							<ProductItem data={item} key={item.id} />
						))}
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;