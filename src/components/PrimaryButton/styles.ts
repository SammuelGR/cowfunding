import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: #007690;
	border-radius: 4px;
	border: none;
	color: currentColor;
	cursor: pointer;
	font-size: 16px;
	height: 32px;
	padding: 8px;

	&:hover {
		background-color: #2e899d;
	}

	transition: background-color 0.2s;
`;
