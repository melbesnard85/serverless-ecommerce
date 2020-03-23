import Error from "next/error";
import Layout from "components/common/Layout";
import SEO from "components/common/SEO";
import Container from "components/common/Container";
import withLocale from "hoc/withLocale";
import getCollections from "helpers/getCollections";
import getSeoDetails from "helpers/getSeoDetails";
import getPromotion from "helpers/getPromotion";
import getCheckout from "helpers/getCheckout";
import getLegal from "helpers/getLegal";

const Index = ({ faqs, collections, seoDetails, promotion, checkout }) => (
	<Layout
		collections={collections}
		seoDetails={seoDetails}
		promotion={promotion}
		checkout={checkout}
	>
		{faqs ? (
			<>
				<SEO
					localizedTitle="shop.page.title"
					localizedDescription="shop.page.description"
					seoDetails={seoDetails}
				/>
				<Container>
					<div dangerouslySetInnerHTML={{ __html: faqs }} />
				</Container>
			</>
		) : (
			<Error statusCode={404} />
		)}
	</Layout>
);

export const getStaticProps = async ({ params: { lang } }) => {
	try {
		const collections = await getCollections();
		const seoDetails = await getSeoDetails();
		const promotion = await getPromotion();
		const checkout = await getCheckout();
		const { faqs } = await getLegal();

		return {
			props: {
				faqs,
				collections,
				seoDetails,
				locale: lang,
				promotion,
				checkout
			}
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				faqs: "",
				collections: [],
				seoDetails: {},
				locale: lang,
				promotion: {},
				checkout: {}
			}
		};
	}
};

export { getStaticPaths } from "./index";

export default withLocale(Index);
