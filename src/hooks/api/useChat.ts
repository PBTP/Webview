import { useQuery } from '@tanstack/react-query';
import { fetchChatRoomMessages, fetchChatRooms } from './services/chat';
import { ReqChatRoomMessages } from './types/chat';
import { useAuthStore } from '@/stores/useAuthStore';

export const useChatRooms = () => {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ['chatRooms', token],
    queryFn: () => {
      const res = fetchChatRooms();
      return res;
    },
    enabled: !!token,
  });
};

export const useChatRoomMessages = ({
  chatRoomId,
  cursor,
  limit,
  next,
}: ReqChatRoomMessages) => {
  return useQuery({
    queryKey: ['chatRoomMessage', { chatRoomId, cursor, limit, next }] as const,
    queryFn: async ({ queryKey }) => {
      const reqChatRoomMessages = queryKey[1];
      const res = await fetchChatRoomMessages(reqChatRoomMessages);
      return res;
    },
    initialData: [''],
  });
};
