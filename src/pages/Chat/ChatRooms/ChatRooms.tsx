import React, { useState } from 'react';
import { IChatItem } from '../types';
import styles from './ChatRooms.module.scss';
import EditIcon from '@/icons/icon/EditIcon';
import ChatRoomsEdit from '../ChatRoomsEdit/ChatRoomsEdit';
import { useNavigate } from 'react-router';
import ChatItemBase from './ChatItemBase';
import useChatApi from '@/hooks/api/useChat';

const ChatRooms = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditIcon = () => {
    setIsEdit((prev) => !prev);
  };

  const { getChatRooms } = useChatApi();
  const chatData = getChatRooms();

  const navigate = useNavigate();

  const onClickRoute = (roomId: string, storeName: string) => {
    navigate(`${roomId}`, { state: { roomId, storeName } });
  };

  return (
    <>
      {isEdit ? (
        <ChatRoomsEdit chatData={chatData} setIsEdit={setIsEdit} />
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
          {chatData
            ? chatData.map((chatInfo: IChatItem) => (
                <ChatItemBase key={chatInfo.roomId}>
                  <ChatItemBase.ChatItemContent
                    onClick={() =>
                      onClickRoute(chatInfo.roomId, chatInfo.storeName)
                    }
                    chatInfo={chatInfo}
                  />
                  <ChatItemBase.UnViewCount
                    unViewedMsgCount={chatInfo.unViewedMsgCount}
                  />
                </ChatItemBase>
              ))
            : ''}
        </div>
      )}
    </>
  );
};

export default ChatRooms;
