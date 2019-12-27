import Link from "next/link";
import Container from "components/common/Container";
import Logo from "components/common/Logo";
// import Logo from 'public/assets/logo/elliot-logo.png'
import { Wrapper } from "./styles";

export default () => (
	<Wrapper as={Container}>
		<Link href="/">
			<a>
				<Logo width={48} height={48} />
			</a>
		</Link>
	</Wrapper>
);
