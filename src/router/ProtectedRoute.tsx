import { Navigate, Outlet, useLoaderData } from 'react-router';

const ProtectedRoute = () => {
  const token = useLoaderData();

  return <>{token ? <Outlet /> : <Navigate to="/" replace={true} />}</>;
};

export default ProtectedRoute;
