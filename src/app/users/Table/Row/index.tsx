import { useDisclosure } from '@nextui-org/react';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { User } from '@/models/User';

import Delete from './Dialogs/Delete';
import Edit from './Dialogs/Edit';
import { StyledButtonsContainer, StyledTd, StyledTr } from './styles';

interface RowProps {
	user: User;
}

export default function Row({ user }: RowProps) {
	const {
		isOpen: isEditOpen,
		onClose: onEditClose,
		onOpen: onEditOpen,
		onOpenChange: onEditOpenChange,
	} = useDisclosure();

	const {
		isOpen: isDeleteOpen,
		onClose: onDeleteClose,
		onOpen: onDeleteOpen,
		onOpenChange: onDeleteOpenChange,
	} = useDisclosure();

	const formatWalletAddress = (address: string) => {
		return `${address.slice(0, 6)}...${address.slice(-6)}`;
	};

	return (
		<StyledTr>
			<StyledTd className="text-xs">{user.id}</StyledTd>

			<StyledTd>{user.fullname}</StyledTd>

			<StyledTd>{user.email}</StyledTd>

			<StyledTd>{user.country}</StyledTd>

			<StyledTd>{formatWalletAddress(user.walletAddress)}</StyledTd>

			<StyledTd>
				<StyledButtonsContainer>
					<DangerButton onClick={onDeleteOpen}>Excluir</DangerButton>

					<PrimaryButton onClick={onEditOpen}>Editar</PrimaryButton>
				</StyledButtonsContainer>

				{isDeleteOpen && (
					<Delete
						user={user}
						isOpen={true}
						onOpenChange={onDeleteOpenChange}
						onRequestToClose={onDeleteClose}
					/>
				)}

				{isEditOpen && (
					<Edit
						user={user}
						isOpen={true}
						onOpenChange={onEditOpenChange}
						onRequestToClose={onEditClose}
					/>
				)}
			</StyledTd>
		</StyledTr>
	);
}
