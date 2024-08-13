export interface ResChatRoom {
  chatRoomId: string;
  tsid: string;
  chatRoomName: string;
  inviteUser: object;
  lastMessage: {
    chatRoomId: 0;
    chatMessageId: 0;
    senderUuid: string;
    chatMessageType: string;
    user: string;
    chatMessageContent: string;
  };
}
