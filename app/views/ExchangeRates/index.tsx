import ExchangeRates from "@/app/components/ExchangeRates";
import * as React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

import TEXT_CONSTANTS from "@/app/utils/consts";
import useExchangeRates from "@/app/context/ExchangeRates/context";
import { ExchangeRate } from "./types";

const ExchageRates: React.FC = () => {
	const { exchangeRates, loading, error } = useExchangeRates();

	const mxnData = React.useMemo(() => {
		if (exchangeRates)
			return exchangeRates.ExchangeRates.filter((arr: ExchangeRate) => {
				return arr.DestinationCurrency === TEXT_CONSTANTS.mxn;
			});
	}, [exchangeRates]);

	if (loading) {
		return <Text>Loading...</Text>;
	}
	if (error) {
		return <Text>{error}</Text>;
	}
	return (
		mxnData && (
			<ScrollView>
				<SafeAreaView>
					<Text>Exchange Rates</Text>
					<ExchangeRates exchangeRateData={mxnData} />
				</SafeAreaView>
			</ScrollView>
		)
	);
};

export default ExchageRates;
