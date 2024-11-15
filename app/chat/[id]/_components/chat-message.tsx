import styles from './chat-message.module.scss';

interface ChatMessageProps {
  isSender: boolean;
  message: string;
  time?: string;
  imageUrl?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  isSender,
  message,
  time,
  imageUrl,
}) => {
  const wrapperClass = isSender ? styles.Sender : styles.Receiver;
  const shouldDisplayImage = !isSender && imageUrl;

  return (
    <div className={`${styles.ChatWrapper} ${wrapperClass}`}>
      {shouldDisplayImage && (
        <img src={imageUrl} className={styles.ChatImage} alt="profile-image" />
      )}
      <div className={styles.ChatContainer}>
        <div className={`${styles.ChatContent} ${wrapperClass}`}>
          <div className={`${styles.Chat} ${wrapperClass}`}>{message}</div>
          <div className={styles.Date}>{time}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
