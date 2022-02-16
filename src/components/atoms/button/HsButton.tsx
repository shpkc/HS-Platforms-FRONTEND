import styled from "@emotion/styled";
import {
	ColorProps,
	PositionProps,
	LayoutProps,
	BorderProps,
	border,
	space,
	color,
	layout,
	SpaceProps,
} from "styled-system";

interface ButtonProps
	extends PositionProps,
		LayoutProps,
		ColorProps,
		BorderProps,
		SpaceProps {
	children: React.ReactNode;
}

interface ButtonDefaultProps {
	hoverColor?: string;
	hoverBackgroundColor?: string;
}

const ButtonDefaultStyle = styled.button<ButtonDefaultProps>`
	width: 100%;
	cursor: pointer;
	border: none;
	&:hover {
		transition: 0.5s all;
		color: #6164ff;
		background-color: #222227;
	}
`;

const HsButton = styled(ButtonDefaultStyle)<ButtonProps>(
	space,
	layout,
	color,
	border
);

export default HsButton;
