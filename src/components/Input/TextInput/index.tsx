import { StyledInput, StyledLabel } from './styles';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: React.ReactNode;
}

export default function TextInput({ label, ...inputProps }: TextInputProps) {
	return (
		<>
			<label>
				<StyledLabel>{label}</StyledLabel>

				<StyledInput type="text" {...inputProps} />
			</label>
		</>
	);
}
