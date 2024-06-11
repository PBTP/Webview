import React, { ReactNode, createContext } from 'react';
import styles from './ChatItemBase.module.scss';
import { IChatItem } from '../types';
import RadioActiveIcon from '@/icons/icon/RadioActiveIcon';
import RadioIcon from '@/icons/icon/RadioIcon';

type ChatItemBaseProps = {
  children?: ReactNode;
  onClick?: () => void;
};

type ChatItemContentProps = {
  chatInfo: IChatItem;
  onClick?: () => void;
};

const ChatItemContext = createContext('');

const ChatItemBase = ({ children, onClick }: ChatItemBaseProps) => {
  return (
    <ChatItemContext.Provider value="">
      <div onClick={onClick} className={styles.ChatItemWrapper}>
        {children}
      </div>
    </ChatItemContext.Provider>
  );
};

const ChatItemContent = ({ chatInfo, onClick }: ChatItemContentProps) => {
  const { imgSrc, storeName, lastDate, recentChat } = chatInfo;

  return (
    <div className={styles.ChatItemContainer} onClick={onClick}>
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

const UnViewCount = ({ unViewedMsgCount }: { unViewedMsgCount: number }) => {
  return <div className={styles.UnViewCount}>{unViewedMsgCount}</div>;
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

ChatItemBase.ChatItemContent = ChatItemContent;
ChatItemBase.UnViewCount = UnViewCount;
ChatItemBase.EditButton = EditButton;

export default ChatItemBase;
