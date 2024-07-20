import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../services/api/axios-config';

interface IUseToken {
  saveToken(token: string): Promise<void>;
  getToken(): Promise<string | null>;
  deleteToken(): Promise<void>;
}

export const useToken = (): IUseToken => {
  const saveToken = async (token: string) => {
    await AsyncStorage.setItem('access-token', token);
    Api.defaults.headers['userid'] = token;
  };

  const getToken = async () => {
    const token = await AsyncStorage.getItem('access-token');
    return token;
  };

  const deleteToken = async () => {
    delete Api.defaults.headers['userid'];
    await AsyncStorage.removeItem('access-token');
  };

  return { saveToken, getToken, deleteToken };
};
