import { LabelText, Message } from "./commonStyle";
import React from "react";
import TextArea from "./TextArea";
import TextField from "./TextField";
import { TextFieldProps } from "./commonType";

const YsTextField = ({
	label = "",
	multiline = false,
	isError = false,
	isSuccess = false,
	errMsg = "",
	successMsg = "",
	labelPadding,
	...rest
}: TextFieldProps) => {
	const getInputType = () =>
		multiline ? (
			<TextArea {...rest} />
		) : (
			<TextField isError={isError} {...rest} />
		);

	return (
		<form autoComplete="off">
			<LabelText aria-label="form" labelPadding={labelPadding}>
				{label}
			</LabelText>
			{getInputType()}
			{errMsg !== "" && <Message type="error">{errMsg}</Message>}
			{successMsg !== "" && <Message type="success">{successMsg}</Message>}
		</form>
	);
};

export default YsTextField;
