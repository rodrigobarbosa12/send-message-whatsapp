import React, { ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from './styles';

interface Props {
  children: ReactElement,
  loading: boolean,
}

const Button = ({ children, loading, ...rest }: Props): ReactElement => (
  <Container {...rest}>
    {loading ? (
      <ActivityIndicator size="small" color="#FFF" />
    ) : (
      <>
        {children}
      </>
    )}
  </Container>
);

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
