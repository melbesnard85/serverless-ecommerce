import axios from "axios";
import productByIdQuery from "queries/productById";

export default async id => {
	const {
		data: {
			data: { node }
		}
	} = await axios.post(
		process.env.ELLIOT_API,
		// `https://cors-anywhere.herokuapp.com/${process.env.ELLIOT_API}`,
		{
			query: productByIdQuery,
			variables: {
				productId: id
			}
		},
		{
			headers: {
				"Content-Type": "application/json",
				KEY: `KEY ${process.env.ELLIOT_API_KEY}`
			}
		}
	);

	return node;
};
