import React, { useState } from 'react';
import ChatItem from './ChatItem';
import { IChatItem } from '../types';
import styles from './ChatRooms.module.scss';
import EditIcon from '@/icons/icon/EditIcon';
import ChatRoomsEdit from '../ChatRoomsEdit/ChatRoomsEdit';

const ChatRooms = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditIcon = () => {
    setIsEdit((prev) => !prev);
  };

  console.log(isEdit);

  const mockChatRooms = [
    {
      imgSrc:
        'https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp',
      roomId: '1a2',
      storeName: '개신남 10호점',
      lastDate: '2024-03-31',
      recentChat: '아하 네 알겠습니다 ㅎㅎ',
      unViewedMsgCount: 2,
    },
    {
      imgSrc:
        'https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp',
      roomId: '1a3',
      storeName: '개신남 10호점',
      lastDate: '2024-03-31',
      recentChat: '아하 네 알겠습니다 ㅎㅎ',
      unViewedMsgCount: 2,
    },
    {
      imgSrc:
        'https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp',
      roomId: '1a4',
      storeName: '개신남 10호점',
      lastDate: '2024-03-31',
      recentChat: '아하 네 알겠습니다 ㅎㅎ',
      unViewedMsgCount: 2,
    },
  ];
  return (
    <>
      {isEdit ? (
        <ChatRoomsEdit chatData={mockChatRooms} setIsEdit={setIsEdit} />
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
          <div>
            {mockChatRooms.map((chatInfo: IChatItem) => (
              <ChatItem key={chatInfo.roomId} chatInfo={chatInfo}>
                <ChatItem.ChatItemContent chatInfo={chatInfo} />
                <ChatItem.ViewCount
                  unViewedMsgCount={chatInfo.unViewedMsgCount}
                />
              </ChatItem>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatRooms;
