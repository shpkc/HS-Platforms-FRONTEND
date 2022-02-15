import React from "react";
import styled from "@emotion/styled";
import { fontSize, fontWeight } from "src/constants/props";
import { isTrue } from "src/helper";
import { border, BorderType } from "src/helper/border";
import { align, AlignType } from "src/helper/align";
import { space, SpaceType } from "src/helper/space";
import { colorPicker } from "src/helper/colorPicker";

type FontSizeType = {
	large?: boolean;
	medium?: boolean;
	small?: boolean;
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
};

type FontSpacingType = {
	letterSpacing?: number;
	lineHeight?: number;
	ellipsis?: boolean | number;
};

type CommonType = BorderType & AlignType & SpaceType & FontSpacingType;

type TitleStyleProps = {
	size: string;
	weight?: string;
	font: string;
	color?: string;
	minHeight?: number;
	minWidth?: number;
	noWrap?: boolean;
} & CommonType;

type TitleProps = {
	children: React.ReactNode | string;
	// fontwieght
	light?: boolean;
	bold?: boolean;
	regular?: boolean;
	//etc
	color?: string;
	openSans?: boolean;
	minHeight?: number;
	minWidth?: number;
	onClick?: () => void;
	noWrap?: boolean;
	notoSans?: boolean;
} & FontSizeType &
	CommonType;

const TitleContainer = styled.div<TitleStyleProps>`
	display: flex;
	${props => align(props)};
	white-space: ${props => (props.noWrap ? "nowrap" : "pre-line")};
	${props => border(props)};
	${props => space(props)};
	${props => {
		return `font-size:${fontSize[props.size]}px;
    font-family: '${props.font}'
    `;
	}};
	${props => props.weight && `font-weight:${fontWeight[props.weight]}`};
	${props => props.color && `color: ${colorPicker(props.color)}`};
	${props => {
		const { lineHeight, letterSpacing } = props;
		return [
			lineHeight && `line-height : ${lineHeight}px;`,
			letterSpacing && `letter-spacing : ${letterSpacing}px;`,
		].filter(Boolean);
	}};
	${props =>
		props.ellipsis &&
		`text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      white-space: pre-line;
       -webkit-line-clamp: ${props.ellipsis}`};
	${props => props.minHeight && `min-height:${props.minHeight}px`};
	${props => props.minWidth && `min-width:${props.minWidth}px`};
`;

const HsText = ({
	children,
	openSans,
	ellipsis,
	notoSans,
	...rest
}: TitleProps) => {
	const check = isTrue(rest);
	const sizeList = ["large", "medium", "small", "h1", "h2", "h3"];
	const weightList = ["light", "bold", "regular"];

	const size = () => sizeList.find(item => check(item)) || "default";
	const weightResult = () => weightList.find(item => check(item)) || "normal";

	return (
		<TitleContainer
			size={size()}
			weight={weightResult()}
			font={"Noto Sans KR"}
			ellipsis={typeof ellipsis === "boolean" ? 1 : ellipsis}
			{...rest}
		>
			{children}
		</TitleContainer>
	);
};

export default HsText;
