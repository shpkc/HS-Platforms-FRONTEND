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

interface DividerProps
	extends PositionProps,
		LayoutProps,
		ColorProps,
		BorderProps,
		SpaceProps {}

interface DividerDefaultProps {
	direction: "horizontal" | "vertical";
	color: string;
}

const DividerDefaultStyle = styled.hr<DividerDefaultProps>`
	width: 100%;
	${props =>
		props.direction == "vertical" && `border-top : 1px solid ${props.color};`}
`;

const HsDivider = styled(DividerDefaultStyle)<DividerProps>(
	space,
	layout,
	color,
	border
);

export default HsDivider;
