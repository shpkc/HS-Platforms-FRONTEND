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
} from "styled-system";

interface ContainerProps
	extends PositionProps,
		LayoutProps,
		ColorProps,
		BorderProps,
		SpaceProps,
		FlexProps,
		FlexboxProps {
	children?: React.ReactNode;
}

const HsContainer = styled.div<ContainerProps>(
	space,
	layout,
	color,
	border,
	flex,
	flexbox
);

export default HsContainer;
