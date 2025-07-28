import * as React from "react";

import { ExchangeRateContext } from "./context";
import ExchangeRateResponse from "@/app/views/ExchangeRates/types";

const endPoint =
	process.env.MXN_XCHANGE_RATE_URL ??
	"https://api.gopangea.com/api/v5/FeesAndFX?exchange=USD-MXN%7CUS-MX&senderI";

const ExchangeRatesProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [exchangeRates, setExchangeRates] =
		React.useState<ExchangeRateResponse | null>(null);

	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState<string | null>(null);

	React.useEffect(() => {
		const fetchExchangeRates = async () => {
			try {
				const response = await fetch(endPoint);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setExchangeRates(data);
			} catch (e) {
				setError(
					`An error occurred while fetching exchange rates. ${
						(e as Error).message
					}`
				);
			} finally {
				setLoading(false);
			}
		};
		fetchExchangeRates();
	});

	return (
		<ExchangeRateContext.Provider
			value={{ exchangeRates, setExchangeRates, loading, error }}
		>
			{children}
		</ExchangeRateContext.Provider>
	);
};

export default ExchangeRatesProvider;
