import React, { createContext, useContext, useState } from 'react';

import { User } from '@/models/User';

export interface UsersProviderProps {
	users: User[];
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UsersContext = createContext<UsersProviderProps | null>(null);

export const UsersProvider = ({ children }: React.PropsWithChildren) => {
	const [users, setUsers] = useState<User[]>([]);

	return (
		<UsersContext.Provider
			value={{
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
