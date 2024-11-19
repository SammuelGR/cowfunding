import styled from 'styled-components';

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
