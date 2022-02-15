import React from "react";
import { css } from "@emotion/react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import Link from "next/link";
import HsText from "src/components/atoms/text/HsText";

const HeaderAside = () => {
	return (
		<HsContainer
			fixed
			backgroundColor="white"
			zIndex="999"
			minWidth="100%"
			css={asideStyle}
		>
			{/* <HsText bold h2 padding="24px">
				로그인 / 회원가입
			</HsText> */}
			<Link href="/about">
				<HsText bold h2 padding="8px 24px">
					ABOUT
				</HsText>
			</Link>
			<a>
				<HsText bold h2 padding="8px 24px">
					REPORT
				</HsText>
			</a>
			<a>
				<HsText bold h2 padding="8px 24px">
					ASK
				</HsText>
			</a>
		</HsContainer>
	);
};

export default HeaderAside;

const asideStyle = css`
	top: 48px;
	left: 0;
	height: calc(100vh - 48px);
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
