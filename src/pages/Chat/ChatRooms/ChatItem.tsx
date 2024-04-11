import React, { ReactNode } from 'react';
import styles from './ChatItem.module.scss';
import { IChatItem } from '../types';
import { useNavigate } from 'react-router-dom';
import RadioActiveIcon from '@/icons/icon/RadioActiveIcon';
import RadioIcon from '@/icons/icon/RadioIcon';

type ChatItemProps = {
  chatInfo: IChatItem;
  children?: ReactNode;
};

const ChatItem = ({ chatInfo, children }: ChatItemProps) => {
  const { roomId, storeName } = chatInfo;
  const navigate = useNavigate();

  const handleChatItem = () => {
    navigate(`${roomId}`, { state: { roomId, storeName } });
  };

  return (
    <div onClick={handleChatItem} className={styles.ChatItemWrapper}>
      {children}
    </div>
  );
};

const ChatItemContent = ({ chatInfo }: ChatItemProps) => {
  const { imgSrc, storeName, lastDate, recentChat } = chatInfo;
  return (
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
  );
};

const ViewCount = ({ unViewedMsgCount }: { unViewedMsgCount: number }) => {
  return <div className={styles.ChatCount}>{unViewedMsgCount}</div>;
};

const EditButton = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={styles.RadioIcon}>
      {isActive ? (
        <RadioActiveIcon width={20} height={20} />
      ) : (
        <RadioIcon width={20} height={20} />
      )}
    </div>
  );
};

ChatItem.ChatItemContent = ChatItemContent;
ChatItem.ViewCount = ViewCount;
ChatItem.EditButton = EditButton;

export default ChatItem;
