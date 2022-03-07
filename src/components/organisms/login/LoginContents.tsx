import React from "react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import HsTextField from "src/components/atoms/textfield/HsTextField";

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

	return (
		<HsContainer
			padding={["100px 15px 0 15px", "150px 0 0 0"]}
			margin={[, "0 auto"]}
			width={[, "500px"]}
		>
			<HsText color={"white"} variant={"h1"} margin="0 0 50px 0">
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
			</HsContainer>
			<HsContainer margin="0 0 10px 0">
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
		</HsContainer>
	);
};

export default LoginContents;
