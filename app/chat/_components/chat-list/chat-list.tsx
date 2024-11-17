import EditIcon from '@/components/ui/icons/icon/EditIcon';
import { ChatRoom } from '@/hooks/api/types/chat';
import { useRouter } from 'next/navigation';
import React from 'react';
import ChatRoomItems from '../chat-item/chat-items';
import styles from './chat-list.module.scss';

interface ChatListProps {
  chatRoomsData: ChatRoom[];
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatList = ({ chatRoomsData, setIsEdit }: ChatListProps) => {
  const handleEditIcon = () => {
    setIsEdit((prev) => !prev);
  };
  const { push } = useRouter();

  const onClickRoute = (chatRoomId: number, storeName: string) => {
    push(`/chat/${chatRoomId}?storeName=${storeName}`);
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
        onItemClick={(chatRoomId: number, storeName: string) => {
          onClickRoute(chatRoomId, storeName || '');
        }}
      />
    </div>
  );
};

export default ChatList;
