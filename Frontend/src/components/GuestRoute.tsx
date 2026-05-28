import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export function GuestRoute({
  children,
}: Props) {

  const token = localStorage.getItem('token');

  // si ya está autenticado
  if (token) {

    return <Navigate to="/profile" />;

  }

  // Si NO tiene token
  return children;

}