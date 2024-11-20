import React, { createContext, useContext, useState } from 'react';

import { Cryptocurrency } from '@/models/Currencies';

export interface CurrenciesProviderProps {
	currencies: Cryptocurrency[];
	setCurrencies: React.Dispatch<React.SetStateAction<Cryptocurrency[]>>;
}

const CurrenciesContext = createContext<CurrenciesProviderProps | null>(null);

export const CurrenciesProvider = ({ children }: React.PropsWithChildren) => {
	const [currencies, setCurrencies] = useState<Cryptocurrency[]>([]);

	return (
		<CurrenciesContext.Provider
			value={{
				currencies,
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
