import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';
import { useState } from 'react';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import Select from '@/components/Input/Select';
import TextInput from '@/components/Input/TextInput';
import Modal from '@/components/Modal';
import { Country } from '@/enums/Country';
import { User } from '@/models/User';
import useUsers from '@/hooks/useUsers';

interface SignUpProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

type FormFields = User & {
	passwordConfirm: string;
};

const initialValues: FormFields = {
	country: Country.Brasil,
	email: '',
	fullname: '',
	id: '',
	password: '',
	passwordConfirm: '',
	walletAddress: '',
};

export default function SignUp({
	isOpen,
	onOpenChange,
	onRequestToClose,
}: SignUpProps) {
	const [userForm, setUserForm] = useState<FormFields>(initialValues);

	const { createUser } = useUsers();

	const submitClickHandler = () => {
		createUser(userForm);

		onRequestToClose();
	};

	const formChangeHandler = (
		field: keyof FormFields,
		value: FormFields[keyof FormFields],
	) => {
		setUserForm((prevForm) => {
			const newData = { ...prevForm };

			return { ...newData, [field]: value };
		});
	};

	const isValid =
		!!userForm.email &&
		!!userForm.fullname &&
		!!userForm.password &&
		userForm.password === userForm.passwordConfirm &&
		!!userForm.walletAddress;

	return (
		<Modal
			id="modal-sign-up"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			size="sm"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Cadastrar usuário
						</ModalHeader>

						<ModalBody>
							<TextInput
								autoCapitalize="words"
								autoComplete="name"
								id="fullname"
								label="Nome completo"
								onChange={(event) =>
									formChangeHandler('fullname', event.target.value)
								}
								value={userForm.fullname}
							/>

							<TextInput
								autoComplete="email"
								label="Email"
								id="email"
								onChange={(event) =>
									formChangeHandler('email', event.target.value)
								}
								type="email"
								value={userForm.email}
							/>

							<TextInput
								autoComplete="new-password"
								id="password"
								label="Senha"
								onChange={(event) =>
									formChangeHandler('password', event.target.value)
								}
								type="password"
								value={userForm.password}
							/>

							<TextInput
								autoComplete="new-password"
								id="password"
								label="Confirmação da senha"
								onChange={(event) =>
									formChangeHandler('passwordConfirm', event.target.value)
								}
								type="password"
								value={userForm.passwordConfirm}
							/>

							<TextInput
								aria-autocomplete="none"
								autoComplete="new-off"
								id="wallet"
								label="Endereço da carteira principal"
								value={userForm.walletAddress}
								onChange={(event) =>
									formChangeHandler('walletAddress', event.target.value)
								}
							/>

							<Select
								label="País de residência"
								onChange={(event) =>
									formChangeHandler('country', event.target.value)
								}
								value={userForm.country}
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
