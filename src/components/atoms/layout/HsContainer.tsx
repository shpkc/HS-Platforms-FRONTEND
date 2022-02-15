import styled from "@emotion/styled";
import {
	ColorProps,
	PositionProps,
	LayoutProps,
	BorderProps,
	border,
	space,
	color,
	layout,
	SpaceProps,
} from "styled-system";

interface ContainerProps
	extends PositionProps,
		LayoutProps,
		ColorProps,
		BorderProps,
		SpaceProps {
	children: React.ReactNode;
}

const HsContainer = styled("div")<ContainerProps>(space, layout, color, border);

export default HsContainer;
