import React, { useState } from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import HsImage from "src/components/atoms/image/HsImage";
import HsDivider from "src/components/atoms/divider/HsDivider";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const GamesDetailContents = ({
	data,
	id,
}: {
	data: AxiosResponse["data"];
	id: number;
}) => {
	return (
		<HsContainer
			padding={["80px 15px 0 15px", "100px 0 0 0"]}
			margin={[, "0 auto"]}
			width={[, "1300px"]}
		>
			<HsText color={"white"} variant={"h1"} margin="0 0 30px 0">
				{data.title}
			</HsText>
			<HsContainer display={["block", "flex"]}>
				<HsContainer
					padding={"20px 10px"}
					border="1px solid #222227"
					borderRadius={16}
					margin={["0 0 20px 0", "0 30px 0 0"]}
					flex={[, "0 0 66%"]}
				>
					<HsImage
						src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${id}/thumbnail.jpeg`}
					/>
				</HsContainer>
				<HsContainer>
					<HsText color={"white"} margin="0 0 15px 0" fontSize={"18px"}>
						Descriptions
					</HsText>
					<HsText color={"gray.gray10"} lineHeight={1.625} margin="0 0 20px 0">
						{data.description}
					</HsText>
					<HsDivider
						direction="horizontal"
						color="#222227"
						margin="0 0 20px 0"
					/>
					<HsContainer>
						<HsContainer
							display={"flex"}
							alignItems="center"
							margin={"0 0 10px 0"}
						>
							<HiOutlineOfficeBuilding
								color="#6164FF"
								size={22}
								style={{ margin: "0 10px 0 0" }}
							/>
							<HsText color={"white"}>Developer</HsText>
						</HsContainer>
						<HsText color={"white"} fontSize={20}>
							{data.developer}
						</HsText>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default GamesDetailContents;
