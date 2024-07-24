import { Alert } from 'react-native';

type confirmModalProps = {
  title: string;
  onPress: any;
};

export const confirmModal = async ({ title, onPress }: confirmModalProps) => {
  Alert.alert(
    'Confirmação',
    title,
    [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'OK', onPress },
    ],
    { cancelable: false }
  );
};
