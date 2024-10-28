import { useCallback, useEffect, useRef, useState } from 'react';
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

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const hasSetupListeners = useRef(false);

  useEffect(() => {
    if (previousMessages?.data) {
      setMessages(previousMessages.data);
    }
  }, [previousMessages]);

  useEffect(() => {
    if (!socket || !chatRoomId || hasSetupListeners.current) return;

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
      setMessages((prevMessages) => {
        // 중복 메시지 방지
        const isDuplicate = prevMessages.some(
          (prevMsg) => prevMsg.chatMessageId === msg.chatMessageId
        );
        if (isDuplicate) return prevMessages;
        return [...prevMessages, msg];
      });
    };
    socket.off('connect', handleConnect);
    socket.off('receive', handleReceiveMessage);
    socket.off('exception');

    socket.on('connect', handleConnect);
    socket.on('receive', handleReceiveMessage);
    socket.on('exception', (message) => console.log('Exception:', message));

    hasSetupListeners.current = true;

    if (socket.connected) {
      joinRoom();
    }

    return () => {
      socket.off('connect', handleConnect);
      socket.off('receive', handleReceiveMessage);
      socket.off('exception');
      hasSetupListeners.current = false;
    };
  }, [socket, chatRoomId]);

  const sendMessage = useCallback(
    (message: object) => {
      if (!socket?.connected || !message) return;

      // 메시지 전송 중 상태 관리
      let isProcessing = false;

      if (isProcessing) return;

      try {
        isProcessing = true;
        console.log('sendMessage', message);
        socket.emit('send', message, () => {
          // 서버로부터 응답을 받으면 처리 완료
          isProcessing = false;
        });
      } catch (error) {
        console.error('Failed to send message:', error);
        isProcessing = false;
      }
    },
    [socket]
  );

  return { messages, sendMessage };
};
