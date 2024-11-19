import { Country } from '@/utils/countries';

export interface User {
	country: Country;
	email: string;
	fullname: string;
	walletAddress: string;
}
