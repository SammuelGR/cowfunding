import { Cryptocurrency } from './Currencies';
import { Donation } from './Donation';

export interface Campaign {
	acceptedCurrencies: Cryptocurrency['code'][];
	description: string;
	donations: Donation[];
	endDate: Date | string;
	goalAmount: number;
	id: string;
	receivedAmount: number;
	title: string;
	userId: string;
}
