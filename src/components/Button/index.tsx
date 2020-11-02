import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps, View} from 'react-native';

import styles from './styles';

interface ButtonProps extends Readonly<TouchableOpacityProps> {
  label?: string;
  outline?: boolean;
  children?: Element;
}

const Button = ({label, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity { ...props } style={styles.container}>
      <View style={ [styles.button, props.outline ? styles.outline : {} ] }>
        <Text style={ [styles.text, props.outline ? { color: '#327FD6'} : {}] }>{label?.toUpperCase()}{ props.children }</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
