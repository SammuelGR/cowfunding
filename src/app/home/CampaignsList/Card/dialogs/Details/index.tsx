import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';
import dayjs from 'dayjs';

import PrimaryButton from '@/components/Button/PrimaryButton';
import TextInput from '@/components/Input/TextInput';
import Modal from '@/components/Modal';
import { Campaign } from '@/models/Campaign';
import useUsers from '@/hooks/useUsers';
import { StyledTd } from './styles';

interface CampaignProps {
	campaign: Campaign;
	isOpen: boolean;
	onOpenChange: () => void;
}

export default function Details({
	campaign,
	isOpen,
	onOpenChange,
}: CampaignProps) {
	const { users } = useUsers();

	const formatAmount = (amount: number) =>
		`$ ${amount.toLocaleString('pt-BR', {
			minimumFractionDigits: 2,
			useGrouping: 'always',
		})}`;

	const receivedAmount = formatAmount(campaign.receivedAmount);
	const remainingAmount = formatAmount(
		campaign.goalAmount - campaign.receivedAmount,
	);
	const goalAmount = formatAmount(campaign.goalAmount);

	return (
		<Modal
			id="modal-campaign-details"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			size="xl"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							{campaign.title}
						</ModalHeader>

						<ModalBody>
							<TextInput
								className="w-full"
								label="Título"
								id="title"
								readOnly={true}
								value={campaign.title}
							/>

							<label>Doações</label>

							<table>
								<thead>
									<tr>
										<th>Nome</th>
										<th>Data</th>
										<th>Valor em criptomoeda</th>
										<th>Valor convertido USD</th>
									</tr>
								</thead>

								<tbody>
									{campaign.donations.map((donation) => (
										<tr key={donation.id}>
											<td>
												{
													users.find((user) => user.id === donation.userId)
														?.fullname
												}
											</td>
											<td>{dayjs(donation.createDate).format('DD/MM/YYYY')}</td>
											<StyledTd>
												{donation.currencyCode}{' '}
												{donation.amount.toLocaleString('pt-BR', {
													currencyDisplay: 'symbol',
													minimumFractionDigits: 2,
													useGrouping: 'always',
												})}
											</StyledTd>
											<StyledTd>
												{'$ '}
												{donation.usdAmount.toLocaleString('pt-BR', {
													currencyDisplay: 'symbol',
													minimumFractionDigits: 2,
													useGrouping: 'always',
												})}
											</StyledTd>
										</tr>
									))}
								</tbody>
							</table>

							<div className="flex gap-x-4 mt-2">
								<TextInput
									readOnly={true}
									label="Total arrecadado "
									value={receivedAmount}
								/>

								<TextInput
									readOnly={true}
									label="Restante para bater a meta"
									value={remainingAmount}
								/>
							</div>

							<div className="flex gap-x-4 mt-2">
								<TextInput
									readOnly={true}
									label="Meta de arrecadação "
									value={goalAmount}
								/>

								<TextInput
									readOnly={true}
									label="Prazo final"
									value={dayjs(campaign.endDate).format('DD/MM/YYYY')}
								/>
							</div>
						</ModalBody>

						<ModalFooter>
							<PrimaryButton onClick={onClose}>Fechar</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
