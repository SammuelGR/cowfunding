import { Cryptocurrency } from '@/models/Currencies';

import { StyledTable } from './styles';
import Row from './Row';

interface TableProps {
	currencies: Cryptocurrency[];
}

export default function Table({ currencies }: TableProps) {
	return (
		<StyledTable>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Código</th>
					<th>Casas decimais</th>
					<th>Redes</th>
					<th />
				</tr>
			</thead>

			<tbody>
				{currencies.map((currency) => (
					<Row key={currency.code} currency={currency} />
				))}
			</tbody>
		</StyledTable>
	);
}
