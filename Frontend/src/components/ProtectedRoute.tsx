import { Navigate } from 'react-router-dom';

// Componente de ruta protegida que verifica si el usuario está autenticado antes de renderizar el componente hijo
type Props = {
  children: React.ReactNode;
};

// Si el usuario no está autenticado, redirige a la página de login
export function ProtectedRoute({
  children,
}: Props) {

  const token = localStorage.getItem('token');

  
  // Si NO hay token
  if (!token) {

    return <Navigate to="/login" />;

  }

  // Si sí hay token
  return children;

}