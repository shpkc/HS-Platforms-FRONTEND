import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import { getMainGames } from "src/domains/GamesDomain";
import { lazy, Suspense } from "react";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import LoginContents from "src/components/organisms/login/LoginContents";

const HomeContents = lazy(
	() => import("src/components/organisms/home/HomeContents")
);

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
