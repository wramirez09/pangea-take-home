import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { EditingToggle } from "./EditingToggle";

const styles = StyleSheet.create({
	textInput: {
		fontSize: 16,
		color: "#333",
		marginBottom: 5,
		padding: 5,
	},
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
		flexWrap: "wrap",
		width: "100%",
		padding: 5,
		borderRadius: 3,
		borderWidth: 0.5,
	},
});

export const EditableTextInput: React.FC<{ value: string }> = ({ value }) => {
	const [isEditingMode, setIsEditingMode] = React.useState(false);

	const handleEditingToggle = React.useCallback(() => {
		setIsEditingMode((prev) => !prev);
	}, []);

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				defaultValue={value}
				editable={isEditingMode}
				clearButtonMode={isEditingMode ? "always" : "never"}
			/>
			<EditingToggle setEditingMode={handleEditingToggle} />
		</View>
	);
};
