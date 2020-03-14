import getMinimalCart from "./getMinimalCart";

const getShippingOptions = async ({ shippingDestination, cart, checkout }) => {
	try {
		const allShippingOptionsPayload = {
			checkoutId: checkout.id,
			domainId: checkout.domain.id,
			shippingDestination: {
				name: "",
				address1: shippingDestination.line1,
				address2: shippingDestination.line2,
				city: shippingDestination.city,
				state: shippingDestination.state,
				country: shippingDestination.country,
				zip: shippingDestination.zip
			},
			cart: getMinimalCart(cart)
		};

		const url = process.env.ELLIOT_ORDER_DETAILS_URL;

		const allShippingOptions = await (async () => {
			const res = await fetch(url, {
				method: "post",
				body: JSON.stringify(allShippingOptionsPayload),
				headers: { "Content-Type": "application/json" }
			});

			return res.json();
		})();

		return allShippingOptions;
	} catch (error) {
		console.error(error);
	}
};

export default getShippingOptions;
