import { Suspense } from 'react';
import ChatRoom from './ChatRoom';
import LoadingSpinner from '@/pages/Loading/LoadingSpinner';

const ChatRoomPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ChatRoom />
    </Suspense>
  );
};

export default ChatRoomPage;
