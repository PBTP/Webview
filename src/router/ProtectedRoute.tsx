import { useTokenStore } from '@/stores/useTokenStore';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const token = useTokenStore((state) => state.accessToken);

  return <>{token ? <Outlet /> : <Navigate to="/" replace={true} />}</>;
};

export default ProtectedRoute;
