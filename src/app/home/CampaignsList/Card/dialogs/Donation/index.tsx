import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';
import dayjs from 'dayjs';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import TextInput from '@/components/Input/TextInput';
import Modal from '@/components/Modal';
import useAuth from '@/hooks/useAuth';
import useCampaigns from '@/hooks/useCampaign';
import useCurrencies from '@/hooks/useCurrencies';
import { Campaign } from '@/models/Campaign';
import { Donation as DonationModel } from '@/models/Donation';
import Select from '@/components/Input/Select';

interface CampaignProps {
	campaign: Campaign;
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

const initialValues: DonationModel = {
	amount: 0,
	createDate: '',
	currencyCode: '',
	id: '',
	usdAmount: 0,
	userId: '',
};

export default function Donation({
	campaign,
	isOpen,
	onOpenChange,
	onRequestToClose,
}: CampaignProps) {
	const [donationForm, setDonationForm] =
		useState<DonationModel>(initialValues);

	const { connectedUser } = useAuth();

	const { currencies } = useCurrencies();

	const { editCampaign } = useCampaigns();

	const formChangeHandler = (
		field: keyof DonationModel,
		value: DonationModel[keyof DonationModel],
	) => {
		setDonationForm((prevData) => {
			const newData = { ...prevData };

			return { ...newData, [field]: value };
		});
	};

	const submitClickHandler = () => {
		const donation = { ...donationForm };

		donation.usdAmount = donation.amount;
		donation.createDate = dayjs().format('YYYY-MM-DD');
		donation.id = uuidv4();
		donation.userId = connectedUser!.id;

		campaign.donations.push(donation);

		editCampaign(campaign);

		onRequestToClose();
	};

	const isValid = !!donationForm.amount && !!donationForm.currencyCode;

	return (
		<Modal
			id="modal-create-donation"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			size="sm"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Fazer doação
						</ModalHeader>

						<ModalBody>
							<TextInput
								label="Valor"
								id="amount"
								value={donationForm.amount}
								onChange={(event) =>
									formChangeHandler('amount', +event.target.value)
								}
							/>

							<Select
								label="Moeda"
								defaultValue=""
								onChange={(event) =>
									formChangeHandler('currencyCode', event.target.value)
								}
							>
								<option hidden={true} key="empty" value="">
									{''}
								</option>
								{campaign.acceptedCurrencies.map((currencyCode) => (
									<option key={currencyCode} value={currencyCode}>
										{currencies.find(
											(currency) => currency.code === currencyCode,
										)?.name || ''}
									</option>
								))}
							</Select>
						</ModalBody>

						<ModalFooter>
							<DangerButton onClick={onClose}>Cancelar</DangerButton>

							<PrimaryButton disabled={!isValid} onClick={submitClickHandler}>
								Enviar
							</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
