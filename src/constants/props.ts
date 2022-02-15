type NumberObjType = {
	[key: string]: number;
};
type StringObjType = {
	[key: string]: string;
};
export const spaceSize: NumberObjType = {
	small: 10,
	medium: 15,
	large: 25,
	none: 0,
};

export const fontSize: NumberObjType = {
	small: 11,
	default: 13,
	medium: 15,
	large: 17,
	h1: 29,
	h2: 21,
	h3: 19,
};

export const fontWeight: NumberObjType = {
	light: 300,
	normal: 400,
	regular: 500,
	bold: 700,
};

export const buttonSize: { [key: string]: number[] } = {
	small: [28, 13],
	default: [43, 13],
	medium: [48, 17],
	large: [56, 17],
};
export const checkRadioSize: NumberObjType = {
	default: 20,
	large: 30,
};

export const alignType: StringObjType = {
	right: "justify-content: flex-end",
	rowCenter: "justify-content: center",
	bottom: "align-items: flex-end",
	colCenter: "align-items: center",
};
