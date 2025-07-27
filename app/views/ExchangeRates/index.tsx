import ExchangeRates from "@/app/components/ExchangeRates";
import * as React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

import ExchangeRateResponse from "./types";
import TEXT_CONSTANTS from "@/app/utils/consts";
import useExchangeRates from "@/app/context/ExchangeRates/context";

const endPoint =
	process.env.MXN_XCHANGE_RATE_URL ??
	"https://api.gopangea.com/api/v5/FeesAndFX?exchange=USD-MXN%7CUS-MX&senderI";

const ExchageRates: React.FC = () => {
	const { setExchangeRates } = useExchangeRates();

	const [exchangeRatesData, setExchangeRatesData] =
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
				setExchangeRatesData(data);
				setExchangeRates(data.ExchangeRates);
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
	}, [setExchangeRates]);

	const mxnData = React.useMemo(() => {
		return exchangeRatesData?.ExchangeRates.filter((arr) => {
			return arr.DestinationCurrency === TEXT_CONSTANTS.mxn;
		});
	}, [exchangeRatesData]);

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
