import { v4 as uuidv4 } from 'uuid';

import { Country } from '@/enums/Country';
import { User } from '@/models/User';

export const usersMock: User[] = [
	{
		id: uuidv4(),
		fullname: 'Alice Silva',
		email: 'alice.silva@example.com',
		country: Country.Brasil,
		password: '1234',
		walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
	},
	{
		id: uuidv4(),
		fullname: 'Bob Müller',
		email: 'bob.muller@example.com',
		country: Country.Alemanha,
		password: '1234',
		walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
	},
	{
		id: uuidv4(),
		fullname: 'Clara Wong',
		email: 'clara.wong@example.com',
		country: Country.China,
		password: '1234',
		walletAddress: '0x7890abcdef1234567890abcdef1234567890abcd',
	},
	{
		id: uuidv4(),
		fullname: 'David Smith',
		email: 'david.smith@example.com',
		country: Country.EstadosUnidos,
		password: '1234',
		walletAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefab',
	},
	{
		id: uuidv4(),
		fullname: 'Emily Brown',
		email: 'emily.brown@example.com',
		country: Country.Canada,
		password: '1234',
		walletAddress: '0x456789abcdef123456789abcdef123456789abcd',
	},
	{
		id: uuidv4(),
		fullname: 'Felipe Souza',
		email: 'felipe.souza@example.com',
		country: Country.Brasil,
		password: '1234',
		walletAddress: '0x123123abcdef123123abcdef123123abcdef1231',
	},
	{
		id: uuidv4(),
		fullname: 'Gabriel Oliveira',
		email: 'gabriel.oliveira@example.com',
		country: Country.Franca,
		password: '1234',
		walletAddress: '0xabcdefabcdef1234567890123456789012345678',
	},
	{
		id: uuidv4(),
		fullname: 'Hannah White',
		email: 'hannah.white@example.com',
		country: Country.ReinoUnido,
		password: '1234',
		walletAddress: '0x1234567890abcdefabcdef1234567890abcdef12',
	},
	{
		id: uuidv4(),
		fullname: 'Isabel Tanaka',
		email: 'isabel.tanaka@example.com',
		country: Country.Japao,
		password: '1234',
		walletAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
	},
	{
		id: uuidv4(),
		fullname: 'Lucas Rossi',
		email: 'lucas.rossi@example.com',
		country: Country.Italia,
		password: '1234',
		walletAddress: '0x456789abcdefabcdef1234567890abcdefabcdef',
	},
];
