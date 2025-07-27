import * as React from "react";
import { StyleSheet, Switch } from "react-native";

const styles = StyleSheet.create({
	toggle: {
		transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
	},
});

const EditingToggle: React.FC<{
	setEditingMode: (value: boolean) => void;
}> = ({ setEditingMode }) => {
	const [isEnabled, setIsEnabled] = React.useState(false);

	const handleOnChange = React.useCallback(() => {
		setIsEnabled((prev) => !prev);
		setEditingMode(isEnabled);
	}, [setEditingMode, isEnabled]);

	return (
		<Switch
			value={isEnabled}
			onValueChange={handleOnChange}
			style={styles.toggle}
		/>
	);
};

export default EditingToggle;
