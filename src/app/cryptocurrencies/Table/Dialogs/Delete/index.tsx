import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from '@nextui-org/react';

import Modal from '@/components/Modal';
import { Cryptocurrency } from '@/models/Currencies';

interface EditProps {
	currency: Cryptocurrency;
	isOpen: boolean;
	onOpenChange: () => void;
}

export default function Delete({ currency, isOpen, onOpenChange }: EditProps) {
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
							<Button color="danger" variant="light" onPress={onClose}>
								Cancelar
							</Button>

							<Button color="primary" onPress={onClose}>
								Confirmar
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
