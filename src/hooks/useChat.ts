import { useCallback, useEffect, useState } from 'react';
import { useChatRoomMessages } from './api/useChat';
import { ChatMessage } from './api/types/chat';
import { useSocket } from './socket/useSocket';

/**
 *
 * @param chatRoomId 현재 접속한 채팅방의 id
 * @returns messages: 채팅방 메세지 | sendMessage: 메세지 보내는 함수
 */
export const useChat = (chatRoomId: string) => {
  const { socket } = useSocket();
  const { data: previousMessages } = useChatRoomMessages({
    chatRoomId,
  });
  console.log(previousMessages);
  const [messages, setMessages] = useState<ChatMessage[]>(
    previousMessages?.data || []
  );

  useEffect(() => {
    if (!socket || !chatRoomId) return;

    const joinRoom = () => {
      if (chatRoomId) {
        console.log('joinRoom', chatRoomId);
        socket.emit('join', { chatRoomId });
      }
    };

    const handleConnect = () => {
      console.log('CONNECT');
      joinRoom();
    };

    const handleReceiveMessage = (msg: ChatMessage) => {
      console.log(msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    };

    socket.on('connect', handleConnect);
    socket.on('receive', handleReceiveMessage);
    socket.on('exception', (message) => console.log('Exception:', message));

    if (socket.connected) {
      joinRoom();
    }

    return () => {
      socket.off('connect', handleConnect);
      socket.off('receive', handleReceiveMessage);
      socket.off('exception');
    };
  }, [socket, chatRoomId]);

  const sendMessage = useCallback(
    (message: object) => {
      if (socket && socket.connected && message) {
        console.log('sendMessage', message);
        socket.emit('send', message);
      }
    },
    [socket]
  );

  return { messages, sendMessage };
};
