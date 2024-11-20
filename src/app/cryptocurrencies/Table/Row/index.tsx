import { useDisclosure } from '@nextui-org/react';
import Image from 'next/image';

import iconPlaceholder from '@/app/dollar.png';
import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { Cryptocurrency } from '@/models/Currencies';

import { StyledButtonsContainer, StyledNameField, StyledTr } from './styles';
import Edit from '../Dialogs/Edit';
import Delete from '../Dialogs/Delete';

interface RowProps {
	currency: Cryptocurrency;
}

export default function Row({ currency }: RowProps) {
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

	return (
		<StyledTr>
			<StyledNameField>
				<Image
					style={{ display: 'inline' }}
					alt={`currency ${currency.name} icon`}
					src={currency.iconUrl || iconPlaceholder}
					width={32}
					height={32}
				/>

				{currency.name}
			</StyledNameField>

			<td>{currency.code}</td>

			<td>{currency.decimalPlaces}</td>

			<td>{currency.networks.join(', ')}</td>

			<td>
				<StyledButtonsContainer>
					<DangerButton onClick={onDeleteOpen}>Excluir</DangerButton>

					<PrimaryButton onClick={onEditOpen}>Editar</PrimaryButton>
				</StyledButtonsContainer>

				{isDeleteOpen && (
					<Delete
						currency={currency}
						isOpen={true}
						onOpenChange={onDeleteOpenChange}
						onRequestToClose={onDeleteClose}
					/>
				)}

				{isEditOpen && (
					<Edit
						currency={currency}
						isOpen={true}
						onOpenChange={onEditOpenChange}
						onRequestToClose={onEditClose}
					/>
				)}
			</td>
		</StyledTr>
	);
}
