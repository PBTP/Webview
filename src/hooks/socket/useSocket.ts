import { useAuthStore } from '@/stores/useAuthStore';
import { useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (path: 'chat' = 'chat') => {
  const token = useAuthStore((state) => state.accessToken);

  const socket = useMemo(() => {
    if (!token) return null;

    return io(`${import.meta.env.VITE_SOCKET_URL}`, {
      path: `/${path}`,
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [token, path]);

  useEffect(() => {
    if (!socket) return;

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return socket;
};
