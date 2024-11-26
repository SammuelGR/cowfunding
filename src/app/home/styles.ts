import styled from 'styled-components';

const containerPadding = 16;

export const StyledContainer = styled.div`
	height: 100vh;
	padding: ${containerPadding}px;
	width: 100%;
`;

export const StyledContent = styled.div`
	background-color: var(--secondary-background);
	border-radius: 8px;
	min-height: calc(100vh - ${containerPadding * 2}px);
`;
