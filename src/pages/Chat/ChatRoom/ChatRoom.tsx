import styles from './ChatRoom.module.scss';
import ArrowLeftTailIcon from '@/icons/icon/ArrowLeftTail';
import DotsVerticalIcon from '@/icons/icon/DotsVertical';
import { useLocation, useNavigate } from 'react-router';
import { useRef, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { UploadIcon, CameraIcon } from '@/icons/icon';
import { useChat } from '@/hooks/useChat';
import { useChatRoomMessages } from '@/hooks/api/useChat';
import ChatMessage from '@/components/Chat/ChatRoom/ChatMessage';

type ChatMessageType = 'TEXT' | 'IMAGE' | 'VIDEO';

const ChatRoom = () => {
  const senderUuid = useAuthStore((state) => state.uuid);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { chatRoomId, storeName } = state;

  const { data: chatRoomMessages } = useChatRoomMessages({ chatRoomId });

  console.log(chatRoomMessages);
  const chatMessageContent = useRef('');

  const { messages, sendMessage } = useChat(chatRoomId);

  const [chatMessageType, setChatMessageType] =
    useState<ChatMessageType>('TEXT');

  const handleSocketMessage = () => {
    sendMessage({
      chatRoomId,
      user: senderUuid,
      chatMessageType,
      chatMessageContent: chatMessageContent.current,
    });
  };

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
        {chatRoomMessages?.data.map((message) => (
          <ChatMessage
            key={message.chatMessageId}
            isSender={message.user.uuid === senderUuid}
            message={message.chatMessageContent}
            // time={message.createdAt}
            // imageUrl={message.imageUrl}
          />
        ))}
      </div>

      <div className={styles.ChatInputWrapper}>
        <CameraIcon className={styles.CameraIcon} width={24} height={24} />
        <div className={styles.ChatInputContent}>
          <textarea
            rows={1}
            className={styles.ChatInput}
            placeholder="메시지를 입력하세요"
            onChange={(e) => (chatMessageContent.current = e.target.value)}
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
