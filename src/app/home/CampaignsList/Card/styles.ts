import PrimaryButton from '@/components/Button/PrimaryButton';
import styled from 'styled-components';

export const StyledHr = styled.hr`
	border-bottom: 1px solid #666;
	margin: 16px 0;
	width: 100%;
`;

export const StyledContainer = styled.div`
	background-color: #fff;
	border-radius: 8px;
	color: #0a0a0a;
	padding: 8px;
`;

export const StyledTitle = styled.p`
	font-weight: 600;
	margin: 0;
	text-align: center;
`;

export const StyledContent = styled.div`
	display: flex;
	gap: 16px;
	margin-top: 16px;
`;

export const StyledNameContainer = styled.div`
	display: flex;
	margin: 0;
	padding-left: 8px;
`;

export const StyledNameText = styled.p`
	align-items: center;
	background-color: #d9d9d9;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	margin: 0;
	height: fit-content;
	padding: 16px;
	text-align: center;
	width: 120px;
`;

export const StyledDescriptionContainer = styled.div`
	background-color: #2b2b2b;
	border-radius: 8px;
	color: #b4aeae;
	display: flex;
	flex-shrink: 0;
	min-height: 280px;
	padding: 16px;
	width: 800px;
`;

export const StyledSideContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const StyledCurrenciesContainer = styled.div`
	margin-left: 16px;
	padding: 0 32px;
`;

export const StyledCurrenciesTitle = styled.p`
	font-size: 13px;
	margin: 0 0 8px;
	text-align: center;
`;

export const StyledCurrencyName = styled.p`
	font-size: 13px;
	position: relative;

	&:before {
		background-color: #d9d9d9;
		border-radius: 50%;
		content: '';
		height: 6px;
		left: -10px;
		position: absolute;
		top: 6px;
		width: 6px;
	}
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
	align-self: center;
	background-color: #009030;
	margin-top: 32px;
	width: 148px;
	height: 64px;

	&:hover {
		background-color: #2cb459;
	}
`;

export const StyledFooter = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 16px;
	padding: 0 16px;
	justify-content: space-between;
`;
