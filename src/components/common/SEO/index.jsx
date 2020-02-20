import Head from "next/head";
import { useIntl } from "react-intl";
import Thumbnail from "assets/thumbnail.jpg";

export default ({ title, location = "", description, cover }) => {
	const { formatMessage, locale } = useIntl();

	return (
		<Head>
			<meta
				name="title"
				content={
					title ? formatMessage({ id: title }) : "Elliot Headless Pacakge"
				}
			/>
			<meta
				name="description"
				content={
					description
						? formatMessage({ id: description })
						: "Elliot - Serverless eCommerce Storefront. 100% headless & serverless. Built with Next js & one-click deployable to ZEIT NOW."
				}
			/>
			<meta
				name="image"
				content={
					cover
						? `${process.env.BASE_URL}/${cover}`
						: `${process.env.BASE_URL}/${Thumbnail}`
				}
			/>

			<meta property="og:url" content={`${process.env.BASE_URL}/${location}`} />
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content={
					title ? formatMessage({ id: title }) : "Elliot Headless Pacakge"
				}
			/>
			<meta
				property="og:description"
				content={
					description
						? formatMessage({ id: description })
						: "Elliot - Serverless eCommerce Storefront. 100% headless & serverless. Built with Next js & one-click deployable to ZEIT NOW."
				}
			/>
			<meta
				property="og:image"
				content={cover || `${process.env.BASE_URL}/${Thumbnail}`}
			/>
			{/* <meta property="fb:app_id" content={social.facebook} /> */}

			<meta name="twitter:card" content="summary" />
			{/* <meta name="twitter:creator" content={socialLinks.twitter} />
			<meta name="twitter:site" content={social.twitter} /> */}
			<meta
				name="twitter:title"
				content={
					title ? formatMessage({ id: title }) : "Elliot Headless Pacakge"
				}
			/>
			<meta
				name="twitter:description"
				content={
					description
						? formatMessage({ id: description })
						: "Elliot - Serverless eCommerce Storefront. 100% headless & serverless. Built with Next js & one-click deployable to ZEIT NOW."
				}
			/>
			<meta
				name="twitter:image:src"
				content={cover || `${process.env.BASE_URL}/${Thumbnail}`}
			/>
			{/* <link rel="publisher" href={socialLinks.google} /> */}
			<title>
				{title ? formatMessage({ id: title }) : "Elliot Headless Pacakge"}
			</title>
			<html lang={locale} dir="ltr" />
		</Head>
	);
};
