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
import Location from '@/pages/Location/Location/Location';
import ReviewPage from '@/pages/Review/Review';
import { setUserAuth } from '@/stores/useAuthStore';

export const RootRouter = () => {
  const handleIosWebviewToken = (token: string, uuid: string) => {
    if (token) setUserAuth(token, uuid);
  };

  window.iOSToJavaScript = handleIosWebviewToken;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="chat-list" element={<CharRoomsPage />} />
        <Route path="reservation" element={<ReservationIndexPage />} />
        <Route path="chat-list/:chatRoomId" element={<ChatRoomPage />} />
        <Route
          path="reservation/:reservationId"
          element={<DetailReservation />}
        />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="location" element={<Location />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
