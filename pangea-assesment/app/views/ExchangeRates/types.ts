export type ExchangeRateResponse = {
	ExchangeRates: ExchangeRate[];
	Fees: Fees;
	ElektraSurchargeFees: ElektraSurchargeFees;
};

export type ExchangeRate = {
	Id: string;
	SourceCurrency: string;
	DestinationCurrency: string;
	Rate: string;
	PromotionalRate: string;
	PromotionalSenderLimit: string;
	MinSendingAmount?: string;
	Expiration: string;
	ExchangeRateType: string;
	PaymentMethod: string;
	Label: string;
};

export type Fees = {
	Card: Card[];
	Cash: any[];
	Ach: Ach[];
	CashCard: any[];
};

export type Card = {
	Threshold: number;
	Fee: number;
};

export type Ach = {
	Threshold: number;
	Fee: number;
};

export type ElektraSurchargeFees = {
	Card: Card2[];
	Cash: any[];
	Ach: Ach2[];
	CashCard: any[];
};

export type Card2 = {
	Threshold: number;
	Fee: number;
};

export type Ach2 = {
	Threshold: number;
	Fee: number;
};
