import { View, Text, TextInputProps, TextInput } from 'react-native';
import React from 'react';
import { theme } from '../../theme';
import { styles } from './styles';

interface IInput extends TextInputProps {
  label: string;
}

const Input = ({ label, ...props }: IInput) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        {...props}
        placeholderTextColor={theme.colors.indigo100}
      />
    </View>
  );
};

export default Input;
