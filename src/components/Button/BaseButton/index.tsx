import { StyledButton } from './styles';

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function BaseButton({
	children,
	...buttonProps
}: React.PropsWithChildren<BaseButtonProps>) {
	return <StyledButton {...buttonProps}>{children}</StyledButton>;
}
