import { LabelProps } from "./commonType";

import styled from "@emotion/styled";

const sizeCalculator = { small: 35, medium: 44, large: 55 };
export const InputLabel = styled.label<LabelProps>`
	${props => props.padding && `padding: ${props.padding}`};
	${props => props.margin && `margin: ${props.margin}`};
	width: 100%;
	min-height: ${props => sizeCalculator[props.size]}px;
	${props => props.disabled && `background-color: #f7f7f7;`}
	display: flex;
	border-radius: 4px;
	border: 1px solid #e6e6e6;
	box-sizing: border-box;
	font-family: "Noto Sans KR", sans-serif;
	overflow: hidden;
	${props => props.isError && "border: 1px solid #ef4b81"};
	&:focus-within {
		border: 1px solid #007aff;
	}
	align-items: center;
`;
type InputProps = {
	fullWidth?: boolean;
	padding?: string;
	margin?: string;
	placeholderSize?: string;
};
export const TextFieldContainer = styled.input<{
	fontSize?: string;
	placeholderSize?: string;
}>`
	color: #3d3d3d;
	border: 0;
	width: 100%;
	height: 100%;
	max-height: 44px;
	font-size: ${props => props.fontSize || "15px"};
	box-sizing: border-box;
	display: flex;
	font-family: "Noto Sans KR", sans-serif;
	&:focus {
		outline: none;
	}
	&:disabled {
		background-color: #f7f7f7;
		color: #a8a8a8;
	}
	&::placeholder {
		font-size: ${props =>
			props.placeholderSize ? props.placeholderSize : "15px"};
		color: #a8a8a8;
	}
`;

type LabelTextProps = {
	labelPadding?: string;
};
export const LabelText = styled.label<LabelTextProps>`
	display: flex;
	font-size: 13px;
	margin: 0 0 8px 8px;
	line-height: 20px;
	font-weight: 400;
	font-family: "Noto Sans KR", sans-serif;
	${props =>
		props.labelPadding && `padding: ${props.labelPadding}; margin : 0;`}
`;

export const InputContainer = styled.div<InputProps>`
	${props => props.fullWidth && "width:100%"};
	display: flex;
	flex-direction: row;
`;

export const TextAreaContainer = styled.textarea<InputProps>`
	${props => props.fullWidth && "width:100%"};
	${props => props.padding && `padding: ${props.padding}`};
	${props => props.margin && `margin: ${props.margin}`};
	color: #3d3d3d;
	border: 1px solid #e6e6e6;
	border-radius: 4px;
	width: 100%;
	padding: 11px 18px;
	height: auto;
	font-size: 13px;
	box-sizing: border-box;
	display: flex;
	font-family: "Noto Sans KR", sans-serif;
	display: block;
	overflow: hidden;
	resize: none;
	width: 100%;
	line-height: 20px;
	&::placeholder {
		font-size: ${props =>
			props.placeholderSize ? props.placeholderSize : "15px"};
		color: #a8a8a8;
	}

	&:read-only {
		background-color: #f7f7f7;
		color: #a8a8a8;
	}
`;

type ItemCount = { item?: number };
export const RowContainer = styled.div<ItemCount>`
	display: flex;
	& > * {
		width: calc(100% / ${props => props.item} - 10px) !important;
	}
	flex-direction: row;
	justify-content: space-between;
`;
type MessageType = { type: "error" | "success" };
export const Message = styled.div<MessageType>`
	font-size: 10px;
	height: 30px;
	white-space: nowrap;
	padding-left: 10px;
	display: flex;
	align-items: center;
	font-weight: 400;
	${props => props.type === "error" && "color:#ef4b81"};
	${props => props.type === "success" && "color:#a8a8a8"};
	img {
		margin: 4px 5px 0 0;
		display: flex;
	}
`;
