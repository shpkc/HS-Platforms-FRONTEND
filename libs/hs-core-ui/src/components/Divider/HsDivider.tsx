import styled from '@emotion/styled';
import {
  ColorProps,
  PositionProps,
  LayoutProps,
  BorderProps,
  border,
  space,
  layout,
  SpaceProps,
  compose,
} from 'styled-system';

interface DividerProps
  extends PositionProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    SpaceProps {}

interface DividerDefaultProps {
  direction: 'horizontal' | 'vertical';
  color: string;
}

const DividerDefaultStyle = styled.hr<DividerDefaultProps>`
  width: 100%;
  ${(props) =>
    props.direction == 'horizontal' &&
    `border-bottom : 1px solid ${props.color};`}
  ${(props) =>
    props.direction == 'vertical' && `border-right : 1px solid ${props.color};`}
`;

const HsDivider = styled(DividerDefaultStyle)<DividerProps>(
  compose(space, layout, border)
);

export default HsDivider;
