import RootLayout from '@/components/Layout/RootLayout/RootLayout';
import DetailReservation from '@/pages/Reservation/Detail/DetailReservation';
import ReservationIndexPage from '@/pages/Reservation/Index/Index';
import ChatRoomPage from '@/pages/Chat/ChatRoom/ChatRoom';
import ChatRoomsPage from '@/pages/Chat/ChatRooms/ChatRooms';
import PaymentPage from '@/pages/Payment/Payment/Payment';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import LocationPage from '@/pages/Location/Location/Location';
import ReviewPage from '@/pages/Review/Review';
import VersionPage from '@/pages/Version/Version';

export const RootRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="chat-list" element={<ChatRoomsPage />} />
        <Route path="reservation" element={<ReservationIndexPage />} />
        <Route path="chat-list/:chatRoomId" element={<ChatRoomPage />} />
        <Route
          path="reservation/:reservationId"
          element={<DetailReservation />}
        />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="location" element={<LocationPage />} />
        <Route path="version" element={<VersionPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
