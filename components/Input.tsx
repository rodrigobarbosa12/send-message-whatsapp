import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, InputStylezed } from './styles';

interface Props {
  style: any;
  icon: any;
  [x: string]: any
}

function Input({ style, icon, ...rest }: Props, ref: any) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <InputStylezed {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
