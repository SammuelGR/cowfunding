import dayjs from 'dayjs';

import useCampaigns from '@/hooks/useCampaign';

import {
	StyledCard,
	StyledCardsContainer,
	StyledContainer,
	StyledTitle,
} from './styles';

export default function SideList() {
	const { campaigns } = useCampaigns();

	const mainCampaigns = campaigns
		.toSorted((a, b) => b.receivedAmount - a.receivedAmount)
		.slice(0, 3);

	const nearEndCampaigns = campaigns
		.toSorted((a, b) => (dayjs(a.endDate).isBefore(b.endDate) ? -1 : 1))
		.slice(0, 3);

	return (
		<StyledContainer>
			<StyledTitle>Principais campanhas</StyledTitle>

			<StyledCardsContainer>
				{mainCampaigns.map((camp) => (
					<StyledCard key={camp.id} type="info">
						{camp.title}
					</StyledCard>
				))}
			</StyledCardsContainer>

			<StyledTitle>Campanhas perto do fim</StyledTitle>

			<StyledCardsContainer>
				{nearEndCampaigns.map((camp) => (
					<StyledCard key={camp.id} type="danger">
						{camp.title}
					</StyledCard>
				))}
			</StyledCardsContainer>
		</StyledContainer>
	);
}
