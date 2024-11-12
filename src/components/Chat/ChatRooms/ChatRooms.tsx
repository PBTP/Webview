import React, { useState } from 'react';
import styles from './ChatRooms.module.scss';
import EditIcon from '@/icons/icon/EditIcon';
import { useChatRooms } from '@/hooks/api/useChat';
import ChatRoomsEdit from '../ChatRoomsEdit/ChatRoomsEdit';
import ChatItemBase from './ChatItemBase/ChatItemBase';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';

const ChatRooms = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditIcon = () => {
    setIsEdit((prev) => !prev);
  };

  const token = useAuthStore((state) => state.accessToken);

  const { data: chatRoomsData } = useChatRooms(token);

  const {push} = useRouter();

  const onClickRoute = (chatRoomId: string, storeName: string) => {
    push(`${chatRoomId}`);
  };

  return (
    <div className={styles.ChatRoomsWrapper}>
      {isEdit ? (
        <ChatRoomsEdit chatRoomsData={chatRoomsData} setIsEdit={setIsEdit} />
      ) : (
        <>
          <div className={styles.ChatRoomsHeader}>
            <div>채팅</div>
            <EditIcon
              className={styles.EditIcon}
              width={24}
              height={24}
              onClick={handleEditIcon}
            />
          </div>
          {chatRoomsData.map((chatInfo) => (
            <ChatItemBase key={chatInfo.chatRoomId}>
              <ChatItemBase.ChatItemContent
                onClick={() =>
                  onClickRoute(chatInfo.chatRoomId, chatInfo.chatRoomName)
                }
                chatInfo={chatInfo}
              />
              {chatInfo?.unViewedMsgCount > 0 && (
                <ChatItemBase.UnViewCount
                  unViewedMsgCount={chatInfo.unViewedMsgCount}
                />
              )}
            </ChatItemBase>
          ))}
        </>
      )}
    </div>
  );
};

export default ChatRooms;
