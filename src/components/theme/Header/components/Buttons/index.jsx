import { Wrapper, Actions, Cart, CartItems } from "./styles";
import {
	AvatarIcon,
	HeartIcon,
	CartIcon,
	MenuIcon
} from "components/common/Icons";
import Search from "components/theme/Header/components/Search";
import Link from "next/link";
import { useCart } from "providers/CartProvider";
import { useIntl } from "react-intl";

const Buttons = ({ toggleSidebar }) => {
	const { state } = useCart();
	const { locale } = useIntl();

	return (
		<Wrapper>
			<Search />
			<Actions>
				<Link href={`/${locale}/`} as={`/${locale}/`}>
					<a>
						<AvatarIcon width={20} height={20} />
					</a>
				</Link>
				<Link href="/favorite">
					<a>
						<HeartIcon width={20} height={20} />
					</a>
				</Link>
				<button
					type="button"
					onClick={() => toggleSidebar({ type: "OPEN_SIDEBAR", cart: true })}
				>
					<Cart>
						<CartIcon width={20} height={20} />
						{state.data && state.data.length > 0 && (
							<CartItems>{state.data.length}</CartItems>
						)}
					</Cart>
				</button>
				<button
					type="button"
					onClick={() => toggleSidebar({ type: "OPEN_SIDEBAR", cart: false })}
				>
					<MenuIcon width={20} height={20} />
				</button>
			</Actions>
		</Wrapper>
	);
};

export default Buttons;
