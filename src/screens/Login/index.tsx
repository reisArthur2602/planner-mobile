import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from '@react-navigation/native';

const Login = () => {
  return (
    <SafeAreaView style={styles.loginContainer}>
      {/* form */}
      <View style={styles.formContainer}>
        {/* title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Entrar na sua conta</Text>
          <Text style={styles.subtitle}>
            Preencha o formulário para entrar na sua conta
          </Text>
        </View>
        {/* input button qrcode*/}
        <View style={{ gap: 12 }}>
          <Input label="Email" placeholder="email@email.com" />
          <Button title="Entrar" />
          <TouchableOpacity style={styles.qrContainer}>
            <Text style={styles.qrText}>Entrar com código QR</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.linkContainer}>
          Não possui uma conta? {''}
          <Link to="/Register" style={styles.linkHighlight}>
            Fazer Cadastro
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
