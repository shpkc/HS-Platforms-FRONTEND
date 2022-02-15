export type AlignType = {
  rowCenter?: boolean;
  right?: boolean;
  bottom?: boolean;
  colCenter?: boolean;
};

export const align = (props: AlignType) => {
  return [
    props.rowCenter && "justify-content: center;",
    props.right && "justify-content: flex-end;",
    props.bottom && "align-items: flex-end;",
    props.colCenter && "align-items: center;",
  ].filter(Boolean);
};
