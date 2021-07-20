import React, { useState, ReactElement } from 'react';
import {
  Linking,
  Button,
  Image,
  Alert,
} from 'react-native';
import {
  Container,
  Form,
  FormInput,
  InputMaskPhone,
} from './styles';
import Logo from './images/whats.png';

const SendMessageToNumber = (): ReactElement => {
  const [message, setMassage] = useState<string | null>('Olá');
  const [number, setNumber] = useState<string>('');

  const openWhatsapp = async () => {
    if (!number) {
      Alert.alert('Atenção', 'O número é obrigatório');
      return;
    }

    const numberWithoutMask = number.replace(/\D/gim, '');

    if (numberWithoutMask.length < 10) {
      Alert.alert('Atenção', 'Por favor digite um número válido');
      return;
    }

    Linking.openURL(`whatsapp://send?text=${message}&phone=+55${numberWithoutMask}`);
  };

  return (
    <Container>
      <Image source={Logo} style={{ width: 80, height: 80, marginBottom: 50 }} />
      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="default"
          placeholder="Olá"
          placeholderTextColor="#999"
          onChangeText={(value: string) => setMassage(value)}
        />

        <InputMaskPhone
          icon="phone"
          type="cel-phone"
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          value={number}
          placeholder="Ex: (11) 91234-5678"
          placeholderTextColor="#999"
          onChangeText={(value: string) => setNumber(value)}
        />
        <Button
          title="Enviar"
          onPress={openWhatsapp}
          color="#484848"
        />
      </Form>
    </Container>
  );
};

export default SendMessageToNumber;
