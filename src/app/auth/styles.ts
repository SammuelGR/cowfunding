import styled from 'styled-components';

export const StyledContainer = styled.div`
	background-color: var(--secondary-background);
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	padding: 32px;
`;

export const StyledTitle = styled.h1`
	color: #fff;
	font-size: 64px;
	line-height: 80px;
	text-transform: uppercase;
`;

export const StyledButtonsGroup = styled.div`
	display: flex;
	gap: 16px;
	flex-direction: column;
`;
