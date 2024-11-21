import styled from 'styled-components';

import Select from '@/components/Input/Select';

export const StyledContainer = styled.div`
	align-items: flex-end;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const StyledFiltersContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 32px;
`;

export const StyledSelect = styled(Select)`
	background-color: #2b2b2b;
`;

export const StyledButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;

	button {
		width: 96px;
	}
`;
