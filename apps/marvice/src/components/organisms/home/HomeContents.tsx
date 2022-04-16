import React from "react";
import { AxiosResponse } from "axios";
import ProductItem from "src/components/organisms/common/ProductItem";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import HomeBanner from "src/components/organisms/home/homeComponents/HomeBanner";
import CollectionItem from "src/components/organisms/common/CollectionItem";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import { CATEGORY_LIST } from "src/constants/category";
import { CATEGORY_TYPE } from "src/types/category";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	console.log(data);
	return (
		<HsContainer padding={"61px 0 0 0"}>
			<HsContainer margin={["0 0 60px 0", "0 0 100px 0"]}>
				<HomeBanner data={data.banner} />
			</HsContainer>
			<HsContainer
				width={[, "1100px"]}
				margin={[, "0 auto"]}
				padding={"0 16px"}
			>
				<HsContainer>
					<HsContainer
						margin="0 0 50px 0"
						display={"flex"}
						justifyContent="space-between"
						alignItems={"center"}
					>
						<HsText variant="h4">추천 컬렉션</HsText>
						<Link href={"/collections"}>
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
						margin={["0 0 80px 0", "0 0 100px 0"]}
					>
						{data.recommendCollections.map(item => (
							<CollectionItem data={item} key={item.id} />
						))}
					</HsContainer>
				</HsContainer>
				<HsContainer
					borderRadius={"4px"}
					padding={["30px 6px", "50px 0"]}
					backgroundColor="gray.gray50"
					margin={["0 0 80px 0", "0 0 100px 0"]}
				>
					<HsText
						textAlign={"center"}
						fontWeight="bold"
						fontSize={["1.2rem", "1.5rem"]}
						margin="0 0 15px 0"
					>
						서비스를 위한 서비스, MARVICE
					</HsText>
					<HsText
						textAlign={"center"}
						margin="0 0 10px 0"
						fontSize={["1rem", "1.5rem"]}
						lineHeight={"20px"}
					>
						MARVICE에서 당신만의 서비스를 찾아드릴게요
					</HsText>
				</HsContainer>
				<HsContainer margin={["0 0 80px 0", "0 0 100px 0"]}>
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
					<HsContainer display={[, "flex"]} flexWrap={"wrap"}>
						{data.bestProducts.map(item => (
							<ProductItem data={item} key={item.id} />
						))}
					</HsContainer>
				</HsContainer>
				<HsContainer margin={["0 0 80px 0", "0 0 100px 0"]}>
					<HsText variant="h4" margin={"0 0 50px 0"}>
						인기 카테고리
					</HsText>
					<HsContainer
						display={"flex"}
						flexWrap={"wrap"}
						justifyContent="space-between"
					>
						{CATEGORY_LIST.map((item: CATEGORY_TYPE) => (
							<Link href={item.link} key={item.id}>
								<HsContainer
									width={["48%", "24%"]}
									backgroundColor="gray.gray50"
									padding="24px 0"
									margin={"0 0 20px 0"}
									cursor="pointer"
								>
									<HsText
										textAlign={"center"}
										margin="0 0 5px 0"
										fontSize={"0.9rem"}
									>
										{item.subTitle}
									</HsText>
									<HsText
										textAlign={"center"}
										fontWeight="bold"
										fontSize={"1.1rem"}
									>
										{item.title}
									</HsText>
								</HsContainer>
							</Link>
						))}
					</HsContainer>
				</HsContainer>
				<HsContainer margin={["0 0 80px 0", "0 0 100px 0"]}>
					<HsContainer
						margin="0 0 50px 0"
						display={"flex"}
						justifyContent="space-between"
						alignItems={"center"}
					>
						<HsText variant="h4">새로 출시했어요</HsText>
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
									새로운 서비스
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
					<HsContainer display={[, "flex"]} flexWrap={"wrap"}>
						{data.newProducts.map(item => (
							<ProductItem data={item} key={item.id} />
						))}
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
