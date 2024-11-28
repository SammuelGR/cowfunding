import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import TextInput from '@/components/Input/TextInput';
import Modal from '@/components/Modal';
import useAuth, { type SignInData } from '@/hooks/useAuth';

interface SignInProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

const initialValues: SignInData = {
	email: '',
	password: '',
};

export default function SignIn({ isOpen, onOpenChange }: SignInProps) {
	const [authForm, setAuthForm] = useState<SignInData>(initialValues);

	const { signIn } = useAuth();

	const formChangeHandler = (
		field: keyof SignInData,
		value: SignInData[keyof SignInData],
	) => {
		setAuthForm((prevData) => {
			const newData = { ...prevData };

			return { ...newData, [field]: value };
		});
	};

	const submitClickHandler = () => {
		if (signIn(authForm)) {
			redirect('/');
		} else {
			alert('Credenciais inválidas!');
		}
	};

	return (
		<Modal
			id="modal-sign-in"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			size="sm"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">Entrar</ModalHeader>

						<ModalBody>
							<TextInput
								autoComplete="email"
								label="Email"
								id="email"
								onChange={(event) =>
									formChangeHandler('email', event.target.value)
								}
								value={authForm.email}
								type="email"
							/>

							<TextInput
								autoComplete="current-password"
								id="password"
								label="Senha"
								onChange={(event) =>
									formChangeHandler('password', event.target.value)
								}
								value={authForm.password}
								type="password"
							/>
						</ModalBody>

						<ModalFooter>
							<DangerButton onClick={onClose}>Cancelar</DangerButton>

							<PrimaryButton onClick={submitClickHandler}>Entrar</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
