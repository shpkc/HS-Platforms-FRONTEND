import styled from '@emotion/styled';
import {
  ColorProps,
  PositionProps,
  LayoutProps,
  BorderProps,
  SpaceProps,
  FlexProps,
  FlexboxProps,
  BackgroundProps,
  BackgroundImageProps,
  border,
  space,
  color,
  layout,
  flex,
  flexbox,
  compose,
  position,
  background,
  backgroundImage,
} from 'styled-system';

interface ContainerProps
  extends PositionProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    SpaceProps,
    FlexProps,
    FlexboxProps,
    BackgroundProps,
    BackgroundImageProps {
  cursor?: string;
  filter?: string;
}

const DefaultContainerStyle = styled.div<ContainerProps>`
  ${(props) => props.filter && `filter : ${props.filter}`};
  ${(props) => props.cursor && `cursor : ${props.cursor}`};
`;
const HsContainer = styled(DefaultContainerStyle)<ContainerProps>(
  compose(
    space,
    layout,
    color,
    border,
    flex,
    flexbox,
    position,
    background,
    backgroundImage
  )
);

export default HsContainer;
