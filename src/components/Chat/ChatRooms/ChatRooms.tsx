import React, { useState } from 'react';
import EditIcon from '@/icons/icon/EditIcon';
import { useChatRooms } from '@/hooks/api/useChat';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import ChatRoomsEdit from '../ChatRoomsEdit/ChatRoomsEdit';
import ChatRoomList from './ChatRoomList';
import styles from './ChatRooms.module.scss';

const ChatRooms = () => {
  const [isEdit, setIsEdit] = useState(false);
  const token = useAuthStore((state) => state.accessToken);
  const {push} = useRouter();

  const onClickRoute = (chatRoomId: string, storeName: string) => {
    push(`${chatRoomId}`);
  };
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
