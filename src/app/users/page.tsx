'use client';

import { useDisclosure } from '@nextui-org/react';
import { useState } from 'react';

import Header from '@/components/Header';
import PrimaryButton from '@/components/Button/PrimaryButton';
import useUsers from '@/hooks/useUsers';

import { StyledContainer, StyledContent, StyledHr } from './styles';
import CreateDialog from './CreateDialog';
import Filters, { FormFields, initialValues } from './Filters';
import Table from './Table';

export default function Users() {
	const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

	const [filters, setFilters] = useState(initialValues);
	const { users } = useUsers();

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

	const usersList = users
		.filter((user) =>
			user.id
				.toLocaleLowerCase()
				.includes(filters.id.toLocaleLowerCase().trim()),
		)
		.filter((user) =>
			user.fullname
				.toLocaleLowerCase()
				.includes(filters.fullname.toLocaleLowerCase().trim()),
		)
		.filter((user) =>
			user.email
				.toLocaleLowerCase()
				.includes(filters.email.toLocaleLowerCase().trim()),
		)
		.filter((user) =>
			user.country
				.toLocaleLowerCase()
				.includes(filters.country.toLocaleLowerCase().trim()),
		)
		.filter((user) =>
			user.walletAddress
				.toLocaleLowerCase()
				.includes(filters.walletAddress.toLocaleLowerCase().trim()),
		);

	return (
		<>
			<Header>
				<PrimaryButton onClick={onOpen}>Criar novo usuário</PrimaryButton>
			</Header>

			{isOpen && (
				<CreateDialog
					isOpen={isOpen}
					key="create-users-dialog"
					onOpenChange={onOpenChange}
					onRequestToClose={onClose}
				/>
			)}

			<StyledContainer>
				<StyledContent>
					<Filters
						filters={filters}
						onFilterChange={filtersChangeHandler}
						onCleanFilters={clearFiltersHandler}
					/>

					<StyledHr />

					<Table users={usersList} />
				</StyledContent>
			</StyledContainer>
		</>
	);
}
