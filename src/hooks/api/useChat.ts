import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { fetchChatRoomMessages, fetchChatRooms } from './services/chat';
import { ReqChatRoomMessages } from './types/chat';
import { useAuthStore } from '@/stores/useAuthStore';
import { chatKeys } from './keys/chat';

export const useChatRooms = () => {
  const token = useAuthStore((state) => state.accessToken);
  return useSuspenseQuery({
    queryKey: ['chatRooms', token],
    queryFn: () => {
      const res = fetchChatRooms();
      return res;
    },
    retry: 0,
  });
};

export const useChatRoomMessages = (params: ReqChatRoomMessages) => {
  return useQuery({
    queryKey: chatKeys.chatMessagesKey(params),
    queryFn: async ({ queryKey }) => {
      const queryKeyParamsIndex = 1;
      const reqChatRoomMessages = queryKey[queryKeyParamsIndex];
      const res = await fetchChatRoomMessages(reqChatRoomMessages);
      return res;
    },
  });
};
