import {
  View,
  Text,
  TextInputProps,
  TextInput,
  ViewProps,
  TextProps,
} from 'react-native';
import React from 'react';

import { styles } from './styles';
import { theme } from '../../../theme';

const Input = ({ children, style, ...rest }: ViewProps) => {
  return (
    <View style={[styles.inputContainer, style]} {...rest}>
      {children}
    </View>
  );
};

const Label = ({ children, ...rest }: TextProps) => {
  return (
    <Text style={styles.label} {...rest}>
      {children}
    </Text>
  );
};

const Field = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.indigo100}
      {...rest}
    />
  );
};

const Textarea = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      style={styles.textarea}
      placeholderTextColor={theme.colors.indigo100}
      {...rest}
    />
  );
};

Input.Label = Label;
Input.Field = Field;
Input.Textarea = Textarea;

export { Input };
