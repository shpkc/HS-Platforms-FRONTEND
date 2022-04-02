import styled from '@emotion/styled';
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
  compose,
} from 'styled-system';

interface ButtonProps
  extends PositionProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    SpaceProps {
  children: React.ReactNode;
}

interface ButtonDefaultProps {
  hover?: boolean;
  hoverColor?: string;
  hoverBackgroundColor?: string;
}

const ButtonDefaultStyle = styled.button<ButtonDefaultProps>`
  width: 100%;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  ${(props) =>
    props.hover &&
    `&:hover {
		transition: 0.5s all;
		color:  ${props.hoverColor};
		background-color: ${props.hoverBackgroundColor};
	}`}
`;

const HsButton = styled(ButtonDefaultStyle)<ButtonProps>(
  compose(space, layout, color, border)
);

export default HsButton;
