import { useAuthStore } from '@/stores/useAuthStore';
import { useMemo } from 'react';
import { io } from 'socket.io-client';

const MAX_ACK_TIME = 10000;
const INITIAL_RETRY = 3;

/**
 *
 * @param path 소켓 url path
 * @returns socket: 소켓 객체
 */
export const useSocket = () => {
  const token = useAuthStore((state) => state.accessToken);

  const socket = useMemo(() => {
    if (!token) return null;
    console.log(token);
    return io(`${import.meta.env.VITE_SOCKET_URL}`, {
      extraHeaders: {
        authorization: `Bearer ${token}`,
      },
      auth: { authorization: token },
      ackTimeout: MAX_ACK_TIME,
      retries: INITIAL_RETRY,
      withCredentials: true,
      transports: ['websocket', 'polling'],
    });
  }, [token]);

  return { socket };
};
