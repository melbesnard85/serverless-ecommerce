import Link from "next/link";
import { useIntl, FormattedMessage } from "react-intl";
import { useCurrency } from "providers/CurrencyProvider";
import Dropdown from "components/common/Dropdown";
import Container from "components/common/Container";
import languages from "helpers/languages.json";
import currencies from "helpers/currencies.json";
import {
	CopyWrapper,
	Item,
	List,
	ListTitle,
	Navigation,
	Separator,
	Wrapper
} from "./styles";

const Footer = ({ collections, seoDetails }) => {
	const { locale } = useIntl();
	const { state: currency, setState: setCurrency } = useCurrency();

	return (
		<Wrapper>
			<Navigation>
				<List>
					<ListTitle>
						<FormattedMessage id="footer.help_and_information" />
					</ListTitle>
					<Item>
						<Link href="/[lang]/faqs" as={`/${locale}/faqs`}>
							<a>
								<FormattedMessage id="footer.faqs" />
							</a>
						</Link>
					</Item>
					<Item>
						<Link href="/[lang]/return-policy" as={`/${locale}/return-policy`}>
							<a>
								<FormattedMessage id="footer.return_policy" />
							</a>
						</Link>
					</Item>
				</List>
				<List>
					<ListTitle>
						<FormattedMessage id="footer.about" />{" "}
						{seoDetails?.lookAndFeel?.seo?.name}
					</ListTitle>
					<Item>
						<Link href="/[lang]/about" as={`/${locale}/about`}>
							<a>
								<FormattedMessage id="footer.about_us" />
							</a>
						</Link>
					</Item>
				</List>
				<List>
					<ListTitle>
						<FormattedMessage id="footer.online_shop" />
					</ListTitle>
					{collections &&
						collections.edges &&
						collections?.edges
							.filter(({ node: { products } }) => products?.edges?.length > 0)
							.map(({ node: { id, name, slug } }) => (
								<Item key={id}>
									<Link
										href="/[lang]/collection/[slug]"
										as={`/${locale}/collection/${slug}`}
									>
										<a>{name}</a>
									</Link>
								</Item>
							))}
				</List>
				<List>
					<ListTitle>
						<FormattedMessage id="footer.language" />
					</ListTitle>
					<Dropdown
						standalone
						options={languages}
						displayDefaultValue
						languages
					/>
				</List>
				<List>
					<ListTitle>
						<FormattedMessage id="footer.currency" />
					</ListTitle>
					<Dropdown
						standalone
						options={currencies}
						currency={currency}
						setCurrency={setCurrency}
						displayDefaultValue
					/>
				</List>
			</Navigation>
			<Separator />
			<Container>
				<CopyWrapper>
					<p>
						© {new Date().getFullYear()}{" "}
						<span>{seoDetails?.lookAndFeel?.seo?.name}.</span>{" "}
						<FormattedMessage id="footer.rights_reserved" />
					</p>
					<ul>
						<li>
							<Link
								href="/[lang]/privacy-policy"
								as={`/${locale}/privacy-policy`}
							>
								<a>
									<FormattedMessage id="footer.privacy_policy" />
								</a>
							</Link>
						</li>
						<li>
							<Link
								href="/[lang]/terms-and-conditions"
								as={`/${locale}/terms-and-conditions`}
							>
								<a>
									<FormattedMessage id="footer.terms_conditions" />
								</a>
							</Link>
						</li>
					</ul>
				</CopyWrapper>
			</Container>
		</Wrapper>
	);
};

export default Footer;
