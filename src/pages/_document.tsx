import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="ko">
				<Head>
					<script
						type="text/javascript"
						src="//dapi.kakao.com/v2/maps/sdk.js?appkey=438805b1515722f904ec339200da67d7"
					></script>
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
MyDocument.getInitialProps = async ctx => {
	const initialProps = await Document.getInitialProps(ctx);
	return { ...initialProps };
};
