import { ReactNode, createContext, useEffect, useState } from 'react';
import { UserService } from '../services/user/UserService';
import { User } from '../@types/user';
import { useToken } from '../hooks/useToken';
import { Api } from '../services/api/axios-config';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuthContext {
  user: User | null;
  auth: boolean;
  loadingAuth: boolean;
  handleLogin(email: string): Promise<void>;
  handleRegister(email: string): Promise<void>;
  handleLogout(): Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
  const { saveToken, getToken, deleteToken } = useToken();

  useEffect(() => {
    (async () => {
      const token = await getToken();

      if (token !== null) {
        Api.defaults.headers['userid'] = token;
        await UserService.details().then((response) => setUser(response));
        setLoadingAuth(false);
      } else return setLoadingAuth(false);
    })();
  }, []);

  const handleLogin = async (email: string) => {
    await UserService.auth({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      setLoadingAuth(false);
    });
  };

  const handleRegister = async (email: string) => {
    await UserService.create({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      setLoadingAuth(false);
    });
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingAuth,
        auth: !!user,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
