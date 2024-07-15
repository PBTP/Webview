import { Navigate, Outlet, useLoaderData } from 'react-router';

const ProtectedRoute = () => {
  const token = useLoaderData() as string;

  return (
    <>
      {token ? (
        <div>
          <div>token: {token}</div>
          <Outlet />
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export default ProtectedRoute;
