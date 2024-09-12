import { ReqChatRoomMessages } from '../types/chat';

export const chatKeys = {
  chatMessagesKey: (params: ReqChatRoomMessages) =>
    ['chatRoomMessage', params] as const,
};
