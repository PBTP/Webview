import { useTokenStore } from '@/stores/useTokenStore';
import { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (path: 'chat' = 'chat') => {
  const token = useTokenStore((state) => state.accessToken);

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
