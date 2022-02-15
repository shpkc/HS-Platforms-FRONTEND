export type SizeType = "small" | "medium" | "large";

export type LabelProps = {
	size: SizeType;
	disabled: boolean;
	isError: boolean;
	padding?: string;
	margin?: string;
};

export type TextFieldProps = {
	startIcon?: JSX.Element;
	endIcon?: string;
	startIconOut?: boolean;
	endIconOut?: boolean;
	label?: string;
	placeholder?: string;
	maxLength?: number;
	size?: SizeType;
	addDelete?: boolean;
	type?: string;
	value?: string;
	onChange?: (target: any) => void;
	disabled?: boolean;
	multiline?: boolean;
	row?: number;
	autoRow?: boolean;
	isError?: boolean;
	errMsg?: string;
	successMsg?: string;
	isSuccess?: boolean;
	fullWidth?: boolean;
	padding?: string;
	margin?: string;
	labelPadding?: string;
	endOnClick?: () => void;
	startOnClick?: () => void;
	endLabel?: JSX.Element;
	autoComplete?: "true" | "false" | string;
	onKeyDown?: (e: any) => void;
	onKeyPress?: (e: any) => void;
	fontSize?: string;
	placeholderSize?: string;
	autoFocus?: boolean;
};
