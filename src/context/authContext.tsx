import { ReactNode, createContext } from 'react';

interface IAuthContext {}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
