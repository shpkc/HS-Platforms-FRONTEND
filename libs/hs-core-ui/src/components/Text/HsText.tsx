import styled from "@emotion/styled";
import { textVariants } from "../../../styles/variants";
import {
	ColorProps,
	PositionProps,
	LayoutProps,
	BorderProps,
	FontFamilyProps,
	FontStyleProps,
	FontSizeProps,
	FontWeightProps,
	TypographyProps,
	SpaceProps,
	space,
	color,
	layout,
	typography,
	variant,
	compose,
} from "styled-system";

export type TextVariant = keyof typeof textVariants;

interface TextProps
	extends PositionProps,
		SpaceProps,
		LayoutProps,
		ColorProps,
		BorderProps,
		FontFamilyProps,
		FontStyleProps,
		FontSizeProps,
		FontWeightProps,
		TypographyProps {
	variant?: TextVariant;
	cursor?: "pointer";
	ellipsis?: boolean;
	ellipsisLine?: number;
}

const DefaultTextStyle = styled.p<TextProps>`
	line-height: 1.1;
	word-break: break-all;
	-webkit-line-clamp: 1;
	${props => props.cursor && `cursor : ${props.cursor}`};
	${props =>
		props.ellipsis &&
		`text-overflow : ellipsis;
		 white-space : nowrap;
		 overflow : hidden;
	`};
	${props => props.ellipsisLine && `-webkit-line-clamp: ${props.ellipsisLine}`};
`;

const HsText = styled(DefaultTextStyle)<TextProps>(
	compose(space, layout, color, typography),
	variant({ variants: textVariants })
);

export default HsText;
