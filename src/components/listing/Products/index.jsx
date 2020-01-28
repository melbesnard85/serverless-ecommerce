import { useState } from "react";
import { Flex, Item } from "react-flex-ready";
import Container from "components/common/Container";
import { Wrapper, Header } from "./styles";
import { GridIcon, ListIcon } from "components/common/Icons";
import ProductCard from "components/common/ProductCard";
import { useDispatchCart } from "providers/CartProvider";
import { addToCart } from "components/listing/actions";
import { useDispatchSidebar } from "providers/SidebarProvider";

export default ({ products }) => {
	const { dispatch } = useDispatchCart();
	const { dispatch: dispatchSidebar } = useDispatchSidebar();
	const [grid, setGrid] = useState(true);

	return (
		<Wrapper as={Container}>
			<Header>
				<h1>Shop</h1>
				<button
					style={{ background: "none", border: "none" }}
					type="button"
					onClick={() => setGrid(!grid)}
				>
					{grid ? (
						<ListIcon width={20} height={20} />
					) : (
						<GridIcon width={20} height={20} />
					)}
				</button>
			</Header>
			<Flex
				col={grid ? 3 : 12}
				colTablet={grid ? 3 : 12}
				colMobile={grid ? 6 : 12}
			>
				{products.map((product, i) => (
					<Item
						key={i}
						col={grid ? 3 : 12}
						colTablet={grid ? 3 : 12}
						colMobile={grid ? 6 : 12}
						marginBottom={30}
						stretch
					>
						<ProductCard
							onClick={() => {
								addToCart({ dispatch, payload: product });
								dispatchSidebar({ type: "OPEN_SIDEBAR", cartContent: true });
							}}
							grid={grid}
							{...product}
						/>
					</Item>
				))}
			</Flex>
		</Wrapper>
	);
};
