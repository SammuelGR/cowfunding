import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';
import { useState } from 'react';

import Modal from '@/components/Modal';
import { Cryptocurrency } from '@/models/Currencies';
import TextInput from '@/components/Input/TextInput';
import PrimaryButton from '@/components/PrimaryButton';

import { StyledDangerButton } from './styles';
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
	const { setCurrencies } = useCurrencies();

	const submitClickHandler = () => {
		setCurrencies((prevCurrencies) => {
			const newCurrencies = prevCurrencies;

			const cIndex = newCurrencies.findIndex(
				({ code }) => code === currency.code,
			);

			const newCurrency = prevCurrencies[cIndex];
			newCurrency.decimalPlaces = decimalPlaces;
			newCurrency.name = currencyName;
			newCurrencies[cIndex] = newCurrency;

			return newCurrencies;
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
							<StyledDangerButton onClick={onClose}>
								Cancelar
							</StyledDangerButton>

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
