import { Country } from '@/enums/Country';
import { User } from '@/models/User';

export const usersMock: User[] = [
	{
		id: 'e7485be5-787c-4f3a-b4b1-ecd594a2f805',
		fullname: 'Alice Silva',
		email: 'alice.silva@example.com',
		country: Country.Brasil,
		password: '1234',
		walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
	},
	{
		id: 'b85563d2-847e-4e0b-933e-6e62f485ca04',
		fullname: 'Bob Müller',
		email: 'bob.muller@example.com',
		country: Country.Alemanha,
		password: '1234',
		walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
	},
	{
		id: 'f3a6bfe5-ca8b-4c20-a3c5-d556aa2dc604',
		fullname: 'Clara Wong',
		email: 'clara.wong@example.com',
		country: Country.China,
		password: '1234',
		walletAddress: '0x7890abcdef1234567890abcdef1234567890abcd',
	},
	{
		id: 'd982c07c-3078-48b3-b2b7-e1e711dad8c8',
		fullname: 'David Smith',
		email: 'david.smith@example.com',
		country: Country.EstadosUnidos,
		password: '1234',
		walletAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefab',
	},
	{
		id: '0b1f2fcd-c24f-41ad-b7a5-4c50a21f82f2',
		fullname: 'Emily Brown',
		email: 'emily.brown@example.com',
		country: Country.Canada,
		password: '1234',
		walletAddress: '0x456789abcdef123456789abcdef123456789abcd',
	},
	{
		id: '091f803c-a387-4e54-9e49-510541a075e0',
		fullname: 'Felipe Souza',
		email: 'felipe.souza@example.com',
		country: Country.Brasil,
		password: '1234',
		walletAddress: '0x123123abcdef123123abcdef123123abcdef1231',
	},
	{
		id: '483c2333-e549-48c8-abb2-ea6a158009c6',
		fullname: 'Gabriel Oliveira',
		email: 'gabriel.oliveira@example.com',
		country: Country.Franca,
		password: '1234',
		walletAddress: '0xabcdefabcdef1234567890123456789012345678',
	},
	{
		id: 'f8dfaa99-1ecd-4e13-8c90-e2f4ff520b06',
		fullname: 'Hannah White',
		email: 'hannah.white@example.com',
		country: Country.ReinoUnido,
		password: '1234',
		walletAddress: '0x1234567890abcdefabcdef1234567890abcdef12',
	},
	{
		id: 'dde3e82d-686d-4d72-a623-a7b0e969301e',
		fullname: 'Isabel Tanaka',
		email: 'isabel.tanaka@example.com',
		country: Country.Japao,
		password: '1234',
		walletAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
	},
	{
		id: 'daf108ba-e59c-4580-8e5c-a00b3256a4b8',
		fullname: 'Lucas Rossi',
		email: 'lucas.rossi@example.com',
		country: Country.Italia,
		password: '1234',
		walletAddress: '0x456789abcdefabcdef1234567890abcdefabcdef',
	},
];
