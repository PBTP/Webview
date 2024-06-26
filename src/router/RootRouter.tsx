import RootLayout from '@/components/Layout/RootLayout/RootLayout';
import DetailReservation from '@/pages/Reservation/Detail/DetailReservation';
import ReservationIndexPage from '@/pages/Reservation/Index/Index';
import ChatRoomPage from '@/pages/Chat/ChatRoom/ChatRoom';
import CharRoomsPage from '@/pages/Chat/ChatRooms/ChatRooms';
import PaymentPage from '@/pages/Payment/Payment/Payment';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { requestAPI } from '@/utils/fetch';

export const RootRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          element={<ProtectedRoute />}
          loader={async () => {
            const token = await requestAPI().get(
              'https://pokeapi.co/api/v2/pokemon/ditto'
            );
            return token;
          }}
        >
          <Route path="chat-list" element={<CharRoomsPage />} />
          <Route path="reservation" element={<ReservationIndexPage />} />
          <Route path="chat-list/:chatId" element={<ChatRoomPage />} />
          <Route
            path="reservation/:reservationId"
            element={<DetailReservation />}
          />
          <Route path="payment" element={<PaymentPage />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
