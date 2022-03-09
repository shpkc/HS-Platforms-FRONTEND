import React from "react";
import HsButton from "src/components/atoms/button/HsButton";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import HsTextField from "src/components/atoms/textfield/HsTextField";
import { validationHelper } from "src/helper/validationHelper";

const LoginContents = () => {
	const [loginInfo, setLoginInfo] = React.useState({
		memberEmail: "",
		memberPassword: "",
	});

	const onChangeEmail = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) =>
			setLoginInfo(state => ({
				...state,
				memberEmail: event.target.value,
			})),
		[loginInfo.memberEmail]
	);

	const onChangePassword = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) =>
			setLoginInfo(state => ({
				...state,
				memberPassword: event.target.value,
			})),
		[loginInfo.memberPassword]
	);

	const onClickEnter = (e: React.KeyboardEvent) => {
		e.preventDefault();
		if (e.key === "Enter") {
		}
	};

	return (
		<HsContainer
			padding={["100px 15px 0 15px", "150px 0 0 0"]}
			margin={[, "0 auto"]}
			width={[, "500px"]}
		>
			<HsText color={"white"} variant={"h1"} margin="0 0 30px 0">
				LOGIN
			</HsText>
			<HsContainer margin="0 0 20px 0">
				<HsText color="white" margin="0 0 10px 0">
					Email
				</HsText>
				<HsTextField
					value={loginInfo.memberEmail}
					onChange={onChangeEmail}
					placeholder="example@example.com"
				/>
				<HsText
					color="red.primary"
					fontSize={"0.75rem"}
					height={"10px"}
					margin="10px 0 0 0"
				>
					{validationHelper(loginInfo.memberEmail)("email").msg}
				</HsText>
			</HsContainer>
			<HsContainer margin="0 0 30px 0">
				<HsText color="white" margin="0 0 10px 0">
					Password
				</HsText>
				<HsTextField
					value={loginInfo.memberPassword}
					onChange={onChangePassword}
					type={"password"}
					placeholder="*********"
				/>
			</HsContainer>
			<HsButton
				borderRadius={4}
				height={50}
				color="white"
				backgroundColor="purple.primary"
				margin="0 0 20px 0"
			>
				Sign in
			</HsButton>
		</HsContainer>
	);
};

export default LoginContents;
