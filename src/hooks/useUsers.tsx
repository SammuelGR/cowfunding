import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { User } from '@/models/User';

export interface UsersProviderProps {
	createUser: (user: User) => void;
	users: User[];
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UsersContext = createContext<UsersProviderProps | null>(null);

export const UsersProvider = ({ children }: React.PropsWithChildren) => {
	const [users, setUsers] = useState<User[]>([]);

	const createUser = (user: User) => {
		user.id = uuidv4();

		setUsers((prevUsers) => {
			const newUsers = [...prevUsers];

			newUsers.push(user);

			return newUsers;
		});
	};

	return (
		<UsersContext.Provider
			value={{
				createUser,
				users,
				setUsers,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};

export const useUsers = () => {
	const context = useContext(UsersContext);

	if (!context) {
		throw new Error('useUsers must be used within UsersProvider');
	}

	return context;
};

export default useUsers;
