'use client';

import { CurrenciesProvider } from '@/hooks/useCurrencies';
import { UsersProvider } from '@/hooks/useUsers';
import { NextUIProvider } from '@nextui-org/react';

export default function Providers({ children }: React.PropsWithChildren) {
	return (
		<NextUIProvider>
			<CurrenciesProvider>
				<UsersProvider>{children}</UsersProvider>
			</CurrenciesProvider>
		</NextUIProvider>
	);
}
