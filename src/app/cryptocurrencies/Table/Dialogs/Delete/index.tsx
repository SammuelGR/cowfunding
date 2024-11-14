import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';

import Modal from '@/components/Modal';
import PrimaryButton from '@/components/PrimaryButton';
import { Cryptocurrency } from '@/models/Currencies';

import { StyledDangerButton } from '../styles';
import useCurrencies from '@/hooks/useCurrencies';

interface EditProps {
	currency: Cryptocurrency;
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

export default function Delete({
	currency,
	isOpen,
	onOpenChange,
	onRequestToClose,
}: EditProps) {
	const { setCurrencies } = useCurrencies();

	const confirmClickHandler = () => {
		setCurrencies((prevCurrencies) => {
			const newCurrencies = [...prevCurrencies];

			const cIndex = newCurrencies.findIndex(
				({ code }) => code === currency.code,
			);

			return newCurrencies.toSpliced(cIndex, 1);
		});

		onRequestToClose();
	};

	return (
		<Modal
			id="modal-delete-currency"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Excluir criptomoeda
						</ModalHeader>

						<ModalBody>
							<p>
								Tem certeza que deseja excluir a moeda <b>{currency.name}</b>?
							</p>
						</ModalBody>

						<ModalFooter>
							<StyledDangerButton onClick={onClose}>
								Cancelar
							</StyledDangerButton>

							<PrimaryButton onClick={confirmClickHandler}>
								Confirmar
							</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
