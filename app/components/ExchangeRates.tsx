import { startCase } from "lodash";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ExchangeRate } from "../views/ExchangeRates/types";
import EditableTextInput from "./EditableTextInput";
import TEXT_CONSTANTS from "../utils/consts";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
		width: "100%",
	},
	textInput: {
		fontSize: 16,
		color: "#333",
		marginBottom: 5,
		paddingLeft: 5,
	},
	text: {
		marginBottom: 5,
		paddingLeft: 5,
		fontWeight: "bold",
	},
});

const DataRenderer: React.FC<{
	data: ExchangeRate[];
}> = ({ data }) => {
	const items = [];
	for (let i = 0; i < data.length; i++) {
		const id = data[i].Id;
		for (const [key, value] of Object.entries(data[i])) {
			let valueInput;
			valueInput =
				key === TEXT_CONSTANTS.rate ? (
					<EditableTextInput value={value} id={id} />
				) : (
					<Text style={styles.textInput}>{value}</Text>
				);

			items.push(
				<View style={styles.container} key={`${key}-${value}`}>
					<Text style={styles.text}>{startCase(key)}:</Text>
					{valueInput}
				</View>
			);
		}
	}

	return (
		<>
			{items.map((item, index) => {
				return <Text key={index + 1}>{item}</Text>;
			})}
		</>
	);
};

const ExchangeRates: React.FC<{
	exchangeRateData: ExchangeRate[];
}> = ({ exchangeRateData }) => {
	return (
		<>
			<DataRenderer data={exchangeRateData} />
		</>
	);
};

export default ExchangeRates;
