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
import { Checkbox } from '@/components/Input/Checkbox';
import TextInput from '@/components/Input/TextInput';
import Modal from '@/components/Modal';
import useAuth from '@/hooks/useAuth';
import useCampaigns from '@/hooks/useCampaign';
import useCurrencies from '@/hooks/useCurrencies';
import { Campaign as CampaignModel } from '@/models/Campaign';
import { Cryptocurrency } from '@/models/Currencies';

import {
	StyledCheckboxGroup,
	StyledGroupedInputContainer,
	StyledTextArea,
	StyledTextInput,
} from './styles';

interface CampaignProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

const initialValues: CampaignModel = {
	acceptedCurrencies: [],
	description: '',
	donations: [],
	endDate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
	goalAmount: 0,
	id: '',
	receivedAmount: 0,
	title: '',
	userId: '',
};

export default function Campaign({
	isOpen,
	onOpenChange,
	onRequestToClose,
}: CampaignProps) {
	const [campaignForm, setCampaignForm] =
		useState<CampaignModel>(initialValues);

	const { connectedUser } = useAuth();

	const { currencies } = useCurrencies();

	const { createCampaign } = useCampaigns();

	const minDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
	const maxDate = dayjs().add(365, 'day').format('YYYY-MM-DD');

	const formChangeHandler = (
		field: keyof CampaignModel,
		value: CampaignModel[keyof CampaignModel],
	) => {
		setCampaignForm((prevData) => {
			const newData = { ...prevData };

			return { ...newData, [field]: value };
		});
	};

	const currenciesChangeHandler = (currencyCode: Cryptocurrency['code']) => {
		const selectedCurrencies = [...campaignForm.acceptedCurrencies];

		const cIndex = selectedCurrencies.indexOf(currencyCode);
		if (cIndex < 0) {
			selectedCurrencies.push(currencyCode);
		} else {
			selectedCurrencies.splice(cIndex, 1);
		}

		setCampaignForm((prevForm) => ({
			...prevForm,
			acceptedCurrencies: selectedCurrencies,
		}));
	};

	const submitClickHandler = () => {
		createCampaign({
			...campaignForm,
			userId: connectedUser!.id,
			id: uuidv4(),
		});

		onRequestToClose();
	};

	const isValid =
		campaignForm.acceptedCurrencies.length > 0 &&
		!!campaignForm.description &&
		!!campaignForm.endDate &&
		!!campaignForm.goalAmount &&
		!!campaignForm.title;

	return (
		<Modal
			id="modal-create-campaign"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			size="xl"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Criar campanha
						</ModalHeader>

						<ModalBody>
							<StyledTextInput
								label="Título"
								id="title"
								onChange={(event) =>
									formChangeHandler('title', event.target.value)
								}
								value={campaignForm.title}
							/>

							<StyledTextArea
								label="Descrição"
								onChange={(event) =>
									formChangeHandler('description', event.target.value)
								}
								value={campaignForm.description}
							/>

							<StyledGroupedInputContainer>
								<TextInput
									label="Meta de arrecadação (USD)"
									onChange={(event) =>
										formChangeHandler('goalAmount', +event.target.value)
									}
									type="number"
									value={campaignForm.goalAmount}
								/>

								<StyledTextInput
									label="Prazo"
									max={maxDate}
									min={minDate}
									onChange={(event) =>
										formChangeHandler('endDate', event.target.value)
									}
									value={dayjs(campaignForm.endDate).format('YYYY-MM-DD')}
									type="date"
								/>
							</StyledGroupedInputContainer>

							<StyledCheckboxGroup label="Criptomoedas aceitas">
								{currencies.map((currency) => (
									<Checkbox
										checked={campaignForm.acceptedCurrencies.includes(
											currency.code,
										)}
										id={currency.name}
										key={currency.code}
										label={currency.name}
										name={currency.name}
										onChange={() => currenciesChangeHandler(currency.code)}
									/>
								))}
							</StyledCheckboxGroup>
						</ModalBody>

						<ModalFooter>
							<DangerButton onClick={onClose}>Cancelar</DangerButton>

							<PrimaryButton disabled={!isValid} onClick={submitClickHandler}>
								Salvar
							</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
