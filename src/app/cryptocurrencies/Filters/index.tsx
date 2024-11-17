import TextInput from '@/components/Input/TextInput';

import {
	StyledButtonsContainer,
	StyledContainer,
	StyledFiltersContainer,
} from './styles';
import PrimaryButton from '@/components/Button/PrimaryButton';

export interface FormFields {
	name: string;
	symbol: string;
}

interface FiltersProps {
	filters: FormFields;
	onCleanFilters: () => void;
	onFilterChange: (
		field: keyof FormFields,
		value: FormFields[keyof FormFields],
	) => void;
}

export const initialValues: FormFields = {
	name: '',
	symbol: '',
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
					label="Nome"
					value={filters.name}
					onChange={(event) => onFilterChange('name', event.target?.value)}
				/>

				<TextInput
					label="Símbolo/Código"
					value={filters.symbol}
					onChange={(event) => onFilterChange('symbol', event.target?.value)}
				/>
			</StyledFiltersContainer>

			<StyledButtonsContainer>
				<PrimaryButton onClick={onCleanFilters}>Limpar</PrimaryButton>
			</StyledButtonsContainer>
		</StyledContainer>
	);
}
