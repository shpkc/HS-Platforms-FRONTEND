export type ItemSpaceType = {
  between?: boolean;
  around?: boolean;
  evenly?: boolean;
  isRow?: boolean;
  isCol?: boolean;
};

export const itemSpacing = (props: ItemSpaceType) => {
  return [
    props.between && `justify-content: space-between;`,
    props.around && `justify-content: space-around;`,
    props.evenly && `justify-content: space-evenly;`,
    props.isRow && `flex-direction: row;`,
    props.isCol && `flex-direction: column;`,
  ].filter(Boolean);
};
