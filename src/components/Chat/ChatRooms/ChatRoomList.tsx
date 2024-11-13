import { ChatRoom } from '@/hooks/api/types/chat';
import EditIcon from '@/icons/icon/EditIcon';
import React from 'react';
import ChatRoomItems from './ChatRoomItems';
import styles from './ChatRoomList.module.scss';
import { useRouter } from 'next/router';

interface ChatRoomListProps {
  chatRoomsData: ChatRoom[];
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatRoomList = ({ chatRoomsData, setIsEdit }: ChatRoomListProps) => {
  const handleEditIcon = () => {
    setIsEdit((prev) => !prev);
  };
  const router = useRouter();
  const onClickRoute = (chatRoomId: number, storeName: string) => {
    router.push(`${chatRoomId}`);
  };

  return (
    <div>
      <div className={styles.ChatRoomsHeader}>
        <div>채팅</div>
        <EditIcon
          className={styles.EditIcon}
          width={24}
          height={24}
          onClick={handleEditIcon}
        />
      </div>
      <ChatRoomItems
        chatRoomsData={chatRoomsData}
        onItemClick={(chatRoomId: number, storeName?: string) => {
          onClickRoute(chatRoomId, storeName || '');
        }}
      />
    </div>
  );
};

export default ChatRoomList;
