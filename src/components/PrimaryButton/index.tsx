import { StyledButton } from './styles';

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
	children,
	...buttonProps
}: React.PropsWithChildren<PrimaryButtonProps>) {
	return (
		<>
			<StyledButton {...buttonProps}>{children}</StyledButton>
		</>
	);
}
