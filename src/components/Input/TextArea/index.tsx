import { StyledLabel, StyledTextArea } from './styles';

interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: React.ReactNode;
}

export default function TextArea({ label, ...inputProps }: TextAreaProps) {
	return (
		<>
			<label>
				<StyledLabel>{label}</StyledLabel>

				<StyledTextArea {...inputProps} />
			</label>
		</>
	);
}
