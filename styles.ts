import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from './components/Input';
import Button from './components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  // enabled: Platform.OS === 'ios',
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

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  background-color: #484848;
  display: flex;
  justify-content: center;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
`;

export const SignText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
