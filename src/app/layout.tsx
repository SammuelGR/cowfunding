import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import './globals.css';

export const metadata: Metadata = {
	title: 'Cowfunding',
	description: 'Crypto crowdfunding platform',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
