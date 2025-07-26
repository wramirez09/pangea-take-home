import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

const HomeScreen: React.FC = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Welcome to the Mexican Exhange Rates View</Text>
			<Text onPress={() => navigation.navigate("ExchangeRates")}>
				Go to Exchange Rates
			</Text>
		</View>
	);
};

export default HomeScreen;
