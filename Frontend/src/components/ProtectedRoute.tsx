import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Componente de ruta protegida que verifica si el usuario está autenticado antes de renderizar el componente hijo
type Props = {
  children: React.ReactNode;
};

// Si el usuario no está autenticado, redirige a la página de login
export function ProtectedRoute({
  children,
}: Props) {

  const { isAuthenticated } = useAuth(); // Obtenemos el estado de autenticación del contexto

  
  // si no hay token
  if (!isAuthenticated) {

    return <Navigate to="/login" replace />;

  }

  // Si sí hay token
  return children;

}