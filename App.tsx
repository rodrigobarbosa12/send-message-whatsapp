import React, { useState, ReactElement } from 'react'
import { Linking, Button, Image, Alert, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import {
  Container,
  Form,
  FormInput,
} from './styles';
import Logo from './images/whats.png';

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '75%',
    marginLeft: 15,
    marginRight: 30,
    fontSize: 15,
    color: '#fff',
  },
});

const App = (): ReactElement => {
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

        <TextInputMask
          style={styles.input}
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

export default App;
