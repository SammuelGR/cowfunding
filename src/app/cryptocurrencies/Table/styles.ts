import styled from 'styled-components';

export const StyledTable = styled.table`
	border-collapse: collapse;
	margin-top: 16px;
	width: 100%;

	th {
		font-weight: 800;
		border-bottom: 1px solid #babaca;
		padding-bottom: 8px;
		text-align: left;
	}

	tr:not(:last-child) {
		border-bottom: 1px solid #505055;
	}
`;
