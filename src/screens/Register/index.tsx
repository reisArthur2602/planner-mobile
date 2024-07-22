import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

import { Link } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Register = () => {
  const { handleRegister } = useAuth();
  const [email, setEmail] = useState('');

  const OnSubmit = async () => {
    if (!email) return alert('O email é obrigatório');
    await handleRegister(email);
  };

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
          <Input>
            <Input.Label>Email</Input.Label>
            <Input.Field
              placeholder="email@email.com"
              onChangeText={setEmail}
            />
          </Input>

          <Button title="Cadastrar" onPress={OnSubmit} />
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
