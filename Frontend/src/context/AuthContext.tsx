import {createContext,useContext,useEffect,useState} from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({
  children,
}: Props) {

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true); // Para manejar el estado de carga inicial da tiempo a que se verifique la sesión
                                                
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );

  // Verificar sesión al cargar la app
  
  useEffect(() => {

  const storedUser = localStorage.getItem('user');

  if (storedUser) {

    setUser(JSON.parse(storedUser));

  }

  setLoading(false); //


}, []);

  // Login global

  const login = (
    token: string,
    user: User
  ) => {

    localStorage.setItem('token', token);

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );

    setToken(token);

    setUser(user);

  };

  // Logout global
  const logout = () => {

    localStorage.removeItem('token');

    localStorage.removeItem('user');

    setToken(null);

    setUser(null);

  };

  return (
    // Proveer el contexto de autenticación a toda la app
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}

// custom hook para usar el contexto de autenticación
export const useAuth = () =>
  useContext(AuthContext);