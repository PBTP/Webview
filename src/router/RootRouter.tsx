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

export const RootRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="chat-list" element={<CharRoomsPage />} />
        <Route path="reservation" element={<ReservationIndexPage />} />
        <Route path="chat-list/*" element={<ChatRoomPage />} />
        <Route path="reservation/*" element={<DetailReservation />} />
        <Route path="payment" element={<PaymentPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
