import * as React from "react";
import { ExchangeRate } from "../../types";

export const ExchangeRateContext = React.createContext<{
	exchangeRates: ExchangeRate[] | null;
	setExchangeRates: React.Dispatch<React.SetStateAction<ExchangeRate[] | null>>;
}>({
	exchangeRates: null,
	setExchangeRates: () => {},
});

const useExchangeRates = () => {
	const context = React.useContext(ExchangeRateContext);
	if (typeof context === "undefined") {
		throw new Error(
			"useExchangeRates must be used within an ExchangeRateProvider"
		);
	}
	return context;
};

export default useExchangeRates;
