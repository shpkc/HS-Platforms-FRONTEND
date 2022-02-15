export type PositionType = {
	fixed?: boolean;
	relative?: boolean;
};

export const position = (props: PositionType) => {
	return [
		props.fixed && "position: fixed; left: 0; top: 0",
		props.relative && "position: relative;",
	].filter(Boolean);
};
