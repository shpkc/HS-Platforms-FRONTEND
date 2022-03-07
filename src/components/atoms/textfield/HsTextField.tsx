import styled from "@emotion/styled";
import { SpaceProps, compose, space } from "styled-system";

interface TextFieldProps extends SpaceProps {
	height?: number;
}

const DefaultTextFieldLayout = styled.div``;

const DefaultTextFieldStyle = styled.input<TextFieldProps>`
	width: 100%;
	background-color: #222227;
	line-height: 1.1;
	border: none;
	border-radius: 4px;
	padding: 0 16px;
	flex: 1 1 auto;
	font-size: 16px;
	color: white;
	box-sizing: border-box;
	&:focus {
		outline: none;
	}
	&:focus-within {
		border: 1px solid #007aff;
	}
	${props => (props.height ? `height : ${props.height}px` : "height : 48px")};
`;

const HsTextField = ({
	value,
	onChange,
	placeholder,
	label,
	errorMessage,
}: {
	value: string;
	onChange: any;
	placeholder?: string;
	label?: string;
	errorMessage?: string;
}) => {
	return (
		<DefaultTextFieldLayout>
			<DefaultTextFieldStyle
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</DefaultTextFieldLayout>
	);
};

export default HsTextField;
