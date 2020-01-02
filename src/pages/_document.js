import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				});

			const props = await super.getInitialProps(ctx);
			const {
				req: { locale, localeDataScript }
			} = ctx;

			return {
				...props,
				locale,
				localeDataScript,
				styles: (
					<>
						{props.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		// Polyfill Intl API for older browsers
		const polyfill = `https://cdn.polyfill.io/v3/polyfill.min.js?features=Intl.~locale.${this.props.locale}`;

		return (
			<html>
				<Head />
				<body>
					<Main />
					<script src={polyfill} />
					<script
						dangerouslySetInnerHTML={{
							__html: this.props.localeDataScript
						}}
					/>
					<NextScript />
				</body>
			</html>
		);
	}
}
