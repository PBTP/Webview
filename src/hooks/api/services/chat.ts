import { requestAPI } from '@/utils/fetch';
import { ChatMessages, ChatRoom, ReqChatRoomMessages } from '../types/chat';

export const fetchChatRooms = async (): Promise<ChatRoom[]> => {
  const { data } = await requestAPI().get('/v1/chat/room');
  return data;
};

export const fetchChatRoomMessages = async ({
  chatRoomId,
  cursor = 0,
  limit = 20,
  next,
}: ReqChatRoomMessages): Promise<ChatMessages> => {
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
