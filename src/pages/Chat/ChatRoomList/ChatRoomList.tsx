import React from 'react';
import ChatItem from './ChatItem';
import { IChatItem } from '../types';
import styles from './ChatRoomList.module.scss';
import EditIcon from '@/icons/icon/EditIcon';

const ChatRoomList = () => {
  const mockChatRoomList = [
    {
      imgSrc:
        'https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp',
      roomId: '1a',
      storeName: '개신남 10호점',
      lastDate: '2024-03-31',
      recentChat: '아하 네 알겠습니다 ㅎㅎ',
      unviewedMsgCount: 2,
    },
    {
      imgSrc:
        'https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp',
      roomId: '1a',
      storeName: '개신남 10호점',
      lastDate: '2024-03-31',
      recentChat: '아하 네 알겠습니다 ㅎㅎ',
      unviewedMsgCount: 2,
    },
    {
      imgSrc:
        'https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp',
      roomId: '1a',
      storeName: '개신남 10호점',
      lastDate: '2024-03-31',
      recentChat: '아하 네 알겠습니다 ㅎㅎ',
      unviewedMsgCount: 2,
    },
  ];
  return (
    <div className={styles.ChatRoomListWrapper}>
      <div className={styles.ChatRoomListHeader}>
        <div>채팅</div>
        <EditIcon className={styles.EditIcon} width={24} height={24} />
      </div>
      <div>
        {mockChatRoomList.map((chatInfo: IChatItem) => (
          <ChatItem chatInfo={chatInfo} />
        ))}
      </div>
    </div>
  );
};

export default ChatRoomList;
