import styled from "@emotion/styled";
import {
	ColorProps,
	PositionProps,
	LayoutProps,
	BorderProps,
	SpaceProps,
	FlexProps,
	FlexboxProps,
	border,
	space,
	color,
	layout,
	flex,
	flexbox,
	compose,
	position,
} from "styled-system";

interface ContainerProps
	extends PositionProps,
		LayoutProps,
		ColorProps,
		BorderProps,
		SpaceProps,
		FlexProps,
		FlexboxProps {}

const HsContainer = styled.div<ContainerProps>(
	compose(space, layout, color, border, flex, flexbox, position)
);

export default HsContainer;
