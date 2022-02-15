import { colorPicker } from "./colorPicker";
import { borderStyle } from ".";

export type BorderType = {
	borderWidth?: number | string;
	/**
	 * @type {('black | pink | lightPink | white | darkWhite | lightGray | gray | hexColor..')}
	 */
	borderColor?: string;
	/**
	 * @default
	 * border: "1px solid black";
	 * @example
	 * <ComponentExample border />
	 * <ComponentExample border = {"double"} /> // string value is BorderStyle
	 */
	border?: boolean | string;
	/**
	 * @default
	 * border-left: "1px solid black";
	 * @example
	 * <ComponentExample borderLeft />
	 * <ComponentExample borderLeft = {"double"} /> // string value is BorderStyle
	 */
	borderLeft?: boolean | string;
	/**
	 * @default
	 * border-right: "1px solid black";
	 * @example
	 * <ComponentExample borderRight />
	 * <ComponentExample borderRight = {"double"} /> // string value is BorderStyle
	 */
	borderRight?: boolean | string;
	/**
	 * @default
	 * border-bottom: "1px solid black";
	 * @example
	 * <ComponentExample borderBottom />
	 * <ComponentExample borderBottom = {"double"} /> // string value is BorderStyle
	 */
	borderBottom?: boolean | string;
	/**
	 * @default
	 * border-top: "1px solid black";
	 * @example
	 * <ComponentExample borderTop />
	 * <ComponentExample borderTop = {"double"} /> // string value is BorderStyle
	 */
	borderTop?: boolean | string;
	/**
	 * @default
	 * border-radius : "4px";
	 */
	borderRadius?: boolean;
};

/**
 *
 * @params
 * * borderBottom,
 * * borderTop,
 * * borderLeft,
 * * borderRight,
 * * border,
 * * borderWidth,
 * * borderColor,
 * * borderRadius,
 */
export const border = (props: BorderType) => {
	const {
		borderBottom,
		borderTop,
		borderLeft,
		borderRight,
		border,
		borderWidth,
		borderColor,
		borderRadius,
	} = props;
	return [
		border && `border: 1px ${borderStyle(border)} black;`,
		borderBottom && `border-bottom:${borderStyle(borderBottom)};`,
		borderTop && `border-top:${borderStyle(borderTop)};`,
		borderLeft && `border-left:${borderStyle(borderLeft)};`,
		borderRight && `border-right:${borderStyle(borderRight)};`,
		borderWidth && `border-width:${borderWidth}px;`,
		borderColor && `border-color:${colorPicker(borderColor)};`,
		borderRadius && "border-radius: 8px;",
	].filter(Boolean);
};
