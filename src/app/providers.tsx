'use client';

import { NextUIProvider } from '@nextui-org/react';

import { AuthProvider } from '@/hooks/useAuth';
import { CurrenciesProvider } from '@/hooks/useCurrencies';
import { UsersProvider } from '@/hooks/useUsers';

export default function Providers({ children }: React.PropsWithChildren) {
	return (
		<NextUIProvider>
			<CurrenciesProvider>
				<UsersProvider>
					<AuthProvider>{children}</AuthProvider>
				</UsersProvider>
			</CurrenciesProvider>
		</NextUIProvider>
	);
}
