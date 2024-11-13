'use client';

import Image from 'next/image';
import vakenha from './vakenha.png';
import { StyledContainer } from './styles';
import Link from 'next/link';

const links = [{ name: 'Moedas', href: '/cryptocurrencies' }];

export default function Home() {
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
				<Link key={link.name} href={link.href}>
					<span>{link.name}</span>
				</Link>
			))}
		</StyledContainer>
	);
}
