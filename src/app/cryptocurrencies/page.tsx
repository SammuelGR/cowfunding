'use client';

import Header from './Header';
import { StyledContent, StyledContainer } from './styles';

export default function Cryptocurrencies() {
	return (
		<div>
			<Header />
			<StyledContainer>
				<StyledContent>
					<h1>Moedas</h1>
				</StyledContent>
			</StyledContainer>
		</div>
	);
}
