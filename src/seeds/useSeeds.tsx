import useCampaigns, { campaignsStorageKey } from '@/hooks/useCampaign';
import useCurrencies, { currenciesStorageKey } from '@/hooks/useCurrencies';
import useUsers, { usersStorageKey } from '@/hooks/useUsers';

import { campaignsMock } from '@/mocks/campaigns';
import currenciesMock from '@/mocks/currencies.json';
import { usersMock } from '@/mocks/users';

const seedsStorageKey = '@cowfunding:seeds';

export const useSeeds = () => {
	const { createUser } = useUsers();
	const { createCurrency } = useCurrencies();
	const { createCampaign } = useCampaigns();

	const seedData = () => {
		usersMock.forEach((user) => createUser(user));
		currenciesMock.forEach((currency) => createCurrency(currency));
		campaignsMock.forEach((campaign) => createCampaign(campaign));

		localStorage.setItem(seedsStorageKey, JSON.stringify({ hasSeeds: true }));
	};

	const clearData = () => {
		localStorage.removeItem(currenciesStorageKey);
		localStorage.removeItem(usersStorageKey);
		localStorage.removeItem(campaignsStorageKey);
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
