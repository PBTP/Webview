import styles from './ChatRoom.module.scss';
import ArrowLeftTailIcon from '@/icons/icon/ArrowLeftTail';
import DotsVerticalIcon from '@/icons/icon/DotsVertical';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { UploadIcon, CameraIcon } from '@/icons/icon';
import { useChat } from '@/hooks/useChat';
import ChatMessage from '@/components/Chat/ChatRoom/ChatMessage';

type ChatMessageType = 'TEXT' | 'IMAGE' | 'VIDEO';

const ChatRoom = () => {
  const senderUuid = useAuthStore((state) => state.uuid);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { chatRoomId, storeName } = state;

  const [chatMessageContent, setChatMessageContent] = useState('');

  const messageEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage } = useChat(chatRoomId);
  console.log(messages);

  const [chatMessageType, setChatMessageType] =
    useState<ChatMessageType>('TEXT');

  const adjustHeight = () => {
    if (textareaRef.current) {
      const scrollHeight = textareaRef.current.scrollHeight;
      const lineHeight = 29; // leading-[29px]와 일치
      const maxHeight = lineHeight * 2; // 최대 2줄
      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  };

  const handleSocketMessage = () => {
    sendMessage({
      chatRoomId,
      user: senderUuid,
      chatMessageType,
      chatMessageContent,
    });
    setChatMessageContent('');
  };

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <div className={styles.ChatRoomHeader}>
        <ArrowLeftTailIcon
          onClick={() => navigate('/chat-list')}
          width={24}
          height={24}
        />
        <div className={styles.ChatRoomTitle}> {storeName} </div>
        <DotsVerticalIcon width={24} height={24} />
      </div>
      <div className={styles.ChatRoomWrapper}>
        {messages.map((message) => (
          <ChatMessage
            key={message.chatMessageId}
            isSender={message.user.uuid === senderUuid}
            message={message.chatMessageContent}
            // time={message.createdAt}
            // imageUrl={message.imageUrl}
          />
        ))}
        <div ref={messageEndRef} />
      </div>

      <div className={styles.ChatInputWrapper}>
        <CameraIcon className={styles.CameraIcon} width={24} height={24} />
        <div className={styles.ChatInputContent}>
          <textarea
            ref={textareaRef}
            rows={1}
            className={styles.ChatInput}
            placeholder="메시지를 입력하세요"
            onChange={(e) => setChatMessageContent(e.target.value)}
          />
          <UploadIcon
            onClick={handleSocketMessage}
            className={styles.UploadIcon}
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
