import * as React from "react";

import { ExchangeRateContext } from "./context";
import { ExchangeRate } from "@/app/views/ExchangeRates/types";

const ExchangeRatesProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [exchangeRates, setExchangeRates] = React.useState<
		ExchangeRate[] | null
	>(null);

	React.useEffect(() => {
		console.log({ savedRates: exchangeRates });
	}, [exchangeRates]);

	return (
		<ExchangeRateContext.Provider value={{ exchangeRates, setExchangeRates }}>
			{children}
		</ExchangeRateContext.Provider>
	);
};

export default ExchangeRatesProvider;
