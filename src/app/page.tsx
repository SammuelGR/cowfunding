'use client';

import Image from 'next/image';
import vakenha from './vakenha.png';
import { StyledContainer, StyledLink } from './styles';

const links = [{ name: 'Moedas', href: '/cryptocurrencies' }];

export default function Home() {
	return (
		<>
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
			</StyledContainer>
		</>
	);
}
