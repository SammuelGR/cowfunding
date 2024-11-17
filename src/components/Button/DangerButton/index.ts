import styled from 'styled-components';
import BaseButton, { type BaseButtonProps } from '../BaseButton';

export type DangerButtonProps = BaseButtonProps;

export const DangerButton = styled(BaseButton)`
	background-color: #ff1b1b;

	&:hover {
		background-color: #f45050;
	}
`;

export default DangerButton;
