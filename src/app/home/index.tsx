import CampaignsList from './CampaignsList';
import Header from './Header';
import SideList from './SideList';
import { StyledCampaignsList, StyledContainer, StyledContent } from './styles';

export default function Home() {
	return (
		<StyledContainer>
			<StyledContent>
				<Header />

				<StyledCampaignsList>
					<SideList />

					<CampaignsList />
				</StyledCampaignsList>
			</StyledContent>
		</StyledContainer>
	);
}
