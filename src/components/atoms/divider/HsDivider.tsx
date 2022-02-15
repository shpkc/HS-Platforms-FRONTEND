import React from "react";
import styled from "@emotion/styled";
import { spaceSize } from "src/constants/props";

type DividerProps = {
	width?: number | undefined;
	height?: number | undefined;
	backgroundColor?: string | undefined;
	thick?: boolean;
	light?: boolean;
	top?: number | string;
	bottom?: string;
	left?: string;
	right?: string;
	space?: "small" | "medium" | "large";
	borderColor?: string | undefined;
};

const CustomDivider = styled.div<DividerProps>`
	${props => props.width && `width: ${props.width}px`};
	${props => props.height && `height: ${props.height}px`};
	${props => props.backgroundColor && `background : ${props.backgroundColor}`};
`;
const commonProps = (props: DividerProps) => {
	return [
		props.space && `margin: ${spaceSize[props.space]}px 0;`,
		props.top && `margin-top: ${props.top}px;`,
		props.bottom && `margin-bottom: ${props.bottom}px;`,
		props.right && `margin-right: ${props.right}px;`,
		props.left && `margin-left: ${props.left}px;`,
		props.width && `width: ${props.width}px`,
		props.height && `height: ${props.height}px`,
		props.backgroundColor && `background : ${props.backgroundColor}`,
		props.borderColor && `border-color : ${props.borderColor}`,
	].filter(Boolean);
};

const LightDivider = styled.div<DividerProps>`
	border: 1px solid #e6e6e6;
	padding: 0;
	${props => commonProps(props)}
`;
const ThickDivider = styled.div<DividerProps>`
	height: 11px;
	border-top: 1px solid #e6e6e6;
	background-color: #f7f7f7;
	${props => commonProps(props)}
`;

type DividerType = {
	[key: string]: (props: DividerProps) => JSX.Element;
};
const divider: DividerType = {
	thick: (props: DividerProps) => <ThickDivider {...props} />,
	light: (props: DividerProps) => <LightDivider {...props} />,
	none: (props: DividerProps) => <CustomDivider {...props} />,
};
const HsDivider = ({ thick = false, light = false, ...rest }: DividerProps) => {
	const divide: string =
		[thick && "thick", light && "light"].filter(Boolean)[0] || "none";

	return divider[divide](rest);
};

export default HsDivider;
