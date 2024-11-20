import TableUI from '@/components/Table';
import useUsers from '@/hooks/useUsers';
import Row from './Row';

export default function Table() {
	const { users } = useUsers();

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
