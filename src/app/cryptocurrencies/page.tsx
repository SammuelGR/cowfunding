'use client';

import { useState } from 'react';

import useCurrencies from '@/hooks/useCurrencies';

import Filters, { FormFields, initialValues } from './Filters';
import Header from './Header';
import { StyledContent, StyledContainer, StyeldHr } from './styles';
import Table from './Table';

export default function Cryptocurrencies() {
	const [filters, setFilters] = useState(initialValues);
	const { currencies } = useCurrencies();

	const filtersChangeHandler = (
		field: keyof FormFields,
		value: FormFields[keyof FormFields],
	) => {
		setFilters((prevFilters) => {
			const oldFilters = prevFilters;

			return {
				...oldFilters,
				[field]: value,
			};
		});
	};

	const clearFiltersHandler = () => {
		setFilters(initialValues);
	};

	const currenciesList = currencies
		.filter((currency) =>
			currency.name
				.toLocaleLowerCase()
				.includes(filters.name.toLocaleLowerCase().trim()),
		)
		.filter((currency) =>
			currency.code
				.toLocaleLowerCase()
				.includes(filters.symbol.toLocaleLowerCase().trim()),
		)
		.sort((a, b) => a.name.localeCompare(b.name));

	return (
		<>
			<Header />

			<StyledContainer>
				<StyledContent>
					<Filters
						filters={filters}
						onFilterChange={filtersChangeHandler}
						onCleanFilters={clearFiltersHandler}
					/>

					<StyeldHr />

					<Table currencies={currenciesList} />
				</StyledContent>
			</StyledContainer>
		</>
	);
}
