import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, InputPhoneStylezed } from './styles';

interface Props {
  style: any;
  icon: any;
  [x: string]: any
}

function InputPhone({ style, icon, ...rest }: Props, ref: any) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <InputPhoneStylezed {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(InputPhone);
