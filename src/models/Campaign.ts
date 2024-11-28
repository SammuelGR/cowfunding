import { Cryptocurrency } from './Currencies';

export interface Campaign {
	acceptedCurrencies: Cryptocurrency['code'][];
	description: string;
	endDate: Date | string;
	goalAmount: number;
	id: string;
	receivedAmount: number;
	title: string;
	userId: string;
}
