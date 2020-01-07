export const addToCart = async ({ dispatch, payload }) => {
	try {
		await dispatch({
			type: "ADD_TO_CART",
			payload: {
				...payload,
				quantity: 1
			}
		});
	} catch (err) {
		console.log(err);
	}
};
