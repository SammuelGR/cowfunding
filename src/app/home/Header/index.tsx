import { notable } from '@/app/ui/fonts';
import vakenha from '@/app/ui/vakenha.png';

import {
	StyledContainer,
	StyledHeaderButton,
	StyledImage,
	StyledNav,
	StyledTitle,
	StyledUserContainer,
} from './styles';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { useSeeds } from '@/seeds/useSeeds';

type HeaderLink =
	| {
			label: string;
			type: 'link';
			url: string;
			action?: never;
	  }
	| {
			label: string;
			type: 'button';
			action: () => void;
			url?: never;
	  };

export default function Header() {
	const { connectedUser } = useAuth();
	const { toggleSeed } = useSeeds();

	const links: HeaderLink[] = [
		{
			action: () => {},
			label: 'Criar campanha',
			type: 'button',
		},
		{
			label: 'Moedas',
			url: '/cryptocurrencies',
			type: 'link',
		},
		{
			label: 'Usuários',
			url: '/users',
			type: 'link',
		},
		{
			label: 'Quem somos',
			type: 'link',
			url: '#',
		},
		{
			action: toggleSeed,
			label: 'Seed',
			type: 'button',
		},
	];

	return (
		<StyledContainer>
			<div className="flex flex-col items-center w-fit">
				<StyledTitle className={`${notable.className} antialiased block`}>
					Cowfunding
				</StyledTitle>

				<StyledImage
					style={{ display: 'block' }}
					alt="site logo"
					src={vakenha}
					width={168}
					height={168}
				/>
			</div>

			<StyledNav>
				{links.map((link) => {
					return link.type === 'button' ? (
						<StyledHeaderButton onClick={link.action} key={link.label}>
							{link.label}
						</StyledHeaderButton>
					) : (
						<Link className="inline h-fit" key={link.label} href={link.url}>
							<StyledHeaderButton>{link.label}</StyledHeaderButton>
						</Link>
					);
				})}
			</StyledNav>

			<StyledUserContainer>
				<span>{connectedUser?.fullname.charAt(0)}</span>
			</StyledUserContainer>
		</StyledContainer>
	);
}
