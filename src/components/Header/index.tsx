'use client';

import Link from 'next/link';
import { StyledHeader } from './styles';

export default function Header({ children }: React.PropsWithChildren) {
	return (
		<StyledHeader>
			<Link href="/">Voltar</Link>

			{children}
		</StyledHeader>
	);
}
