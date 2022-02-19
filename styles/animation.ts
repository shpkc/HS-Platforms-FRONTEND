import { css } from "@emotion/react";

export const RightToLeft = css`
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
