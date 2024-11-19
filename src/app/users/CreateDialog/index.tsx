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
import { Country } from '@/utils/countries';
import Select from '@/components/Input/Select';

interface CreateDialogProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

const initialValues: User = {
	country: Country.Brasil,
	email: '',
	fullname: '',
	walletAddress: '',
};

export default function CreateDialog({
	isOpen,
	onOpenChange,
	onRequestToClose,
}: CreateDialogProps) {
	const [userForm, setUserForm] = useState<User>(initialValues);

	const formChangeHandler = (field: keyof User, value: User[keyof User]) => {
		setUserForm((prevUserForm) => {
			const newUser = { ...prevUserForm };

			return { ...newUser, [field]: value };
		});
	};

	const onSubmitHandler = () => {
		onRequestToClose();
	};

	const isValid =
		!!userForm.country &&
		!!userForm.email &&
		!!userForm.fullname &&
		!!userForm.walletAddress;

	return (
		<Modal id="modal-create-user" isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Criar novo usuário
						</ModalHeader>

						<ModalBody>
							<TextInput
								label="Nome completo"
								id="fullname"
								onChange={(event) =>
									formChangeHandler('fullname', event.target.value)
								}
								value={userForm.fullname}
							/>

							<TextInput
								label="Email"
								id="email"
								onChange={(event) =>
									formChangeHandler('email', event.target.value)
								}
								value={userForm.email}
							/>

							<TextInput
								aria-autocomplete="none"
								autoComplete="new-off"
								label="Endereço da carteira principal"
								id="wallet"
								onChange={(event) =>
									formChangeHandler(
										'walletAddress',
										event.target.value.replace(' ', ''),
									)
								}
								value={userForm.walletAddress}
							/>

							<Select
								label="País de residência"
								onChange={(event) =>
									formChangeHandler('country', event.target.value)
								}
								defaultValue={initialValues.country}
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

							<PrimaryButton disabled={!isValid} onClick={onSubmitHandler}>
								Salvar
							</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
