import React from "react";
import { render, screen } from "@testing-library/react-native";
import ExchageRates from "../views/ExchangeRates";

describe("ExchangeRates", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("ExchangeRates component", async () => {
		const view = render(<ExchageRates />);
		expect(view).toMatchInlineSnapshot();
	});
});
