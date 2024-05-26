import { IChatItem } from '@/pages/Chat/types';
import { requestAPI } from '@/utils/fetch';
import { useQuery } from '@tanstack/react-query';

const fetchChatRooms = async (): Promise<IChatItem[]> => {
  const { data } = await requestAPI().get('/chatRooms');
  return data;
};

const useChatApi = () => {
  const getChatRooms = (): IChatItem[] => {
    const { data } = useQuery({
      queryKey: ['getChatRooms'],
      queryFn: fetchChatRooms,
    });
    return data!;
  };

  return {
    getChatRooms,
  };
};

export default useChatApi;
