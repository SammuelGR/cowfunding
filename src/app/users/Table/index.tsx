import TableUI from '@/components/Table';
import { User } from '@/models/User';

import Row from './Row';

interface TableProps {
	users: User[];
}

export default function Table({ users }: TableProps) {
	return (
		<TableUI>
			<thead>
				<tr>
					<th>ID</th>
					<th>Nome</th>
					<th>Email</th>
					<th>País</th>
					<th>Carteira</th>
					<th />
				</tr>
			</thead>

			<tbody>
				{users.map((user) => (
					<Row user={user} key={user.id} />
				))}
			</tbody>
		</TableUI>
	);
}
