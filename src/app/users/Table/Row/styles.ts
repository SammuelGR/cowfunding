import styled from 'styled-components';

export const StyledTr = styled.tr`
	td:not(:last-child) {
		padding-right: 8px;
	}
`;

export const StyledTd = styled.td`
	height: 64px;
`;

export const StyledButtonsContainer = styled.div`
	margin-left: 8px;
	display: flex;
	gap: 16px;
	justify-self: flex-end;
`;
