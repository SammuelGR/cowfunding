import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import Modal from '@/components/Modal';
import useUsers from '@/hooks/useUsers';
import { User } from '@/models/User';

interface EditProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
	user: User;
}

export default function Delete({
	isOpen,
	onOpenChange,
	onRequestToClose,
	user,
}: EditProps) {
	const { setUsers } = useUsers();

	const confirmClickHandler = () => {
		setUsers((prevUsers) => {
			const newUsers = [...prevUsers];

			const cIndex = newUsers.findIndex(({ id }) => id === user.id);

			return newUsers.toSpliced(cIndex, 1);
		});

		onRequestToClose();
	};

	return (
		<Modal id="modal-delete-user" isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Excluir usuário
						</ModalHeader>

						<ModalBody>
							<p>
								Tem certeza que deseja excluir o usuário{' '}
								<b>{user.fullname.split(' ')[0]}</b>?
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
