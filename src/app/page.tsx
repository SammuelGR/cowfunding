'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

import useAuth from '@/hooks/useAuth';

import Home from './home';

export default function Root() {
	const { connectedUser } = useAuth();

	useEffect(() => {
		if (!connectedUser) {
			redirect('/auth');
		}
	}, [connectedUser]);

	return <Home />;
}
