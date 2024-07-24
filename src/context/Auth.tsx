import { ReactNode, createContext, useEffect, useState } from 'react';
import { UserService } from '../services/user/UserService';
import { User } from '../@types/user';
import { useToken } from '../hooks/useToken';
import { Api } from '../services/api/axios-config';
import { Alert } from 'react-native';

interface IAuthContext {
  user: User | null;
  auth: boolean;
  loading: boolean;
  handleLogin(email: string): Promise<void>;
  handleRegister(email: string): Promise<void>;
  handleLogout(): Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { saveToken, getToken, deleteToken } = useToken();

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token === null) return setLoading(false);
      Api.defaults.headers['userid'] = token;
      await UserService.details().then((response) => setUser(response));
      setLoading(false);
    })();
  }, []);

  const handleLogin = async (email: string) => {
    await UserService.auth({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      Alert.alert('Bem-vindo de volta! Login realizado com sucesso.');
      setLoading(false);
    });
  };

  const handleRegister = async (email: string) => {
    await UserService.create({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      Alert.alert('Cadastro realizado com sucesso! Seja Bem-vindo');
      setLoading(false);
    });
  };

  const handleLogout = async () => {
    await deleteToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
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
