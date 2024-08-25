import { useAuthStore } from '@/stores/useAuthStore';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const token = useAuthStore((state) => state.accessToken);

  return <>{token ? <Outlet /> : <Navigate to="/" replace={true} />}</>;
};

export default ProtectedRoute;
