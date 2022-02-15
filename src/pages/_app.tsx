import "../../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import { Hydrate } from "react-query/hydration";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import theme from "styles/theme";

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
					<RootContainer>
						<Component {...pageProps} />
					</RootContainer>
				</Hydrate>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default MyApp;

const RootContainer = styled.div`
	@media (min-width: 800px) {
		max-width: 414px;
		margin: 0 auto;
	}
`;
