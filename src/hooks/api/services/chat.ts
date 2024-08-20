import { requestAPI } from '@/utils/fetch';
import { ResChatRoom } from '../types/chat';

export const fetchChatRooms = async (): Promise<ResChatRoom[]> => {
  try {
    const { data } = await requestAPI().get('/v1/chat/room');
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
