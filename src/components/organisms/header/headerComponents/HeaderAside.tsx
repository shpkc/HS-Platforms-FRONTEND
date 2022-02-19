import React from "react";
import { css } from "@emotion/react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import Link from "next/link";
import HsText from "src/components/atoms/text/HsText";

const HeaderAside = () => {
	return (
		<HsContainer width={100} position="fixed" display="flex">
			<HsContainer>
				<HsText color={"white"}>GAMES</HsText>
			</HsContainer>
		</HsContainer>
	);
};

export default HeaderAside;

const asideStyle = css`
	animation: rightToLeft 0.2s linear;
	@keyframes rightToLeft {
		0% {
			left: 100%;
		}
		100% {
			left: 0;
		}
	}
`;
