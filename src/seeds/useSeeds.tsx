import useUsers, { usersStorageKey } from '@/hooks/useUsers';
import useCurrencies, { currenciesStorageKey } from '@/hooks/useCurrencies';

import { usersMock } from '@/mocks/users';
import currenciesMock from '@/mocks/currencies.json';

const seedsStorageKey = '@cowfunding:seeds';

export const useSeeds = () => {
	const { createUser } = useUsers();
	const { createCurrency } = useCurrencies();

	const seedData = () => {
		usersMock.forEach((user) => createUser(user));
		currenciesMock.forEach((currency) => createCurrency(currency));
		localStorage.setItem(seedsStorageKey, JSON.stringify({ hasSeeds: true }));
	};

	const clearData = () => {
		localStorage.removeItem(currenciesStorageKey);
		localStorage.removeItem(usersStorageKey);
		localStorage.removeItem(seedsStorageKey);
	};

	const toggleSeed = () => {
		const hasSeeds = localStorage.getItem(seedsStorageKey);

		if (!!hasSeeds) {
			clearData();
		} else {
			seedData();
		}
	};

	return { clearData, seedData, toggleSeed };
};
