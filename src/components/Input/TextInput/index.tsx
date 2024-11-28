import { StyledInput, StyledLabel } from './styles';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: React.ReactNode;
}

export default function TextInput({
	className,
	label,
	...inputProps
}: TextInputProps) {
	return (
		<>
			<label>
				{label && <StyledLabel>{label}</StyledLabel>}

				<StyledInput className={className} type="text" {...inputProps} />
			</label>
		</>
	);
}
