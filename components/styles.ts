
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #99999936;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const InputStylezed = styled.TextInput`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;

export const InputPhoneStylezed = styled(TextInputMask)`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;
