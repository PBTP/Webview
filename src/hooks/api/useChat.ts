import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { fetchChatRoomMessages, fetchChatRooms } from './services/chat';
import { ReqChatRoomMessages } from './types/chat';
import { chatKeys } from './keys/chat';

export const useChatRooms = (token: string) => {
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
