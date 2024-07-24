import { Text, SafeAreaView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BarcodeScanningResult, Camera, CameraView } from 'expo-camera';
import { styles } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../routes/Stack/stack';
import { useNavigation } from '@react-navigation/native';

const QrCode = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const { handleLogin } = useAuth();
  const navigate = useNavigation<NativeStackNavigationProp<StackParamList>>();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const onScanner = async ({ data }: BarcodeScanningResult) => {
    if (hasPermission) {
      Alert.alert('Você precisa permitir que o aplicativo acesse a câmera');
      navigate.goBack();
    }

    await handleLogin(data);
  };

  return (
    <SafeAreaView style={styles.qrcodeContainer}>
      <Text>QrCode</Text>

      <CameraView
        onBarcodeScanned={onScanner}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'pdf417'],
        }}
        style={{ width: 300, height: 300 }}
      />
    </SafeAreaView>
  );
};

export default QrCode;
