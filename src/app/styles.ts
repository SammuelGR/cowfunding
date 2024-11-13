import Link from 'next/link';
import styled from 'styled-components';

export const StyledContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	width: 100%;
`;

export const StyledLink = styled(Link)`
	&:hover {
		color: #babaca;
	}

	transition: color 0.2s ease-in-out;
`;
