import React, { useState, ReactElement } from 'react'
import { Linking, Button, Image, Alert } from 'react-native';
import {
  Container,
  Form,
  FormInput,
} from './styles';
import Logo from './images/whats.png';

const App = (): ReactElement => {
  const [message, setMassage] = useState<string | null>('Olá');
  const [number, setNumber] = useState<string | null>(null);

  const openWhatsapp = async () => {
    if (!number) {
      Alert.alert('Atenção', 'O número é obrigatório');
      return
    }

    Linking.openURL(`whatsapp://send?text=${message}&phone=+${number}`);
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

        <FormInput
          icon="phone"
          keyboardType="number-pad"
          placeholder="Ex: 5511912345678"
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

export default App;
