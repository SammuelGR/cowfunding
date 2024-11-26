import styled from 'styled-components';

import CheckboxGroup from '@/components/Input/Checkbox';
import TextArea from '@/components/Input/TextArea';
import TextInput from '@/components/Input/TextInput';

export const StyledTextInput = styled(TextInput)`
	width: 100%;
`;

export const StyledTextArea = styled(TextArea)`
	width: 100%;
	min-height: 128px;
`;

export const StyledGroupedInputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 16px;

	& > * {
		width: 100%;
	}
`;

export const StyledCheckboxGroup = styled(CheckboxGroup)`
	display: flex;
	flex-wrap: wrap;

	& > label {
		display: block;
		text-align: center;
		width: 100%;
	}

	label:not(:first-of-type) {
		width: 50%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
	}
`;
