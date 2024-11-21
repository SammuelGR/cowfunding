'use client';

import Image from 'next/image';
import vakenha from './vakenha.png';
import { StyledContainer, StyledLink, StyledSeedButton } from './styles';
import { useSeeds } from '@/seeds/useSeeds';

const links = [
	{ name: 'Auth', href: '/auth' },
	{ name: 'Moedas', href: '/cryptocurrencies' },
	{ name: 'Usuários', href: '/users' },
];

export default function Home() {
	const { seedData } = useSeeds();

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
		</StyledContainer>
	);
}
