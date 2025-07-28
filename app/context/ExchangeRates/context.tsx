import ExchangeRateResponse from "@/app/views/ExchangeRates/types";
import * as React from "react";

export const ExchangeRateContext = React.createContext<{
	exchangeRates: ExchangeRateResponse | null;
	setExchangeRates: React.Dispatch<
		React.SetStateAction<ExchangeRateResponse | null>
	>;
	loading: boolean;
	error: string | null;
}>({
	exchangeRates: null,
	setExchangeRates: () => {},
	loading: false,
	error: null,
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
