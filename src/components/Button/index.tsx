import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps, View} from 'react-native';

import styles from './styles';

interface ButtonProps extends Readonly<TouchableOpacityProps> {
  label?: string;
  outline?: boolean;
  children?: Element;
  style?: Object;
}

const Button = ({label, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity { ...props } style={styles.container}>
      <View style={ [styles.button, props.style, props.outline ? styles.outline : {} ] }>
        <Text style={ [styles.text, props.outline ? { color: '#327FD6'} : {}] }>{label?.toUpperCase()}</Text>
        { props.children }
      </View>
    </TouchableOpacity>
  );
};

export default Button;
