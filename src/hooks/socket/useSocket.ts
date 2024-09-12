import { useAuthStore } from '@/stores/useAuthStore';
import { useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';
import { ChatMessage } from '../api/types/chat';

const MAX_ACK_TIME = 10000;
const INITIAL_RETRY = 3;

export const useSocket = (path: 'chat' = 'chat') => {
  const token = useAuthStore((state) => state.accessToken);

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
    });
  }, [token, path]);

  useEffect(() => {
    if (!socket) return;

    socket.connect();

    return () => {
      socket.off('receive');
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = (message: object, senderUuid: string) => {
    if (socket) {
      const socketUniqueId = `${socket.id}-${senderUuid}`;
      socket.emit('send', message, socketUniqueId);
    }
  };

  const onMessage = (getMessage: (message: ChatMessage[]) => void) => {
    if (socket) socket.on('receive', getMessage);
  };

  const joinRoom = ({ roomId }: { roomId: string }) => {
    if (socket) socket.emit('join', roomId);
  };

  return { socket, sendMessage, onMessage, joinRoom };
};
