import { StyledLabel, StyledSelect } from './styles';

interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement>,
		React.PropsWithChildren {
	label: React.ReactNode;
}

export default function Select({
	children,
	label,
	...selectProps
}: SelectProps) {
	return (
		<>
			<label>
				<StyledLabel>{label}</StyledLabel>

				<StyledSelect {...selectProps}>{children}</StyledSelect>
			</label>
		</>
	);
}
