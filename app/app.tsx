import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

type RootStackParamList = {
	ExchangeRates: undefined;
}; // work around for the missing type definition

const HomeScreen: React.FC = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
