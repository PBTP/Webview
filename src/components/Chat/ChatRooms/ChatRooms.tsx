import { useChatRooms } from '@/hooks/api/useChat';
import { useAuthStore } from '@/stores/useAuthStore';
import { useState } from 'react';
import ChatRoomsEdit from '../ChatRoomsEdit/ChatRoomsEdit';
import ChatRoomList from './ChatRoomList';
import styles from './ChatRooms.module.scss';

const ChatRooms = () => {
  const [isEdit, setIsEdit] = useState(false);

  const token = useAuthStore((state) => state.accessToken);
  const { data: chatRoomsData } = useChatRooms(token ?? '');

  return (
    <div className={styles.ChatRoomsWrapper}>
      {isEdit ? (
        <ChatRoomsEdit chatRoomsData={chatRoomsData} setIsEdit={setIsEdit} />
      ) : (
        <ChatRoomList chatRoomsData={chatRoomsData} setIsEdit={setIsEdit} />
      )}
    </div>
  );
};

export default ChatRooms;
