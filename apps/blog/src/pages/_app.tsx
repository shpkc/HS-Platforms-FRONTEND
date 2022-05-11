import "../../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import { Hydrate } from "react-query/hydration";
import { ThemeProvider } from "@emotion/react";
import theme from "styles/theme";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HsContainer } from "@hs-platforms/hs-core-ui";

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
					<HsContainer margin={"0 auto"} maxWidth={"740px"}>
						<Component {...pageProps} />
					</HsContainer>
				</Hydrate>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default MyApp;
