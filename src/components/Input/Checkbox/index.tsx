import { InputHTMLAttributes } from 'react';
import { StyledCheckboxGroup } from './styles';

interface CheckboxGroupProps {
	className?: string;
	label: React.ReactNode;
}

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: React.ReactNode;
}

export default function CheckboxGroup({
	children,
	className,
	label,
}: React.PropsWithChildren<CheckboxGroupProps>) {
	return (
		<StyledCheckboxGroup className={className}>
			<label>{label}</label>

			{children}
		</StyledCheckboxGroup>
	);
}

export function Checkbox({ label, ...inputProps }: CheckboxProps) {
	return (
		<>
			<label>
				{label}

				<input {...inputProps} type="checkbox" />
			</label>
		</>
	);
}
