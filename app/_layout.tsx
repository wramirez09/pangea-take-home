import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";
import HomeScreen from "./app";
import ExchageRates from "./views/ExchangeRates";

const Stack = createNativeStackNavigator();

function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="ExchangeRates" component={ExchageRates} />
		</Stack.Navigator>
	);
}

export default function RootLayout() {
	return <RootStack />;
}
