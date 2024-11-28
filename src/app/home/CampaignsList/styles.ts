import TextInput from '@/components/Input/TextInput';
import styled from 'styled-components';

export const StyledContainer = styled.div`
	padding: 8px;
	width: 100%;
`;

export const StyledHeader = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 16px 24px;
`;

export const StyledTitle = styled.h2`
	color: #b4aeae;
	font-size: 32px;
`;

export const StyledTextInput = styled(TextInput)`
	height: 48px;
	width: 480px;
`;
