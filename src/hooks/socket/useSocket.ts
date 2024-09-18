import { useAuthStore } from '@/stores/useAuthStore';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import { ChatMessage } from '../api/types/chat';
import { useChatRoomMessages } from '../api/useChat';

const MAX_ACK_TIME = 10000;
const INITIAL_RETRY = 3;

/**
 *
 * @param path 소켓 url path
 * @param chatRoomId 현재 접속한 채팅방의 id
 * @returns socket: 소켓 객체 | messages: 채팅방 메세지 | sendMessage: 메세지 보내는 함수|
 */
export const useSocket = (path: 'chat' = 'chat', chatRoomId: string) => {
  const token = useAuthStore((state) => state.accessToken);
  const { data: previousMessages } = useChatRoomMessages({
    chatRoomId,
  });

  const [messages, setMessages] = useState<ChatMessage[]>(
    previousMessages ? previousMessages.data : []
  );

  const socket = useMemo(() => {
    if (!token) return null;
    return io(`${import.meta.env.VITE_SOCKET_URL}`, {
      path: `/${path}`,
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
      ackTimeout: MAX_ACK_TIME,
      retries: INITIAL_RETRY,
      autoConnect: false,
      port: 5000,
    });
  }, [token, path]);

  useEffect(() => {
    if (!socket) return;
    socket.connect();
    socket.emit('join', chatRoomId);

    const handleReceiveMessage = (msg: ChatMessage[]) => {
      setMessages((prevMessages) => [...prevMessages, ...msg]);
    };

    socket.on('receive', handleReceiveMessage);

    return () => {
      socket.off('receive', handleReceiveMessage);
      socket.disconnect();
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

  return { socket, messages, sendMessage };
};
