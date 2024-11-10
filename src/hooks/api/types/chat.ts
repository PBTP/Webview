export interface ChatRoom {
  tsid: string;
  chatRoomId: number;
  chatRoomName: string;
  createdAt: Date;
  lastMessage: {
    tsid: string;
    chatMessageId: number;
    chatRoomId: number;
    senderUuid: string;
    chatMessageType: string;
    chatMessageContent: string;
    createdAt: Date;
  };
  unViewedMsgCount: number;
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
