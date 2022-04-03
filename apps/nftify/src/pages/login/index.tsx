import LayoutTemplate from "src/components/templates/LayoutTemplate";
import LoginContents from "src/components/organisms/login/LoginContents";

const Login = () => {
	return (
		<LayoutTemplate
			seo={{
				title: "Login",
				description: "World Wide Games",
			}}
		>
			<LoginContents />
		</LayoutTemplate>
	);
};

export default Login;
