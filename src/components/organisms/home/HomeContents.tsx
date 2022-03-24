import React from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import HomeBanner from "./homeComponents/HomeBanner";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	const [currentPage, setCurrentPage] = React.useState(0);

	return (
		<HsContainer padding={"61px 0 0 0"}>
			<HsContainer margin={["0 0 60px 0", "0 0 100px 0"]}>
				<HomeBanner data={data.banner} />
			</HsContainer>
			<HsContainer width={[, "1100px"]} margin={[, "0 auto"]}>
				<HsContainer
					padding="50px 0"
					backgroundColor="#F8F9FA"
					margin="0 0 100px 0"
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
				<HsContainer>
					<HsText variant="h4" margin="0 0 30px 0">
						Recommend NFTs
					</HsText>
				</HsContainer>
				<HsContainer>
					<HsText variant="h4" margin="0 0 30px 0">
						Recommend Collections
					</HsText>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
