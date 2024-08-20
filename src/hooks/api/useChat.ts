import { useQuery } from '@tanstack/react-query';
import { fetchChatRooms } from './services/chat';

export const useChatRooms = () => {
  return useQuery({
    queryKey: ['chatRooms'],
    queryFn: () => {
      const res = fetchChatRooms();
      return res;
    },
  });
};
