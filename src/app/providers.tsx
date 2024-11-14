'use client';

import { CurrenciesProvider } from '@/hooks/useCurrencies';
import { NextUIProvider } from '@nextui-org/react';

export default function Providers({ children }: React.PropsWithChildren) {
	return (
		<NextUIProvider>
			<CurrenciesProvider>{children}</CurrenciesProvider>
		</NextUIProvider>
	);
}
