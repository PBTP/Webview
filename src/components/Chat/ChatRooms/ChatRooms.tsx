import React, { useState } from 'react';
import styles from './ChatRooms.module.scss';
import EditIcon from '@/icons/icon/EditIcon';
import { useNavigate } from 'react-router';
import ChatItemBase from '../ChatItemBase/ChatItemBase';
import { useChatRooms } from '@/hooks/api/useChat';
import ChatRoomsEdit from '../ChatRoomsEdit/ChatRoomsEdit';

const ChatRooms = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditIcon = () => {
    setIsEdit((prev) => !prev);
  };

  const { data: chatRoomsData } = useChatRooms();

  const navigate = useNavigate();

  const onClickRoute = (chatRoomId: string, storeName: string) => {
    navigate(`${chatRoomId}`, { state: { chatRoomId, storeName } });
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
