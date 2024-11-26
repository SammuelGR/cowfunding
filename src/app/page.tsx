'use client';

import useAuth from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import Home from './home';

export default function Root() {
	const { connectedUser } = useAuth();

	if (!connectedUser) {
		redirect('/auth');
	}

	return <Home />;
}
