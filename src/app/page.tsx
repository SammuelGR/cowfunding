'use client';

import Image from 'next/image';
import vakenha from './vakenha.png';
import { StyledContainer, StyledLink, StyledSeedButton } from './styles';
import { useSeeds } from '@/seeds/useSeeds';
import useAuth from '@/hooks/useAuth';

export default function Home() {
	const { seedData } = useSeeds();
	const { connectedUser, signOut } = useAuth();

	const links = [
		{ name: 'Moedas', href: '/cryptocurrencies' },
		{ name: 'Usuários', href: '/users' },
	];

	if (!connectedUser) {
		links.unshift({ name: 'Login', href: '/auth' });
	}

	return (
		<StyledContainer>
			<Image
				style={{ display: 'block' }}
				alt="site logo"
				src={vakenha}
				width={256}
				height={256}
			/>

			{links.map((link) => (
				<StyledLink key={link.name} href={link.href}>
					<span>{link.name}</span>
				</StyledLink>
			))}

			<StyledSeedButton onClick={() => seedData()}>Seed</StyledSeedButton>

			{!!connectedUser && (
				<StyledSeedButton onClick={signOut}>Sair</StyledSeedButton>
			)}
		</StyledContainer>
	);
}
