import React from 'react';
import { IChatItem } from '../types';
import ArrowLeftTailIcon from '@/icons/icon/ArrowLeftTail';
import ChatItem from '../ChatRooms/ChatItem';

import styles from './ChatRoomsEdit.module.scss';

type ChatRoomsEditProps = {
  setIsEdit: React.Dispatch<boolean>;
  chatData: IChatItem[];
};

const ChatRoomsEdit = ({ setIsEdit, chatData }: ChatRoomsEditProps) => {
  return (
    <div className={styles.ChatRoomsEditWrapper}>
      <div className={styles.ChatRoomsEditHeader}>
        <ArrowLeftTailIcon
          onClick={() => setIsEdit(false)}
          width={24}
          height={24}
          className={styles.BackIcon}
        />
        <div className={styles.ChatRoomsEditTitle}> 편집 </div>
        <div className={styles.ChatRoomsEditSubTitle}>전체 선택</div>
      </div>
      <div>
        {chatData.map((chatInfo: IChatItem) => (
          <ChatItem
            key={`${chatInfo.roomId}-chatRoomsEdit`}
            chatInfo={chatInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatRoomsEdit;
