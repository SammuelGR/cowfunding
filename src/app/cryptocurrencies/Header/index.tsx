'use client';

import Link from 'next/link';
import { StyledHeader } from './styles';

export default function Header() {
	return (
		<StyledHeader>
			<Link href="/">Voltar</Link>
		</StyledHeader>
	);
}
