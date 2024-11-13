import { Cryptocurrency } from '@/models/Currencies';
import Image from 'next/image';
import { StyledNameField, StyledTr } from './styls';

interface RowProps {
	currency: Cryptocurrency;
}

export default function Row({ currency }: RowProps) {
	return (
		<StyledTr>
			<StyledNameField>
				<Image
					style={{ display: 'inline' }}
					alt={`currency ${currency.name} icon`}
					src={currency.iconUrl}
					width={32}
					height={32}
				/>

				{currency.name}
			</StyledNameField>

			<td>{currency.code}</td>

			<td>{currency.decimalPlaces}</td>

			<td>{currency.networks.join(', ')}</td>
		</StyledTr>
	);
}
