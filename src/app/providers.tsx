'use client';

import { NextUIProvider } from '@nextui-org/react';

import { AuthProvider } from '@/hooks/useAuth';
import { CampaignsProvider } from '@/hooks/useCampaign';
import { CurrenciesProvider } from '@/hooks/useCurrencies';
import { UsersProvider } from '@/hooks/useUsers';

export default function Providers({ children }: React.PropsWithChildren) {
	return (
		<NextUIProvider>
			<CurrenciesProvider>
				<UsersProvider>
					<AuthProvider>
						<CampaignsProvider>{children}</CampaignsProvider>
					</AuthProvider>
				</UsersProvider>
			</CurrenciesProvider>
		</NextUIProvider>
	);
}
