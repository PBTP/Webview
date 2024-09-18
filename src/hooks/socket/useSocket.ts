import { useAuthStore } from '@/stores/useAuthStore';
import { useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';

const MAX_ACK_TIME = 10000;
const INITIAL_RETRY = 3;

/**
 *
 * @param path 소켓 url path
 * @returns socket: 소켓 객체
 */
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
      port: 5000,
    });
  }, [token, path]);

  useEffect(() => {
    return () => {
      if (socket) socket.disconnect();
    };
  }, [socket]);

  return { socket };
};
