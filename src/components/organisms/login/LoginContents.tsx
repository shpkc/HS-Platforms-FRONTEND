import React from "react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import HsTextField from "src/components/atoms/textfield/HsTextField";

const LoginContents = () => {
	const [loginInfo, setLoginInfo] = React.useState({
		memberEmail: "",
		memberPassword: "",
	});

	return (
		<HsContainer
			padding={["100px 15px 0 15px", "150px 0 0 0"]}
			margin={[, "0 auto"]}
			width={[, "500px"]}
		>
			<HsText color={"white"} variant={"h4"} margin="0 0 20px 0">
				LOGIN
			</HsText>
			<HsTextField value={loginInfo.memberEmail} />
			<HsTextField value={loginInfo.memberPassword} />
		</HsContainer>
	);
};

export default LoginContents;
