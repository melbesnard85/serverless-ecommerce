import axios from "axios";
import seoQuery from "queries/seo";
import { ELLIOT_STORE_FRONT_ID, ELLIOT_API_KEY } from "config";

export default async () => {
	const { data } = await axios.post(
		"https://admin.elliot.store/api ",
		{
			query: seoQuery,
			variables: {
				id: ELLIOT_STORE_FRONT_ID
			}
		},
		{
			headers: {
				"Content-Type": "application/json",
				KEY: `KEY ${ELLIOT_API_KEY}`
			}
		}
	);

	return data.data.node;
};
