import React from 'react';
import styles from './ChatItem.module.scss';
import { IChatItem } from '../types';
import { useNavigate } from 'react-router';

type ChatItemProps = {
  chatInfo: IChatItem;
};

const ChatItem = ({ chatInfo }: ChatItemProps) => {
  const { imgSrc, recentChat, roomId, storeName, lastDate, unviewedMsgCount } =
    chatInfo;
  const navigate = useNavigate();

  const handleChatItem = () => {
    navigate(`${roomId}`, { state: { roomId, storeName } });
  };

  return (
    <div onClick={handleChatItem} className={styles.ChatItemWrapper}>
      <div className={styles.ChatItemContainer}>
        <img src={imgSrc} className={styles.ChatImage} />
        <div className={styles.ChatContent}>
          <div className={styles.ChatTitle}>
            <span className={styles.ShopName}>{storeName}</span>
            <span className={styles.LastDate}>{lastDate}</span>
          </div>
          <div className={styles.ChatText}>{recentChat}</div>
        </div>
      </div>
      <div className={styles.ChatCount}>{unviewedMsgCount}</div>
    </div>
  );
};

export default ChatItem;
