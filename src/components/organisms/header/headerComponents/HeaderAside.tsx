import React from "react";
import { css } from "@emotion/react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import Link from "next/link";
import HsText from "src/components/atoms/text/HsText";

const HeaderAside = () => {
	return <div />;
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
