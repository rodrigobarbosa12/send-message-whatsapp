import React, { useState, ReactElement } from 'react';
import {
  Linking,
  Button,
  Image,
  Alert,
  View,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

  const openGithub = () => Linking.openURL('https://github.com/rodrigobarbosa12');
  const openLinkedin = () => Linking.openURL('https://www.linkedin.com/in/rodrigo-barbosa-7a1429157/');

  return (
    <>
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
      <View style={{
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 30,
      }}
      >
        <View />
        <TouchableOpacity onPress={openGithub}>
          <MaterialCommunityIcons name="github" color="#999" size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openLinkedin}>
          <MaterialCommunityIcons name="linkedin" color="#999" size={40} />
        </TouchableOpacity>
        <View />
      </View>
    </>
  );
};

export default SendMessageToNumber;
