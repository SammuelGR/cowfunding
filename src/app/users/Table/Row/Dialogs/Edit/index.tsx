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
import { User } from '@/models/User';
import useUsers from '@/hooks/useUsers';
import Select from '@/components/Input/Select';
import { Country } from '@/enums/Country';

interface EditProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
	user: User;
}

export default function Edit({
	isOpen,
	onOpenChange,
	onRequestToClose,
	user,
}: EditProps) {
	const [userForm, setUserForm] = useState(user);

	const { setUsers } = useUsers();

	const formChangeHandler = (field: keyof User, value: User[keyof User]) => {
		const userData = { ...userForm, [field]: value };

		setUserForm(userData);
	};

	const submitClickHandler = () => {
		setUsers((prevUsers) => {
			const newUsers = [...prevUsers];

			const cIndex = newUsers.findIndex(({ id }) => id === user.id);

			const newUser = { ...newUsers[cIndex], ...userForm };
			newUsers[cIndex] = newUser;

			return newUsers;
		});

		onRequestToClose();
	};

	const isValid =
		!!userForm.email && !!userForm.fullname && !!userForm.walletAddress;

	return (
		<Modal
			id="modal-edit-user"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			size="sm"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Editar usuário
						</ModalHeader>

						<ModalBody className="py-6 flex">
							<TextInput
								autoComplete="name"
								label="Nome"
								value={userForm.fullname}
								onChange={(event) =>
									formChangeHandler('fullname', event.target.value)
								}
							/>

							<TextInput
								autoComplete="email"
								label="Email"
								value={userForm.email}
								onChange={(event) =>
									formChangeHandler('email', event.target.value)
								}
							/>

							<TextInput
								autoComplete="new-off"
								label="Endereço da carteira principal"
								value={userForm.walletAddress}
								onChange={(event) =>
									formChangeHandler('walletAddress', event.target.value)
								}
							/>
							<Select
								defaultValue={userForm.country}
								label="País de residência"
								onChange={(event) =>
									formChangeHandler('country', event.target.value)
								}
							>
								{Object.entries(Country).map(([key, country]) => (
									<option key={key} value={country}>
										{country}
									</option>
								))}
							</Select>
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
