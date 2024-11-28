import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';
import { useState } from 'react';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import TextInput from '@/components/Input/TextInput';
import Modal from '@/components/Modal';
import { Cryptocurrency } from '@/models/Currencies';

import useCurrencies from '@/hooks/useCurrencies';

interface EditProps {
	currency: Cryptocurrency;
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

export default function Edit({
	currency,
	isOpen,
	onOpenChange,
	onRequestToClose,
}: EditProps) {
	const [currencyName, setCurrencyName] = useState(currency.name);
	const [decimalPlaces, setDecimalPlaces] = useState(currency.decimalPlaces);
	const { editCurrency } = useCurrencies();

	const submitClickHandler = () => {
		editCurrency({
			...currency,
			name: currencyName,
			decimalPlaces,
		});

		onRequestToClose();
	};

	return (
		<Modal
			id="modal-edit-currency"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			size="xs"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Editar moeda
						</ModalHeader>

						<ModalBody className="py-6 flex items-center">
							<TextInput
								label="Nome"
								value={currencyName}
								onChange={(event) => setCurrencyName(event.target.value)}
							/>
							<TextInput
								label="Casas decimais"
								value={decimalPlaces}
								onChange={(event) =>
									setDecimalPlaces(+event.target.value.replace(/\D/g, ''))
								}
							/>
						</ModalBody>

						<ModalFooter>
							<DangerButton onClick={onClose}>Cancelar</DangerButton>

							<PrimaryButton
								disabled={!currencyName || !decimalPlaces}
								onClick={submitClickHandler}
							>
								Salvar
							</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
