import App from '@/App';
import RootLayout from '@/components/Layout/RootLayout/RootLayout';
import DetailReservation from '@/pages/Rservation/DetatilReservation/DetailReservation';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

export const RootRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="reservation" element={<App />} />
        <Route path="reservation/*" element={<DetailReservation />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
