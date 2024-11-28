import { useDisclosure } from '@nextui-org/react';
import dayjs from 'dayjs';

import useUsers from '@/hooks/useUsers';
import { Campaign } from '@/models/Campaign';

import {
	StyledContainer,
	StyledContent,
	StyledCurrenciesContainer,
	StyledCurrenciesTitle,
	StyledCurrencyName,
	StyledDescriptionContainer,
	StyledFooter,
	StyledHr,
	StyledNameContainer,
	StyledNameText,
	StyledPrimaryButton,
	StyledSideContent,
	StyledTitle,
} from './styles';
import Donation from './dialogs/Donation';

interface CardProps {
	campaign: Campaign;
}

export default function Card({ campaign }: CardProps) {
	const { users } = useUsers();

	const {
		isOpen: isDonationOpen,
		onClose: onDonationClose,
		onOpen: onDonationOpen,
		onOpenChange: onDonationOpenChange,
	} = useDisclosure();

	const campaignStatus =
		campaign.receivedAmount === campaign.goalAmount
			? 'Concluída'
			: dayjs().isBefore(campaign.endDate)
				? 'Ativa'
				: 'Encerrada';

	return (
		<>
			<StyledHr />

			<StyledContainer>
				<StyledTitle>{campaign.title}</StyledTitle>

				<StyledContent>
					<StyledNameContainer>
						<StyledNameText>
							{users.find((user) => user.id === campaign.userId)?.fullname}
						</StyledNameText>
					</StyledNameContainer>

					<StyledDescriptionContainer>
						{campaign.description}
					</StyledDescriptionContainer>

					<StyledSideContent>
						<StyledCurrenciesContainer>
							<StyledCurrenciesTitle>
								Criptomoedas aceitas
							</StyledCurrenciesTitle>

							{campaign.acceptedCurrencies.map((currencyCode) => (
								<StyledCurrencyName key={currencyCode}>
									{currencyCode}
								</StyledCurrencyName>
							))}
						</StyledCurrenciesContainer>

						<StyledPrimaryButton onClick={onDonationOpen}>
							Doar
						</StyledPrimaryButton>
					</StyledSideContent>
				</StyledContent>

				<StyledFooter>
					<p>Status: {campaignStatus}</p>

					<p>
						Valor arrecadado: ${' '}
						{campaign.receivedAmount.toLocaleString('pt-BR', {
							currencyDisplay: 'symbol',
							minimumFractionDigits: 2,
							useGrouping: 'always',
						})}
					</p>

					<p>Prazo: {dayjs(campaign.endDate).format('DD/MM/YYYY')}</p>

					<p>
						Meta de arrecadação: ${' '}
						{campaign.goalAmount.toLocaleString('pt-BR', {
							currencyDisplay: 'symbol',
							minimumFractionDigits: 2,
							useGrouping: 'always',
						})}
					</p>
				</StyledFooter>
			</StyledContainer>

			{isDonationOpen && (
				<Donation
					isOpen={true}
					campaign={campaign}
					key="create-donation"
					onOpenChange={onDonationOpenChange}
					onRequestToClose={onDonationClose}
				/>
			)}
		</>
	);
}
