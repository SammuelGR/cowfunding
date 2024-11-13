import styled from 'styled-components';

export const StyledContainer = styled.div`
	align-items: flex-end;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const StyledFiltersContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 32px;
`;

export const StyledButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;

	button {
		width: 96px;
	}
`;
