import Link from 'next/link';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	width: 100%;
`;

const buttonStyles = css`
	&:hover {
		color: #babaca;
	}

	transition: color 0.2s ease-in-out;
`;

export const StyledLink = styled(Link)`
	${buttonStyles};
`;

export const StyledSeedButton = styled.button`
	${buttonStyles};
`;
