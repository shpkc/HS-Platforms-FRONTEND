export type SpaceType = {
  /**
   * @require
   *  "px" or "%" ...
   * @example "15px"...
   */
  padding?: string;
  /**
   * @require
   *  "px" or "%" ...
   * @example "15px"...
   */
  margin?: string;
};

export const space = (props: SpaceType) => {
  return [
    props.padding && `padding: ${props.padding};`,
    props.margin && `margin: ${props.margin};`,
  ].filter(Boolean);
};
