'use client';

import { useDisclosure } from '@nextui-org/react';
import Image from 'next/image';

import { notable } from '@/app/ui/fonts';
import vakenha from '@/app/ui/vakenha.png';
import PrimaryButton from '@/components/Button/PrimaryButton';
import useAuth from '@/hooks/useAuth';

import { StyledButtonsGroup, StyledContainer, StyledTitle } from './styles';
import SignIn from './Dialogs/SignIn';
import SignUp from './Dialogs/SignUp';
import { redirect } from 'next/navigation';

export default function Auth() {
	const {
		isOpen: isSignInOpen,
		onClose: onSignInClose,
		onOpen: onSignInOpen,
		onOpenChange: onSignInOpenChange,
	} = useDisclosure();

	const {
		isOpen: isSignUpOpen,
		onClose: onSignUpClose,
		onOpen: onSignUpOpen,
		onOpenChange: onSignUpOpenChange,
	} = useDisclosure();

	const { connectedUser } = useAuth();

	if (!!connectedUser) {
		redirect('/');
	}

	return (
		<StyledContainer>
			<StyledTitle className={`${notable.className} antialiased`}>
				Cowfunding
			</StyledTitle>

			<Image
				style={{ display: 'block' }}
				alt="site logo"
				src={vakenha}
				width={400}
				height={400}
			/>

			<StyledButtonsGroup>
				<PrimaryButton onClick={onSignInOpen}>Entrar</PrimaryButton>

				<PrimaryButton onClick={onSignUpOpen}>Cadastrar</PrimaryButton>
			</StyledButtonsGroup>

			{isSignInOpen && (
				<SignIn
					isOpen={true}
					onOpenChange={onSignInOpenChange}
					onRequestToClose={onSignInClose}
				/>
			)}

			{isSignUpOpen && (
				<SignUp
					isOpen={true}
					onOpenChange={onSignUpOpenChange}
					onRequestToClose={onSignUpClose}
				/>
			)}
		</StyledContainer>
	);
}
