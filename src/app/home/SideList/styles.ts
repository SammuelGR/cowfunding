import styled from 'styled-components';

export const StyledContainer = styled.aside`
	border-right: 3px solid #b4aeae;
	padding: 0 8px 8px;
`;

export const StyledTitle = styled.p`
	border-bottom: 2px solid #b4aeae;
	color: #b4aeae;
	font-size: 17px;
	margin: 12px 0 0;
	text-align: center;
`;

interface StyledCardProps extends React.HTMLAttributes<HTMLDivElement> {
	type: 'info' | 'danger';
}

export const StyledCardsContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 8px 0;
`;

export const StyledCard = styled.div<StyledCardProps>`
	background-color: ${({ type }: StyledCardProps) =>
		type === 'info' ? '#F9F6AA' : '#F5CFD5'};
	align-items: center;
	border-radius: 8px;
	color: #0a0a0a;
	display: flex;
	justify-content: center;
	margin-bottom: 8px;
	min-height: 64px;
	padding: 8px;
	text-align: center;
	width: 168px;
`;
