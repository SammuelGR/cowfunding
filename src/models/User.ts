import { Country } from '@/enums/Country';

export interface User {
	country: Country;
	email: string;
	fullname: string;
	id: string;
	password: string;
	walletAddress: string;
}
