import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';

import { Link, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../routes/Stack/stack';

const Login = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const navigate = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const OnSubmit = async () => {
    if (!email) return alert('O email é obrigatório');
    await handleLogin(email);
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Entrar na sua conta</Text>
          <Text style={styles.subtitle}>
            Preencha o formulário para entrar na sua conta
          </Text>
        </View>

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

          <Button onPress={() => navigate.navigate('Qrcode')}>
            <Button.Label>Entrar com código QR</Button.Label>
          </Button>
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
