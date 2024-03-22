import App from '@/App';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

export const RootRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<App />} />)
  );
  return <RouterProvider router={router} />;
};
