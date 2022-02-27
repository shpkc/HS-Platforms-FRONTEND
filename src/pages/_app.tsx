import "../../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import { Hydrate } from "react-query/hydration";
import { ThemeProvider } from "@emotion/react";
import theme from "styles/theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayoutTemplate from "src/components/templates/LayoutTemplate";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient} contextSharing>
				<Hydrate state={pageProps.dehydratedState}>
					<LayoutTemplate
						seo={{
							title: "",
							description: "",
						}}
					>
						<Component {...pageProps} />
					</LayoutTemplate>
				</Hydrate>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default MyApp;
