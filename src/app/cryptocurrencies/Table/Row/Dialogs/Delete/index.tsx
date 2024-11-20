import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import Modal from '@/components/Modal';
import useCurrencies from '@/hooks/useCurrencies';
import { Cryptocurrency } from '@/models/Currencies';

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
							<DangerButton onClick={onClose}>Cancelar</DangerButton>

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
