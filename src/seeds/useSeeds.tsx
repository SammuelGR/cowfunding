import useUsers from '@/hooks/useUsers';
import useCurrencies from '@/hooks/useCurrencies';

import { usersMock } from '@/mocks/users';
import currenciesMock from '@/mocks/currencies.json';

export const useSeeds = () => {
	const { createUser } = useUsers();
	const { setCurrencies } = useCurrencies();

	const seedData = () => {
		usersMock.forEach((user) => createUser(user));
		setCurrencies(currenciesMock);
	};

	return { seedData };
};
