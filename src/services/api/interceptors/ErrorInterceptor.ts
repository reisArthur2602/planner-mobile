import { AxiosError } from 'axios';
import { Alert } from 'react-native';

export const errorInterceptor = (error: AxiosError) => {
  const errorMessage = (error.response?.data as { message: string }).message;

  if (error.response?.status == 400) {
    const errorMessage = (
      error.response?.data as [{ path: string; message: string }]
    ).map((err) => err.message);

    errorMessage.forEach((err) => Alert.alert(err));

    return Promise.reject(errorMessage);
  } else if (error.response?.status == 401) {
    return Promise.reject(errorMessage);
  } else {
    Alert.alert(errorMessage);
    return Promise.reject(errorMessage);
  }
};
