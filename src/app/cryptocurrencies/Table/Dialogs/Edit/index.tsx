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

interface EditProps {
	currency: Cryptocurrency;
	isOpen: boolean;
	onOpenChange: () => void;
}

export default function Edit({ currency, isOpen, onOpenChange }: EditProps) {
	const [currencyName, setCurrencyName] = useState(currency.name);
	const [decimalPlaces, setDecimalPlaces] = useState(currency.decimalPlaces);

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
								onClick={onClose}
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
