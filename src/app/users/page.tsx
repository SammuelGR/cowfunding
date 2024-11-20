'use client';

import { useDisclosure } from '@nextui-org/react';

import Header from '@/components/Header';
import CreateDialog from './CreateDialog';
import PrimaryButton from '@/components/Button/PrimaryButton';

import { StyledContainer } from './styles';
import Table from './Table';

export default function Users() {
	const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Header>
				<PrimaryButton onClick={onOpen}>Criar novo usuário</PrimaryButton>
			</Header>

			{isOpen && (
				<CreateDialog
					isOpen={isOpen}
					key="create-users-dialog"
					onOpenChange={onOpenChange}
					onRequestToClose={onClose}
				/>
			)}

			<StyledContainer>
				<Table />
			</StyledContainer>
		</>
	);
}
