import { useCallback, useEffect, useState } from 'react';
import { useChatRoomMessages } from './api/useChat';
import { ChatMessage } from './api/types/chat';
import { useSocket } from './socket/useSocket';

/**
 *
 * @param chatRoomId 현재 접속한 채팅방의 id
 * @returns messages: 채팅방 메세지 | sendMessage: 메세지 보내는 함수
 */
export const useChat = (chatRoomId: string) => {
  const { socket } = useSocket();
  const { data: previousMessages } = useChatRoomMessages({
    chatRoomId,
  });

  const [messages, setMessages] = useState<ChatMessage[]>(
    previousMessages?.data || []
  );

  useEffect(() => {
    if (!socket) return;
    socket.emit('join', chatRoomId);

    const handleReceiveMessage = (msg: ChatMessage[]) => {
      setMessages((prevMessages) => [...prevMessages, ...msg]);
    };

    socket.on('receive', handleReceiveMessage);

    return () => {
      socket.off('receive', handleReceiveMessage);
    };
  }, [chatRoomId, socket]);

  const sendMessage = useCallback(
    (message: object, senderUuid: string) => {
      if (socket) {
        const socketUniqueId = `${socket.id}-${senderUuid}`;
        socket.emit('send', message, socketUniqueId);
      }
    },
    [socket]
  );

  return { messages, sendMessage };
};
