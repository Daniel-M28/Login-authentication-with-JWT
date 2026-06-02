import { Navigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

type Props = {
  children: React.ReactNode;
};

export function AdminRoute({
  children,
}: Props) {

  const { user, loading} = useAuth();

  if (loading) {

  return <p>Loading...</p>;

}

  // Si NO hay usuario
  if (!user) {

    return <Navigate to="/login" replace />;

  }

  // Si NO es admin
console.log(user);
  if (user.role !== 'admin') {

    return <Navigate to="/profile" replace />;

  }

  // Si es admin
  return children;

}