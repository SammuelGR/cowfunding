'use client';

import Link from 'next/link';
import { StyledHeader } from './styles';
import PrimaryButton from '@/components/PrimaryButton';
import { useDisclosure } from '@nextui-org/react';
import CreateDialog from './CreateDialog';

export default function Header() {
	const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

	return (
		<StyledHeader>
			<Link href="/">Voltar</Link>

			<PrimaryButton onClick={onOpen}>Criar nova moeda</PrimaryButton>

			{isOpen && (
				<CreateDialog
					isOpen={isOpen}
					key="create-currency-dialog"
					onOpenChange={onOpenChange}
					onRequestToClose={onClose}
				/>
			)}
		</StyledHeader>
	);
}
