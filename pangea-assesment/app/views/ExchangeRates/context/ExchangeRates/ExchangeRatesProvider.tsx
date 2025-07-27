import * as React from "react";
import { ExchangeRate } from "../../types";
import { ExchangeRateContext } from "./context";

export const ExchangeRatesProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [exchangeRates, setExchangeRates] = React.useState<
		ExchangeRate[] | null
	>(null);

	return (
		<ExchangeRateContext.Provider value={{ exchangeRates, setExchangeRates }}>
			{children}
		</ExchangeRateContext.Provider>
	);
};
