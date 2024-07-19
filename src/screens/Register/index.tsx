import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from '@react-navigation/native';

const Register = () => {
  return (
    <SafeAreaView style={styles.registerContainer}>
      {/* form */}
      <View style={styles.formContainer}>
        {/* title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subtitle}>
            Preencha o formulário para criar sua conta
          </Text>
        </View>
        {/* input button qrcode*/}
        <View style={{ gap: 12 }}>
          <Input label="Email" placeholder="email@email.com" />
          <Button title="Cadastrar" />
        </View>
        <Text style={styles.linkContainer}>
          Já possui uma conta? {''}
          <Link to="/Login" style={styles.linkHighlight}>
            Fazer Login
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
