import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type Props = {
  children: React.ReactNode;
};

export function GuestRoute({
  children,
}: Props) {

   const { isAuthenticated } = useAuth();

  // si ya está autenticado
  if (isAuthenticated) {

    return <Navigate to="/profile" replace />;

  }

  // Si NO tiene token
  return children;

}