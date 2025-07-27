import { ExchangeRates } from "@/app/components";
import * as React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { useExchangeRates } from "./context/ExchangeRates/context";
import { ExchangeRateResponse } from "./types";

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

	if (loading) {
		return <Text>Loading...</Text>;
	}
	if (error) {
		return <Text>{error}</Text>;
	}
	return (
		<ScrollView>
			<SafeAreaView>
				<Text>Exchange Rates</Text>

				<ExchangeRates
					exchangeRateData={exchangeRatesData?.ExchangeRates ?? []}
				/>
				{/* <Text>Fees</Text>
			{exchangeRatesData?.Fees.Card.map((fee, index) => (
				<>
					<Text key={`${fee.Threshold}-${fee.Fee}-card-${index}`}>
						Card Fee: {fee.Fee} at Threshold: {fee.Threshold}
					</Text>
					<Text key={`${fee.Threshold}-${fee.Fee}-ach-${index}`}>
						Ach Fee: {fee.Fee} at Threshold: {fee.Threshold}
					</Text>
				</>
			))}
			<Text>Elektra Surcharge Fees</Text>
			{exchangeRatesData?.ElektraSurchargeFees.Card.map((fee, index) => (
				<>
					<Text key={`${fee.Threshold}-${fee.Fee}-elektra-card-${index}`}>
						Elektra Card Fee: {fee.Fee} at Threshold: {fee.Threshold}
					</Text>
					<Text key={`${fee.Threshold}-${fee.Fee}-elektra-ach-${index}`}>
						Elektra Ach Fee: {fee.Fee} at Threshold: {fee.Threshold}
					</Text>
				</>
			))}
			{exchangeRatesData?.ElektraSurchargeFees.CashCard.map((fee, index) => (
				<Text key={`${fee.Threshold}-${fee.Fee}-elektra-cash-card-${index}`}>
					Elektra Cash Card Fee: {fee.Fee} at Threshold: {fee.Threshold}
				</Text>
			))} */}
			</SafeAreaView>
		</ScrollView>
	);
};

export default ExchageRates;
