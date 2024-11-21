import TextInput from '@/components/Input/TextInput';

import PrimaryButton from '@/components/Button/PrimaryButton';
import { User } from '@/models/User';
import { Country } from '@/enums/Country';

import {
	StyledButtonsContainer,
	StyledContainer,
	StyledFiltersContainer,
	StyledSelect,
} from './styles';

export type FormFields = Pick<
	User,
	'email' | 'fullname' | 'id' | 'walletAddress'
> & { country: string };

interface FiltersProps {
	filters: FormFields;
	onCleanFilters: () => void;
	onFilterChange: (
		field: keyof FormFields,
		value: FormFields[keyof FormFields],
	) => void;
}

export const initialValues: FormFields = {
	country: '',
	email: '',
	fullname: '',
	id: '',
	walletAddress: '',
};

export default function Filters({
	filters,
	onCleanFilters,
	onFilterChange,
}: FiltersProps) {
	return (
		<StyledContainer>
			<StyledFiltersContainer>
				<TextInput
					label="ID"
					value={filters.id}
					onChange={(event) => onFilterChange('id', event.target?.value)}
				/>

				<TextInput
					label="Nome"
					value={filters.fullname}
					onChange={(event) => onFilterChange('fullname', event.target?.value)}
				/>

				<TextInput
					label="Email"
					value={filters.email}
					onChange={(event) => onFilterChange('email', event.target?.value)}
				/>

				<TextInput
					label="Carteira"
					value={filters.walletAddress}
					onChange={(event) =>
						onFilterChange('walletAddress', event.target?.value)
					}
				/>

				<StyledSelect
					label="País de residência"
					onChange={(event) => onFilterChange('country', event.target.value)}
					value={filters.country || ''}
				>
					<option key="empty" value="">
						Todos
					</option>

					{Object.entries(Country).map(([key, country]) => (
						<option key={key} value={country}>
							{country}
						</option>
					))}
				</StyledSelect>
			</StyledFiltersContainer>

			<StyledButtonsContainer>
				<PrimaryButton onClick={onCleanFilters}>Limpar</PrimaryButton>
			</StyledButtonsContainer>
		</StyledContainer>
	);
}
