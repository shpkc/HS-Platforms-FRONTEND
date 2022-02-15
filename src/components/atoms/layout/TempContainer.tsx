import styled from "@emotion/styled";
import {
	ColorProps,
	PositionProps,
	LayoutProps,
	space,
	color,
	layout,
} from "styled-system";

interface ContainerProps extends PositionProps, LayoutProps, ColorProps {
	children: React.ReactNode;
}

const TempContainer = styled.div<ContainerProps>`
	${space}
	${layout}
    ${color}
`;

export default TempContainer;
