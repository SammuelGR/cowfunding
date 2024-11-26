'use client';

import { redirect } from 'next/navigation';

import useAuth from '@/hooks/useAuth';

import Home from './home';

export default function Root() {
	const { connectedUser } = useAuth();

	if (!connectedUser) {
		redirect('/auth');
	}

	return <Home />;
}
