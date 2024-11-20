import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';
import { useState } from 'react';

import DangerButton from '@/components/Button/DangerButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import TextInput from '@/components/Input/TextInput';
import Modal from '@/components/Modal';
import useCurrencies from '@/hooks/useCurrencies';
import { Cryptocurrency } from '@/models/Currencies';

import { StyledCheckboxGroup } from './styles';

interface CreateDialogProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onRequestToClose: () => void;
}

const initialValues: Cryptocurrency = {
	code: '',
	decimalPlaces: 0,
	iconUrl: '',
	name: '',
	networks: [],
};

const networks = [
	'Ethereum',
	'Binance Smart Chain',
	'Solana',
	'Polygon',
	'Avalanche',
	'Tron',
	'Cardano',
	'Polkadot',
];

export default function CreateDialog({
	isOpen,
	onOpenChange,
	onRequestToClose,
}: CreateDialogProps) {
	const [currency, setCurrency] = useState<Cryptocurrency>(initialValues);
	const { setCurrencies } = useCurrencies();

	const networksChangeHandler = (network: string) => {
		setCurrency((prevCurrency) => {
			const newCurrency = structuredClone(prevCurrency);

			const networkIndex = newCurrency.networks.indexOf(network);

			if (networkIndex < 0) {
				newCurrency.networks.push(network);
			} else {
				newCurrency.networks = newCurrency.networks.filter(
					(chain) => chain !== network,
				);
			}

			return newCurrency;
		});
	};

	const currencyChangeHandler = (
		field: keyof Cryptocurrency,
		value: Cryptocurrency[keyof Cryptocurrency],
	) => {
		setCurrency((prevCurrency) => {
			const newCurrency = { ...prevCurrency };

			return { ...newCurrency, [field]: value };
		});
	};

	const onSubmitHandler = () => {
		setCurrencies((prevCurrencies) => {
			const newCurrencies = [...prevCurrencies];

			newCurrencies.push(currency);

			return newCurrencies;
		});

		onRequestToClose();
	};

	const isValid =
		!!currency.name &&
		!!currency.code &&
		!!currency.decimalPlaces &&
		currency.networks.length > 0;

	return (
		<Modal
			id="modal-create-currency"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Criar criptomoeda
						</ModalHeader>

						<ModalBody>
							<TextInput
								label="Nome"
								id="currency_name"
								value={currency.name}
								onChange={(event) =>
									currencyChangeHandler('name', event.target.value)
								}
							/>

							<TextInput
								label="Código"
								id="currency_code"
								value={currency.code}
								onChange={(event) =>
									currencyChangeHandler(
										'code',
										event.target.value.replace(' ', ''),
									)
								}
							/>

							<TextInput
								label="Casas decimais"
								id="decimalPlaces"
								value={currency.decimalPlaces}
								onChange={(event) =>
									currencyChangeHandler(
										'decimalPlaces',
										event.target.value.replace(/\D/g, ''),
									)
								}
							/>

							<StyledCheckboxGroup>
								<label>Redes</label>

								{networks.map((network) => (
									<label key={network}>
										{network}
										<input
											checked={currency.networks.includes(network)}
											id={network}
											name={network}
											onChange={() => networksChangeHandler(network)}
											type="checkbox"
										/>
									</label>
								))}
							</StyledCheckboxGroup>
						</ModalBody>

						<ModalFooter>
							<DangerButton onClick={onClose}>Cancelar</DangerButton>

							<PrimaryButton disabled={!isValid} onClick={onSubmitHandler}>
								Salvar
							</PrimaryButton>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
