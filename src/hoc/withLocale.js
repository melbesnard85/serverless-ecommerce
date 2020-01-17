import React from "react";
import Error from "next/error";
import { getDisplayName } from "next/dist/next-server/lib/utils";
import { createIntlCache, RawIntlProvider, createIntl } from "react-intl";
import strings from "lang/strings";

const cache = createIntlCache();

export default Component => {
	const WithLocale = ({ locale, ...pageProps }) => {
		if (!locale) {
			return <Error statusCode={404} />;
		}

		const intl = createIntl(
			{
				locale: locale || "en",
				messages: locale ? strings[locale] : strings.default
			},
			cache
		);

		return (
			<RawIntlProvider value={intl}>
				<Component {...pageProps} />
			</RawIntlProvider>
		);
	};

	WithLocale.displayName = `withLang(${getDisplayName(Component)})`;

	return WithLocale;
};
