import React from "react";
import {
	NativeSyntheticEvent,
	StyleSheet,
	TextInput,
	TextInputChangeEventData,
	View,
} from "react-native";
import EditingToggle from "./EditingToggle";
import { useDebounce } from "@uidotdev/usehooks";
import useExchangeRates from "../context/ExchangeRates/context";
import { ExchangeRate } from "../views/ExchangeRates/types";
const styles = StyleSheet.create({
	textInput: {
		fontSize: 16,
		color: "#333",
		marginBottom: 5,
		padding: 5,
		width: "80%",
	},
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
		flexWrap: "wrap",
		width: "100%",
		padding: 5,
		paddingRight: 15,
		borderRadius: 3,
		borderWidth: 0.5,
	},
});

const EditableTextInput: React.FC<{ value: string; id: string }> = ({
	value,
	id,
}) => {
	const [isEditingMode, setIsEditingMode] = React.useState(false);
	const [keyboardInput, setKeyboardInput] = React.useState<string>();
	const userUpdatedRate = useDebounce(keyboardInput, 300);
	const { setExchangeRates, exchangeRates } = useExchangeRates();

	const handleEditingToggle = React.useCallback(() => {
		setIsEditingMode((prev) => !prev);
		if (
			exchangeRates !== null &&
			id &&
			typeof userUpdatedRate !== "undefined"
		) {
			const updatedRates: ExchangeRate[] = exchangeRates.map((exchangeRate) => {
				if (exchangeRate.Id === id) {
					exchangeRate.Rate = userUpdatedRate;
				}
				return exchangeRate;
			});

			if (!isEditingMode) setExchangeRates(updatedRates);
		}
	}, [exchangeRates, id, isEditingMode, setExchangeRates, userUpdatedRate]);

	const handleOnChange = React.useCallback(
		(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
			if (event && !Number.isNaN(event.nativeEvent.text)) {
				const filteredText = event.nativeEvent.text.replace(/[^0-9]/g, "");
				setKeyboardInput(filteredText);
			}
		},
		[setKeyboardInput]
	);

	const savedValue = React.useMemo(() => {
		const currentExchangeObj = exchangeRates?.find((arr) => {
			if (arr.Id === id) {
				return arr;
			}
		});
		return currentExchangeObj?.Rate;
	}, [exchangeRates, id]);

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				defaultValue={savedValue}
				editable={isEditingMode}
				clearButtonMode={isEditingMode ? "always" : "never"}
				onChange={handleOnChange}
				keyboardType="numeric"
				value={keyboardInput?.toString()}
			/>
			<EditingToggle setEditingMode={handleEditingToggle} />
		</View>
	);
};

export default EditableTextInput;
