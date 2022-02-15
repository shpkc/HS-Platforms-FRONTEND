/** colorPicker
 * @type {('black | pink | lightPink | white | darkWhite | lightGray | gray')}
 * @param 그 외, #3d3d3d...
 */
export const colorPicker = (color: string) => {
	switch (color) {
		case "black":
			return "#3d3d3d";

		case "pink":
			return "#ff2f6e";

		case "white":
			return "#fff";

		case "darkWhite":
			return "#F7F7F7";

		case "lightGray":
			return "#e6e6e6";

		case "gray":
			return "#A8A8A8";

		case "red":
			return "#FF5470";

		case "lightBlue":
			return "#5E67EB";

		case "darkBlue":
			return "#0F2B7A";

		default:
			return color;
	}
};

export const IconColorPicker = (color: string) => {
	const attr = (result: string) => `filter : ${result};`;

	switch (color) {
		case "gray":
			return attr(
				"invert(55%) sepia(51%) saturate(0%) hue-rotate(296deg) brightness(112%) contrast(89%)"
			);
		case "lightGray":
			return attr(
				"invert(40%) sepia(81%) saturate(8%) hue-rotate(316deg) brightness(122%) contrast(80%)"
			);
		case "pink":
			return attr(
				"invert(38%) sepia(28%) saturate(3027%) hue-rotate(307deg) brightness(102%) contrast(87%)"
			);
		case "lightPink":
			return attr(
				"invert(90%) sepia(15%) saturate(199%) hue-rotate(302deg) brightness(125%) contrast(98%)"
			);
		case "white":
			return attr("brightness(0%) invert(100%)");

		case "darkWhite":
			return attr(
				"invert(100%) sepia(0%) saturate(5196%) hue-rotate(199deg) brightness(116%) contrast(94%)"
			);
		case "yellow":
			return attr(
				"invert(89%) sepia(23%) saturate(1181%) hue-rotate(347deg) brightness(104%) contrast(96%)"
			);
		default:
			return attr(
				"invert(19%) sepia(1%) saturate(0%) hue-rotate(45deg) brightness(100%) contrast(85%)"
			);
	}
};
