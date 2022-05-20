import React from "react";
import { AxiosResponse } from "axios";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import { IoIosConstruct } from "react-icons/io";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<HsContainer
			padding={"61px 0 0 0"}
			height={"90vh"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			flexDirection={"column"}
		>
			<IoIosConstruct size={30} color={"#707a8a"} />
			<HsText
				fontWeight={"500"}
				fontSize={"1.3rem"}
				color={"gray.gray20"}
				margin={"10px 0 0 0"}
			>
				포스트가 없습니다
			</HsText>
		</HsContainer>
	);
};

export default HomeContents;
