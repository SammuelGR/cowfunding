import PrimaryButton from '@/components/Button/PrimaryButton';
import styled from 'styled-components';

export const StyledTr = styled.tr`
	td {
		height: 64px;
	}
`;

export const StyledNameField = styled.td`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 16px;
	justify-self: flex-end;
`;

export const StyledDeleteButton = styled(PrimaryButton)`
	background-color: #ff1b1b;

	&:hover {
		background-color: #f45050;
	}
`;
