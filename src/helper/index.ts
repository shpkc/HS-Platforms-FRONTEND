export const borderStyle = (value: boolean | string) => {
  return typeof value === "boolean" ? "solid" : value;
};

export const isTrue = (passProps: any) => (value: string) => {
  return passProps[value] && value;
};
