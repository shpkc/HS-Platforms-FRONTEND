import React from "react";
import styled from "@emotion/styled";
import { ContainerStyle, ContainerStyleProps } from "./OldContainer";

type CommonType = {
	spacing?: number;
	isWrap?: boolean;
	auto?: boolean;
	fullWidth?: boolean;
	grids?: number[];
	isFixed?: boolean;
	isAlignStart?: boolean;
} & ContainerStyleProps;

export type HsGridProps = {
	children: JSX.Element | JSX.Element[];
	onClick?: () => void;
} & CommonType;

type HsGridStyleProps = {
	auto?: boolean;
	count: number;
} & CommonType;

const HsGridContainer = styled(ContainerStyle)<HsGridStyleProps>`
	flex-grow: 1;
	display: flex;
	flex-direction: ${props => (props.isCol ? "column" : "row")};
	${props => props.isWrap && `flex-wrap: wrap;`}
	${props =>
		props.isFixed && "position: fixed; bottom: 0; left:0; width: 100%;"}
	align-items:${props => (props.isAlignStart ? "flex-start" : "center")};
`;

const GridChild = styled(ContainerStyle)<HsGridStyleProps>`
	${props => {
		// gridStyle
		const { count, auto, spacing, fullWidth } = props;
		return `
    display: flex;
    margin:  ${
			props.isCol ? `${(spacing || 0) * 2}px 0` : `0 ${(spacing || 0) * 2}px`
		};
  `;
	}}
`;
const HsGrid = ({
	spacing,
	isCol = false,
	children,
	grids,
	...rest
}: HsGridProps) => {
	const grid = () => {
		const total =
			grids && grids.reduce((acc: number, current: number) => acc + current);

		return React.Children.map(children, (child, index: number) => {
			return (
				<GridChild
					isCol={isCol}
					spacing={spacing ? spacing : 0}
					auto={rest.auto}
					fullWidth={rest.fullWidth}
					count={
						total && grids
							? (100 / total) * grids[index]
							: 100 / React.Children.count(children)
					}
					className={`grid-${React.Children.count(children)}`}
				>
					{React.cloneElement(child)}
				</GridChild>
			);
		});
	};

	return (
		<HsGridContainer
			count={React.Children.count(children)}
			isCol={isCol}
			{...rest}
		>
			{grid()}
		</HsGridContainer>
	);
};

export default React.memo(HsGrid);
