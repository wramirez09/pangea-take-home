import * as React from "react";
import { Text } from "react-native";
import { ExchangeRateResponse } from "../types";

const ExchageRates: React.FC = () => {
	const [exchangeRatesData, setExchangeRatesData] =
		React.useState<ExchangeRateResponse | null>(null);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState<string | null>(null);

	React.useEffect(() => {
		const fetchExchangeRates = async () => {
			try {
				const response = await fetch(
					"https://api.gopangea.com/api/v5/FeesAndFX?exchange=USD-MXN%7CUS-MX&senderI"
				);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setExchangeRatesData(data);
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
	}, []);

	if (loading) {
		return <Text>Loading...</Text>;
	}
	if (error) {
		return <Text>{error}</Text>;
	}
	return (
		<>
			<Text>Exchange Rates</Text>
			{exchangeRatesData?.ExchangeRates.map((rate) => (
				<Text key={rate.Id}>
					{rate.SourceCurrency} to {rate.DestinationCurrency}: {rate.Rate}
				</Text>
			))}
			<Text>Fees</Text>
			{exchangeRatesData?.Fees.Card.map((fee) => (
				<>
					<Text key={`${fee.Threshold}-${fee.Fee}`}>
						Card Fee: {fee.Fee} at Threshold: {fee.Threshold}
					</Text>
					<Text key={`${fee.Threshold}-${fee.Fee}`}>
						Ach Fee: {fee.Fee} at Threshold: {fee.Threshold}
					</Text>
				</>
			))}
			<Text>Elektra Surcharge Fees</Text>
			{exchangeRatesData?.ElektraSurchargeFees.Card.map((fee) => (
				<>
					<Text key={`${fee.Threshold}-${fee.Fee}`}>
						Elektra Card Fee: {fee.Fee} at Threshold: {fee.Threshold}
					</Text>
					<Text key={`${fee.Threshold}-${fee.Fee}`}>
						Elektra Ach Fee: {fee.Fee} at Threshold: {fee.Threshold}
					</Text>
				</>
			))}
			{exchangeRatesData?.ElektraSurchargeFees.CashCard.map((fee) => (
				<Text key={`${fee.Threshold}-${fee.Fee}`}>
					Elektra Cash Card Fee: {fee.Fee} at Threshold: {fee.Threshold}
				</Text>
			))}
		</>
	);
};

export default ExchageRates;
