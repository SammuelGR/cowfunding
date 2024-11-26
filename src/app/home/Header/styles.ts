import PrimaryButton from '@/components/Button/PrimaryButton';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledContainer = styled.header`
	display: flex;
	flex-direction: row;
	padding: 16px;
`;

export const StyledTitle = styled.h1`
	color: #fff;
	font-size: 24px;
	line-height: 24px;
	text-transform: uppercase;
`;

export const StyledImage = styled(Image)`
	margin: -16px;
`;

export const StyledNav = styled.nav`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	padding: 0 32px;
`;

export const StyledHeaderButton = styled(PrimaryButton)`
	font-size: 24px;
	height: 64px;
	min-width: 172px;
`;

export const StyledUserContainer = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: center;

	span {
		align-items: center;
		background-color: #fff;
		border-radius: 100%;
		border: 4px solid var(--blue-bg-color);
		color: var(--background);
		cursor: pointer;
		display: flex;
		font-size: 96px;
		height: 104px;
		justify-content: center;
		justify-self: flex-end;
		width: 104px;

		transition: all 0.2s ease-in-out;
	}

	span:hover {
		background-color: #d9d9d9;
		border: 4px solid var(--blue-bg-color-hover);
	}
`;
