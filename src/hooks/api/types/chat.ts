export interface ChatRoom {
  chatRoomId: string;
  tsid: string;
  chatRoomName: string;
  inviteUser: {
    name: string;
    imgSrc: string;
  };
  unViewedMsgCount: number;
  lastMessage: {
    chatRoomId: 0;
    chatMessageId: 0;
    senderUuid: string;
    chatMessageType: string;
    user: string;
    chatMessageContent: string;
    lastDate: string;
  };
}

export interface ReqChatRoomMessages {
  chatRoomId: string;
  cursor?: number;
  limit?: number;
  next?: number;
}

export interface ChatUser {
  authProvider: 'KAKAO' | 'GOOGLE';
  userType: 'customer' | 'business' | 'driver';
  userId?: number;
  phoneNumber?: string;
  uuid?: string;
  name: string;
}
export interface ChatMessage {
  chatRoomId: number;
  chatMessageId: number;
  senderUuid: string;
  chatMessageType: string;
  user: ChatUser;
  chatMessageContent: string;
}
export interface ChatMessages {
  data: ChatMessage[];
  next: number;
}
