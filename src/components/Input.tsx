/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { StyleProp } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, InputStylezed } from './styles';

interface Props {
  style: StyleProp<any>;
  icon: string;
  [x: string]: any;
}

type Ref = any;

function Input({ style, icon, ...rest }: Props, ref: Ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <InputStylezed {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
