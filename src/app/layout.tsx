import type { Metadata } from 'next';
import React from 'react';

import { inter } from './ui/fonts';

import Providers from './providers';

import './globals.css';

export const metadata: Metadata = {
	title: 'Cowfunding',
	description: 'Crypto crowdfunding platform',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
