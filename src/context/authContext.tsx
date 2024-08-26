import axios from 'axios';
import { createContext, useEffect, useState, ReactNode } from 'react';

// Definindo o tipo para o usuário. Ajuste conforme necessário para o seu caso de uso.
interface User {
  id: string;
  username: string;
  // Adicione outros campos conforme necessário
}

// Definindo o tipo para o contexto de autenticação
export interface AuthContextType {
  currentUser: User | null;
  login: (inputs: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

// Criando o contexto com valores padrão vazios
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Definindo o tipo para as props do AuthContextProvider
interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem('user') || 'null')
  );

  const login = async (inputs: { username: string; password: string }) => {
    try {
      const res = await axios.post<User>('http://localhost:8800/api/auth/login', inputs, {
        withCredentials: true,
      });
      setCurrentUser(res.data);
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:8800/api/auth/logout', {}, {
        withCredentials: true,
      });
      localStorage.removeItem('user');
      setCurrentUser(null);
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('user');
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
