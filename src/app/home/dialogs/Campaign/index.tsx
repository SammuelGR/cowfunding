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
import { Campaign as CampaignModel } from '@/models/Campaign';
import { Checkbox } from '@/components/Input/Checkbox';
import useCurrencies from '@/hooks/useCurrencies';

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
	endDate: new Date(),
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

	const submitClickHandler = () => {
		setCampaignForm((prevForm) => ({
			...prevForm,
			userId: connectedUser!.id,
			id: uuidv4(),
		}));

		onRequestToClose();
	};

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

							<StyledTextArea label="Descrição" />

							<StyledGroupedInputContainer>
								<TextInput label="Meta de arrecadação (USD)" type="number" />

								<StyledTextInput
									label="Prazo"
									max={maxDate}
									min={minDate}
									type="date"
								/>
							</StyledGroupedInputContainer>

							<StyledCheckboxGroup label="Criptomoedas aceitas">
								{currencies.map((currency) => (
									<Checkbox key={currency.code} label={currency.name} />
								))}
							</StyledCheckboxGroup>
						</ModalBody>

						<ModalFooter>
							<DangerButton onClick={onClose}>Cancelar</DangerButton>

							<PrimaryButton onClick={submitClickHandler}>Salvar</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
