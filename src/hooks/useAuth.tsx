import React, { createContext, useContext, useEffect, useState } from 'react';

import useUsers from '@/hooks/useUsers';
import { User } from '@/models/User';

export type SignInData = Pick<User, 'email' | 'password'>;

export interface AuthProviderProps {
	signIn: (data: SignInData) => boolean;
	signOut: () => void;
	connectedUser?: User | null;
}

const signInStorageKey = '@cowfunding:signin';

const AuthContext = createContext<AuthProviderProps | null>(null);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
	const [connectedUser, setConnectedUser] = useState<User | null>(null);

	useEffect(() => {
		const storedUser = localStorage.getItem(signInStorageKey);
		const parsedUser = !!storedUser ? JSON.parse(storedUser) : null;

		setConnectedUser(parsedUser);
	}, []);

	const { users } = useUsers();

	const signIn = (data: SignInData) => {
		const currentUser = users.find(
			(user) => user.email === data.email && user.password === data.password,
		);

		if (!!currentUser) {
			localStorage.setItem(signInStorageKey, JSON.stringify(currentUser));
			setConnectedUser(currentUser);
		}

		return !!currentUser;
	};

	const signOut = () => {
		localStorage.removeItem(signInStorageKey);
		setConnectedUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				connectedUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within AuthProvider');
	}

	return context;
};

export default useAuth;
