import RadioActiveIcon from '@/components/ui/icons/icon/RadioActiveIcon';
import RadioIcon from '@/components/ui/icons/icon/RadioIcon';
import { ErrorLogoIcon } from '@/components/ui/icons/logo';
import { ChatRoom } from '@/hooks/api/types/chat';
import { formatChatDate } from '@/utils/format';
import { ReactNode, createContext } from 'react';
import styles from './chat-item.module.scss';

type ChatItemProps = {
  children?: ReactNode;
  onClick?: () => void;
};

type ChatItemContentProps = {
  chatInfo: ChatRoom;
  onClick?: () => void;
};

const ChatItemContext = createContext('');

const ChatItem = ({ children, onClick }: ChatItemProps) => {
  return (
    <ChatItemContext.Provider value="">
      <div onClick={onClick} className={styles.ChatItemWrapper}>
        {children}
      </div>
    </ChatItemContext.Provider>
  );
};

const ChatItemContent = ({ chatInfo, onClick }: ChatItemContentProps) => {
  const { lastMessage, chatRoomName } = chatInfo;
  const { createdAt: lastDate, chatMessageContent: recentChat } = lastMessage;
  const lastDateString = formatChatDate(lastDate);

  return (
    <div className={styles.ChatItemContainer} onClick={onClick}>
      <ErrorLogoIcon width={60} height={60} className={styles.ChatImage} />
      <div className={styles.ChatContent}>
        <div className={styles.ChatTitle}>
          <span className={styles.ShopName}>{chatRoomName}</span>
          <span className={styles.LastDate}>{lastDateString}</span>
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

ChatItem.ChatItemContent = ChatItemContent;
ChatItem.UnViewCount = UnViewCount;
ChatItem.EditButton = EditButton;

export default ChatItem;
