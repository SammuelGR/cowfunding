import React, { createContext, useContext, useEffect, useState } from 'react';

import { Cryptocurrency } from '@/models/Currencies';

export interface CurrenciesProviderProps {
	createCurrency: (currency: Cryptocurrency) => void;
	currencies: Cryptocurrency[];
	deleteCurrency: (currencyCode: string) => void;
	editCurrency: (currency: Cryptocurrency) => void;
	setCurrencies: React.Dispatch<React.SetStateAction<Cryptocurrency[]>>;
}

export const currenciesStorageKey = '@cowfunding:currencies';

const CurrenciesContext = createContext<CurrenciesProviderProps | null>(null);

export const CurrenciesProvider = ({ children }: React.PropsWithChildren) => {
	const [currencies, setCurrencies] = useState<Cryptocurrency[]>([]);

	useEffect(() => {
		const storedCurrencies = localStorage.getItem(currenciesStorageKey);

		if (storedCurrencies) {
			const parsedCurrencies = JSON.parse(storedCurrencies);

			setCurrencies(parsedCurrencies);
		}
	}, []);

	const updateCurrencies = (newCurrencies: Cryptocurrency[]) => {
		localStorage.setItem(currenciesStorageKey, JSON.stringify(newCurrencies));
	};

	const createCurrency = (newCurrency: Cryptocurrency) => {
		setCurrencies((prevCurrencies) => {
			const newCurrencies = [...prevCurrencies];

			newCurrencies.push(newCurrency);

			updateCurrencies(newCurrencies);

			return newCurrencies;
		});
	};

	const editCurrency = (newCurrency: Cryptocurrency) => {
		setCurrencies((prevCurrencies) => {
			const newCurrencies = [...prevCurrencies];

			const cIndex = newCurrencies.findIndex(
				({ code }) => code === newCurrency.code,
			);

			newCurrencies[cIndex] = newCurrency;

			updateCurrencies(newCurrencies);

			return newCurrencies;
		});
	};

	const deleteCurrency = (currencyCode: string) => {
		setCurrencies((prevCurrencies) => {
			const newCurrencies = [...prevCurrencies];

			const cIndex = newCurrencies.findIndex(
				({ code }) => code === currencyCode,
			);

			newCurrencies.splice(cIndex, 1);

			updateCurrencies(newCurrencies);

			return newCurrencies;
		});
	};

	return (
		<CurrenciesContext.Provider
			value={{
				createCurrency,
				currencies,
				deleteCurrency,
				editCurrency,
				setCurrencies,
			}}
		>
			{children}
		</CurrenciesContext.Provider>
	);
};

export const useCurrencies = () => {
	const context = useContext(CurrenciesContext);

	if (!context) {
		throw new Error('useCurrencies must be used within CurrenciesProvider');
	}

	return context;
};

export default useCurrencies;
