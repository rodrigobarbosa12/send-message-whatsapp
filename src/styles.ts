import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../components/Input';
import InputPhone from '../components/InputPhone';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: #000
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const InputMaskPhone = styled(InputPhone)`
  margin-bottom: 10px;
`;
