import { requestAPI } from '@/utils/fetch';
import { ResChatRoom, ReqChatRoomMessages } from '../types/chat';

export const fetchChatRooms = async (): Promise<ResChatRoom[]> => {
  try {
    const { data } = await requestAPI().get('/v1/chat/room');
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const fetchChatRoomMessages = async ({
  chatRoomId,
  cursor = 0,
  limit = 20,
  next,
}: ReqChatRoomMessages): Promise<string[]> => {
  const { data } = await requestAPI().get(
    `/v1/chat/room/${chatRoomId}/message`,
    {
      chatRoomId,
      cursor,
      limit,
      next,
    }
  );
  return data;
};
