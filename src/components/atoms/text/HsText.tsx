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
	children: React.ReactNode;
	variant?: TextVariant;
}

const HsText = styled("div")<TextProps>(
	space,
	layout,
	color,
	typography,
	variant({ variants: textVariants })
);

export default HsText;
