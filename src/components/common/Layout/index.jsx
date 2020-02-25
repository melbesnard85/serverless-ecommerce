import Header from "components/theme/Header";
import Footer from "components/common/Footer";
import { withTheme } from "styled-components";
import GlobalStyle from "components/theme/global-style";
import Head from "next/head";
import { Wrapper } from "./styles";

const Layout = ({ children, theme }) => (
	<>
		<Head>
			{/* TODO: pass custom font from theme */}
			<link
				href={`https://fonts.googleapis.com/css?family=${theme.fonts.primary.replace(
					" ",
					"+"
				)}:300,400,500|${theme.fonts.primary.replace(
					" ",
					"+"
				)}:400,700&display=fallback`}
				rel="stylesheet"
			/>
		</Head>
		<GlobalStyle />
		<>
			<Header />
			<Wrapper>{children}</Wrapper>
			<Footer />
		</>
	</>
);

export default withTheme(Layout);
