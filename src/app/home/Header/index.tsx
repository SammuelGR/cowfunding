import { Tooltip, useDisclosure } from '@nextui-org/react';
import Link from 'next/link';

import { notable } from '@/app/ui/fonts';
import vakenha from '@/app/ui/vakenha.png';
import useAuth from '@/hooks/useAuth';
import { useSeeds } from '@/seeds/useSeeds';

import {
	StyledContainer,
	StyledHeaderButton,
	StyledImage,
	StyledNav,
	StyledTitle,
	StyledUserContainer,
} from './styles';
import Campaign from '../dialogs/Campaign';

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
	const { connectedUser, signOut } = useAuth();
	const { toggleSeed } = useSeeds();

	const {
		isOpen: isCampaignOpen,
		onClose: onCampaignClose,
		onOpen: onCampaignOpen,
		onOpenChange: onCampaignOpenChange,
	} = useDisclosure();

	const links: HeaderLink[] = [
		{
			action: onCampaignOpen,
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
		<>
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

				<Tooltip
					color="danger"
					content={
						<span className="cursor-pointer" onClick={signOut}>
							Sair
						</span>
					}
					offset={-20}
					placement="bottom"
					showArrow={true}
				>
					<StyledUserContainer>
						<span>{connectedUser?.fullname.charAt(0)}</span>
					</StyledUserContainer>
				</Tooltip>
			</StyledContainer>

			{isCampaignOpen && (
				<Campaign
					isOpen={true}
					key="create-campaign"
					onOpenChange={onCampaignOpenChange}
					onRequestToClose={onCampaignClose}
				/>
			)}
		</>
	);
}
