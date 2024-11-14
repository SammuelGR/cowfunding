import PrimaryButton from '@/components/PrimaryButton';
import styled from 'styled-components';

export const StyledDangerButton = styled(PrimaryButton)`
	background-color: #ff1b1b;

	&:hover {
		background-color: #f45050;
	}
`;

export const StyledCheckboxGroup = styled.div`
	label:first-of-type {
		display: block;
		margin-bottom: 8px;
	}

	label:not(:first-of-type) {
		display: inline-block;
		flex-direction: row;
		padding: 4px;
		gap: 8px;
	}

	input {
		margin-left: 8px;
	}
`;
