import { Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BarcodeScanningResult, Camera, CameraView } from 'expo-camera';
import { styles } from './styles';
import { useAuth } from '../../hooks/useAuth';

const QrCode = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const { handleLogin } = useAuth();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const onScanner = async ({ data }: BarcodeScanningResult) => {
    setScanned(true);
    await handleLogin(data);
  };

  return (
    <SafeAreaView style={styles.qrcodeContainer}>
      <Text>QrCode</Text>

      <CameraView
        onBarcodeScanned={scanned ? undefined : onScanner}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'pdf417'],
        }}
        style={{ width: 300, height: 300 }}
      />
    </SafeAreaView>
  );
};

export default QrCode;
