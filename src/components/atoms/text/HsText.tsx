import styled from "@emotion/styled";
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
import { textVariants } from "styles/variants";

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
}

const DefaultTextStyle = styled.p<TextProps>`
	line-height: 1.1;
	word-break: break-all;
	${props => props.cursor && `cursor : ${props.cursor}`};
`;

const HsText = styled(DefaultTextStyle)<TextProps>(
	compose(space, layout, color, typography),
	variant({ variants: textVariants })
);

export default HsText;
