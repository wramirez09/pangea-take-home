module.exports = {
	preset: "react-native",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	transformIgnorePatterns: [
		"node_modules/(?!(react-native|@react-native|react-native-.*|@react-navigation|react-navigation|@expo|expo-.*)/)",
	],
	testPathIgnorePatterns: [
		"<rootDir>/node_modules/",
		"<rootDir>/.expo/",
		"<rootDir>/dist/",
	],
	collectCoverageFrom: [
		"app/**/*.{js,jsx,ts,tsx}",
		"!app/**/*.d.ts",
		"!app/**/index.{js,jsx,ts,tsx}",
		"!app/**/*.stories.{js,jsx,ts,tsx}",
	],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
		"^.+\\.(ts|tsx)$": [
			"ts-jest",
			{
				tsconfig: {
					jsx: "react-jsx",
				},
			},
		],
	},
};
