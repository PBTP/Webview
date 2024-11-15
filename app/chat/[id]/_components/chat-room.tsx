'use client';
import { CameraIcon, UploadIcon } from '@/components/ui/icons/icon';
import ArrowLeftTailIcon from '@/components/ui/icons/icon/ArrowLeftTail';
import DotsVerticalIcon from '@/components/ui/icons/icon/DotsVertical';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useChat } from '../_hooks/use-chat';
import ChatMessage from './chat-message';
import styles from './chat-room.module.scss';

interface ChatRoomProps {
  chatRoomId: string;
  storeName: string;
}

const ChatRoom = ({ chatRoomId, storeName }: ChatRoomProps) => {
  const senderUuid = useAuthStore((state) => state.uuid);
  const { push } = useRouter();

  const [chatMessageContent, setChatMessageContent] = useState('');

  const messageEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage } = useChat(chatRoomId);

  const chatMessageType = 'TEXT';

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
          onClick={() => push('/chat-list')}
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
