import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

import { Link } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Login = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');

  const OnSubmit = async () => {
    if (!email) return alert('O email é obrigatório');
    await handleLogin(email);
  };

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
          <Input>
            <Input.Label>Email</Input.Label>
            <Input.Field
              placeholder="email@email.com"
              onChangeText={setEmail}
            />
          </Input>

          <Button.Filled onPress={OnSubmit}>
            <Button.Label>Entrar</Button.Label>
          </Button.Filled>
          
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
