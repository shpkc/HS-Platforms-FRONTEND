import Document, { Html, Head, Main, NextScript } from "next/document";
declare global {
	interface Window {
		dataLayer: any;
	}
}
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="ko">
				<Head>
					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-4180VKWTVQ"
					></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
     				window.dataLayer = window.dataLayer || [];
        			function gtag(){dataLayer.push(arguments);}
        			gtag('js', new Date());
        			gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          			page_path: window.location.pathname,
        			});
      				`,
						}}
					/>
					<link rel="shortcut icon" href="/static/icons/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
					<meta charSet="utf-8"></meta>
					<body>
						<Main />
						<NextScript />
					</body>
				</Head>
			</Html>
		);
	}
}
