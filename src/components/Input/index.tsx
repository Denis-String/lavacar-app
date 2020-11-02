import React from 'react';
import {TextInput, Text, TextInputProps, View} from 'react-native';

import styles from './styles';

interface InputProps extends Readonly<TextInputProps> {
  label?: string;
}

const Input = ({label, ...props}: InputProps) => {
  return (
    <View style={styles.container}>
      { label ? <Text style={styles.label}>{label}</Text> : undefined }
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default Input;
