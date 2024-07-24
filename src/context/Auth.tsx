import { ReactNode, createContext, useEffect, useState } from 'react';
import { UserService } from '../services/user/UserService';
import { User } from '../@types/user';
import { useToken } from '../hooks/useToken';
import { Api } from '../services/api/axios-config';

interface IAuthContext {
  user: User | null;
  auth: boolean;
  loading: boolean;
  handleLogin(email: string): Promise<void>;
  handleRegister(email: string): Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { saveToken, getToken } = useToken();

  useEffect(() => {
    getUserLocalStorage();
  }, []);

  const getUserLocalStorage = async () => {
    const token = await getToken();
    if (token) {
      Api.defaults.headers['userid'] = token;
      const details = await UserService.details();
      setUser(details);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const handleLogin = async (email: string) => {
    await UserService.auth({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      alert('Bem-vindo de volta! Login realizado com sucesso.');
      setLoading(false);
    });
  };

  const handleRegister = async (email: string) => {
    await UserService.create({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      alert('Cadastro realizado com sucesso! Seja Bem-vindo');
      setLoading(false);
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, auth: !!user, handleLogin, handleRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};
