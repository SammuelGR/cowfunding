import styled from 'styled-components';

export const StyledButton = styled.button`
	align-items: center;
	background-color: #007690;
	border-radius: 4px;
	border: none;
	color: currentColor;
	cursor: pointer;
	display: flex;
	font-size: 16px;
	height: 32px;
	justify-content: center;
	padding: 8px;

	&:hover {
		background-color: #2e899d;
	}

	&:disabled {
		background-color: #666;
		pointer-events: none;
	}

	transition: background-color 0.2s ease-in-out;
`;
