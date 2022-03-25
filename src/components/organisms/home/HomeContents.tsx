import React from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import HomeBanner from "./homeComponents/HomeBanner";
import HsImage from "src/components/atoms/image/HsImage";
import { css } from "@emotion/react";
import { FaEthereum } from "react-icons/fa";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	console.log(data);
	const temp = Array(10).fill(data.recommend[0]);
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
						You can create and transfer your own extraordinary NFTs
					</HsText>
				</HsContainer>
				<HsContainer>
					<HsText variant="h4" margin="0 0 50px 0">
						Explore
					</HsText>
					<HsContainer display={"flex"} flexWrap={"wrap"}>
						{temp.map(item => (
							<HsContainer
								key={item.id}
								margin={"0 26px 50px 0"}
								css={css`
									:nth-child(4n) {
										margin: 0 0 50px 0;
									}
								`}
							>
								<HsContainer width={[, "280px"]} height={[, "280px"]}>
									<HsImage
										src={item.image}
										borderRadius="4px"
										objectFit="cover"
									/>
								</HsContainer>
								<HsText
									fontWeight={"500"}
									fontSize={"1.2rem"}
									margin="16px 0 12px 0"
								>
									{item.title}
								</HsText>
								<HsContainer display={"flex"} justifyContent="space-between">
									<HsText color={"gray.gray20"} fontSize="0.8rem">
										Price
									</HsText>
									<HsContainer display={"flex"} alignItems="center">
										<FaEthereum />
										<HsText fontWeight={500} margin="0 0 0 2px">
											{item.price.toFixed(1)}
										</HsText>
										<HsText fontWeight={500} margin="0 0 0 2px">
											{item.currency}
										</HsText>
									</HsContainer>
								</HsContainer>
							</HsContainer>
						))}
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
