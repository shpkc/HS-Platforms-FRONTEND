import styled from "@emotion/styled";
import {
	ColorProps,
	PositionProps,
	LayoutProps,
	BorderProps,
	FontFamilyProps,
	FontSizeProps,
	FontWeightProps,
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
		FontSizeProps,
		FontWeightProps {
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
