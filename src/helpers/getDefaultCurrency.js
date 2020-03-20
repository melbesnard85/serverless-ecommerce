import axios from "axios";
import defaultCurrencyQuery from "queries/defaultCurrency";

export default async () => {
	const {
		data: {
			data: {
				node: {
					domain: {
						company: { currency }
					}
				}
			}
		}
	} = await axios.post(
		process.env.ENVIRONMENT === "staging"
			? `https://cors-anywhere.herokuapp.com/${process.env.ELLIOT_API}`
			: process.env.ELLIOT_API,
		{
			query: defaultCurrencyQuery,
			variables: {
				id: process.env.ELLIOT_STORE_FRONT_ID
			}
		},
		{
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				KEY: `KEY ${process.env.ELLIOT_API_KEY}`
			}
		}
	);

	return currency;
};
