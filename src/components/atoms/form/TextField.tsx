import { InputContainer, InputLabel, TextFieldContainer } from "./commonStyle";
import React from "react";
import { TextFieldProps } from "./commonType";

const EndPositionAdorn = ({
	addDelete,
	endIconOut,
	endIcon,
	endLabel,
}: TextFieldProps) => {
	return <>{!endIconOut && endIcon && !addDelete && <>{endLabel}</>}</>;
};

const TextField = ({
	startIcon,
	endIcon = undefined,
	endIconOut = false,
	placeholder = undefined,
	endOnClick,
	maxLength = undefined,
	size = "medium",
	addDelete = false,
	type = "text",
	disabled = false,
	value,
	isError = false,
	fullWidth,
	onChange,
	padding,
	margin,
	endLabel,
	fontSize,
	autoComplete = "false",
	onKeyDown,
	onKeyPress,
	autoFocus,
}: TextFieldProps) => {
	const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e);
	};
	const inputType =
		type === "number" ? { pattern: "[0-9]*", inputmode: "numeric" } : {};
	return (
		<InputContainer fullWidth={fullWidth}>
			<InputLabel
				size={size}
				disabled={disabled}
				isError={isError}
				padding={padding}
				margin={margin}
			>
				<>{startIcon && startIcon}</>
				<TextFieldContainer
					aria-label={"hsTextField"}
					type={type}
					autoComplete={autoComplete}
					{...inputType}
					placeholder={placeholder}
					maxLength={maxLength}
					disabled={disabled}
					value={value}
					onChange={onChangeEvent}
					onKeyDown={onKeyDown}
					onKeyPress={onKeyPress}
					fontSize={fontSize}
					autoFocus={autoFocus}
				/>
				{(value !== "" || !addDelete) && (
					<EndPositionAdorn
						addDelete={addDelete}
						endIconOut={endIconOut}
						endIcon={endIcon}
						endOnClick={endOnClick}
						endLabel={endLabel}
					/>
				)}
			</InputLabel>
		</InputContainer>
	);
};

export default TextField;
