import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import Select from '@/components/Input/Select';
import TextInput from '@/components/Input/TextInput';
import Modal from '@/components/Modal';
import { Country } from '@/enums/Country';

interface SignUpProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

export default function SignUp({
	isOpen,
	onOpenChange,
	onRequestToClose,
}: SignUpProps) {
	const submitClickHandler = () => {
		onRequestToClose();
	};

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
								label="Nome completo"
								id="fullname"
							/>

							<TextInput
								autoComplete="email"
								label="Email"
								id="email"
								type="email"
							/>

							<TextInput
								autoComplete="new-password"
								id="password"
								label="Senha"
								type="password"
							/>

							<TextInput
								autoComplete="new-password"
								id="password"
								label="Confirmação da senha"
								type="password"
							/>

							<TextInput
								aria-autocomplete="none"
								autoComplete="new-off"
								label="Endereço da carteira principal"
								id="wallet"
							/>

							<Select label="País de residência">
								{Object.entries(Country).map(([key, country]) => (
									<option key={key} value={country}>
										{country}
									</option>
								))}
							</Select>
						</ModalBody>

						<ModalFooter>
							<DangerButton onClick={onClose}>Cancelar</DangerButton>

							<PrimaryButton onClick={submitClickHandler}>Salvar</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
