import { Cryptocurrency } from './Currencies';
import { User } from './User';

export interface Donation {
	amount: number;
	createDate: Date | string;
	currencyCode: Cryptocurrency['code'];
	id: string;
	usdAmount: number;
	userId: User['id'];
}
