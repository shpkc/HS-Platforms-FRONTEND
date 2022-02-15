import React from "react";
import styled from "@emotion/styled";
import { spaceSize } from "src/constants/props";
import { border, BorderType } from "src/helper/border";
import { space, SpaceType } from "src/helper/space";
import { itemSpacing, ItemSpaceType } from "src/helper/itemSpacing";
import { align, AlignType } from "src/helper/align";
import { position, PositionType } from "src/helper/position";
import { colorPicker } from "src/helper/colorPicker";

export type ContainerStyleProps = {
	space?: "small" | "medium" | "large" | "none";
	/**
	 * backgroundColor
	 * @type {'black | pink | lightPink | white | darkWhite | lightGray | gray | hexColor..'}
	 */
	backgroundColor?: string;
	/**
	 * set height Value
	 * @require
	 *  "px" or "%" ...
	 * @example
	 * "15px"
	 */
	height?: string;
	/**
	 * set min-width value.
	 * @require
	 *  "px" or "%" ...
	 * @example "15px"
	 */
	minWidth?: string;
	zIndex?: string;
	cursor?: boolean;
} & BorderType &
	SpaceType &
	ItemSpaceType &
	AlignType &
	PositionType;

type HsContainerProps = {
	onClick?: () => void;
	/**
	 * children
	 * @type {JSX.Element | JSX.Element[]}
	 */
	children?: JSX.Element | JSX.Element[];
} & ContainerStyleProps;

export const ContainerStyle = styled.div<ContainerStyleProps>`
	display: flex;
	flex-direction: column;
	${props => position(props)};
	${props => border(props)};
	${props => space(props)};
	${props => itemSpacing(props)};
	${props => align(props)};
	${props => props.space && `margin : ${spaceSize[props.space]}px`};
	${props =>
		props.backgroundColor &&
		`background-color: ${colorPicker(props.backgroundColor)}`};
	${props => props.height && `height: ${props.height}`};
	${props => props.minWidth && `min-width: ${props.minWidth}`};
	${props => props.zIndex && `z-index: ${props.zIndex}`};
	${props => props.cursor && `cursor: pointer`};
`;

const HsContainer = ({ children, ...rest }: HsContainerProps) => {
	return <ContainerStyle {...rest}>{children}</ContainerStyle>;
};

export default HsContainer;
