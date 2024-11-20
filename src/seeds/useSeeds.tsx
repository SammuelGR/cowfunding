import useUsers from '@/hooks/useUsers';
import useCurrencies from '@/hooks/useCurrencies';

import { usersMock } from '@/mocks/users';
import currenciesMock from '@/mocks/currencies.json';

export const useSeeds = () => {
	const { setUsers } = useUsers();
	const { setCurrencies } = useCurrencies();

	const seedData = () => {
		setUsers(usersMock);
		setCurrencies(currenciesMock);
	};

	return { seedData };
};
