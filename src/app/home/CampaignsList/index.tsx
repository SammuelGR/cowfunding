import useCampaigns from '@/hooks/useCampaign';
import { useState } from 'react';

import {
	StyledContainer,
	StyledHeader,
	StyledTextInput,
	StyledTitle,
} from './styles';
import Card from './Card';

export default function CampaignsList() {
	const { campaigns } = useCampaigns();
	const [searchText, setSearchText] = useState('');

	return (
		<StyledContainer>
			<StyledHeader>
				<StyledTitle>Campanhas ativas</StyledTitle>

				<StyledTextInput
					placeholder="Pesquisar campanha"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</StyledHeader>

			{campaigns
				.filter((campaign) =>
					campaign.title
						.toLowerCase()
						.includes(searchText.toLowerCase().trim()),
				)
				.map((campaign) => (
					<Card campaign={campaign} key={campaign.id} />
				))}
		</StyledContainer>
	);
}
