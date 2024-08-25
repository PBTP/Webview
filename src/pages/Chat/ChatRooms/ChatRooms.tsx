import React, { useState } from 'react';
import styles from './ChatRooms.module.scss';
import EditIcon from '@/icons/icon/EditIcon';
import ChatRoomsEdit from '../ChatRoomsEdit/ChatRoomsEdit';
import { useNavigate } from 'react-router';
import ChatItemBase from './ChatItemBase';
import { useChatRooms } from '@/hooks/api/useChat';

const ChatRooms = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditIcon = () => {
    setIsEdit((prev) => !prev);
  };

  const { data: chatRoomDatas } = useChatRooms();

  const navigate = useNavigate();

  const onClickRoute = (roomId: string, storeName: string) => {
    navigate(`${roomId}`, { state: { roomId, storeName } });
  };

  return (
    <>
      {isEdit ? (
        <ChatRoomsEdit chatData={chatRoomDatas} setIsEdit={setIsEdit} />
      ) : (
        <div className={styles.ChatRoomsWrapper}>
          <div className={styles.ChatRoomsHeader}>
            <div>채팅</div>
            <EditIcon
              className={styles.EditIcon}
              width={24}
              height={24}
              onClick={handleEditIcon}
            />
          </div>
          {chatRoomDatas &&
            chatRoomDatas.map((chatInfo) => (
              <ChatItemBase key={chatInfo.chatRoomId}>
                <ChatItemBase.ChatItemContent
                  onClick={() =>
                    onClickRoute(chatInfo.chatRoomId, chatInfo.chatRoomName)
                  }
                  chatInfo={chatInfo}
                />
                <ChatItemBase.UnViewCount
                  unViewedMsgCount={chatInfo.unViewedMsgCount}
                />
              </ChatItemBase>
            ))}
        </div>
      )}
    </>
  );
};

export default ChatRooms;
