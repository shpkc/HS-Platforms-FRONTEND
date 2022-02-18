import React, { useState } from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import HsImage from "src/components/atoms/image/HsImage";

const GamesDetailContents = ({
	data,
	id,
}: {
	data: AxiosResponse["data"];
	id: number;
}) => {
	return (
		<HsContainer
			padding={"80px 15px 0 15px"}
			margin={[, "0 auto"]}
			width={[, "960px"]}
		>
			<HsText color={"white"} variant={"h1"} margin="0 0 30px 0">
				{data.title}
			</HsText>
			<HsContainer display={["block", "flex"]}>
				<HsContainer
					padding={"10px"}
					border="1px solid #222227"
					borderRadius={16}
					margin={["0 0 20px 0", "0"]}
				>
					<HsImage
						src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${id}/thumbnail.jpeg`}
					/>
				</HsContainer>
				<HsContainer>
					<HsText color={"white"} margin="0 0 15px 0">
						Descriptions
					</HsText>
					<HsText color={"gray.gray10"}>{data.description}</HsText>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default GamesDetailContents;
