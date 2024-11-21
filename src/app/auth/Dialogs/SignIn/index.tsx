import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import TextInput from '@/components/Input/TextInput';
import Modal from '@/components/Modal';

interface SignInProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

export default function SignIn({
	isOpen,
	onOpenChange,
	onRequestToClose,
}: SignInProps) {
	const submitClickHandler = () => {
		onRequestToClose();
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
								type="email"
							/>

							<TextInput
								autoComplete="current-password"
								id="password"
								label="Senha"
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
