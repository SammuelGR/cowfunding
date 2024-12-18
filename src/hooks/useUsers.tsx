import React, { createContext, useContext, useEffect, useState } from 'react';

import { User } from '@/models/User';

export interface UsersProviderProps {
	createUser: (user: User) => void;
	deleteUser: (userId: string) => void;
	editUser: (user: User) => void;
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;
	users: User[];
}

export const usersStorageKey = '@cowfunding:users';

const UsersContext = createContext<UsersProviderProps | null>(null);

export const UsersProvider = ({ children }: React.PropsWithChildren) => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		const storedUsers = localStorage.getItem(usersStorageKey);
		const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

		setUsers(parsedUsers);
	}, []);

	const updateUsers = (newUsers: User[]) => {
		localStorage.setItem(usersStorageKey, JSON.stringify(newUsers));
	};

	const createUser = (user: User) => {
		setUsers((prevUsers) => {
			const newUsers = [...prevUsers];

			newUsers.push(user);

			updateUsers(newUsers);

			return newUsers;
		});
	};

	const editUser = (user: User) => {
		setUsers((prevUsers) => {
			const newUsers = [...prevUsers];

			const cIndex = newUsers.findIndex(({ id }) => id === user.id);

			const newUser = { ...newUsers[cIndex], ...user };
			newUsers[cIndex] = newUser;

			updateUsers(newUsers);

			return newUsers;
		});
	};

	const deleteUser = (userId: string) => {
		setUsers((prevUsers) => {
			const newUsers = [...prevUsers];

			const cIndex = newUsers.findIndex(({ id }) => id === userId);
			newUsers.splice(cIndex, 1);

			updateUsers(newUsers);

			return newUsers;
		});
	};

	return (
		<UsersContext.Provider
			value={{
				createUser,
				deleteUser,
				editUser,
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
