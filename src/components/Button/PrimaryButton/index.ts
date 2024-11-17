import styled from 'styled-components';
import BaseButton, { type BaseButtonProps } from '../BaseButton';

export type PrimaryButtonProps = BaseButtonProps;

export const PrimaryButton = styled(BaseButton)`
	background-color: #007690;

	&:hover {
		background-color: #2e899d;
	}
`;

export default PrimaryButton;
