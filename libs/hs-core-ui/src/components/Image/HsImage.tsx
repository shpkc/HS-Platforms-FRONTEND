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

interface ImageProps
  extends PositionProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    SpaceProps {
  src: string;
  objectFit?: 'fill' | 'contain' | 'cover';
}

const ImageDefaultStyle = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  ${(props) => props.objectFit && `object-fit:${props.objectFit}`};
  cursor: pointer;
`;

const HsImage = styled(ImageDefaultStyle)<ImageProps>(
  compose(space, layout, border)
);

export default HsImage;
