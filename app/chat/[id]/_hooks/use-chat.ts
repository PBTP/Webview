import { ChatMessage } from '@/hooks/api/types/chat';
import { useChatRoomMessages } from '@/hooks/api/useChat';
import { useSocket } from '@/hooks/socket/useSocket';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 *
 * @param chatRoomId 현재 접속한 채팅방의 id
 * @returns messages: 채팅방 메세지 | sendMessage: 메세지 보내는 함수
 */
export const useChat = (chatRoomId: string) => {
  const [isConnected, setIsConnected] = useState(false);
  const { socket } = useSocket();
  const { data: previousMessages } = useChatRoomMessages({
    chatRoomId,
  });

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const hasSetupListeners = useRef(false);
  const isProcessing = useRef(false);

  useEffect(() => {
    if (previousMessages?.data) {
      setMessages(previousMessages.data);
    }
  }, [previousMessages]);

  useEffect(() => {
    const handleReceiveMessage = (msg: ChatMessage) => {
      console.log('Received message:', msg);
      setMessages((prevMessages) => {
        const isDuplicate = prevMessages.some(
          (prevMsg) => prevMsg.chatMessageId === msg.chatMessageId
        );
        const isSameUser = prevMessages.some(
          (prevMsg) => prevMsg.user === msg.user
        );
        if (isDuplicate || isSameUser) {
          console.log('Duplicate message or Same user detected');
          return prevMessages;
        }
        return [...prevMessages, msg];
      });
    };

    const handleConnect = () => {
      console.log('Socket connected');
      if (chatRoomId) {
        console.log('Joining room:', chatRoomId);
        socket?.emit('join', { chatRoomId });
        setIsConnected(true);
      }
    };

    const handleException = (error: unknown) => {
      console.error('Socket exception:', error);
      setIsConnected(false);
    };

    if (socket && chatRoomId && !hasSetupListeners.current) {
      socket.off('connect', handleConnect);
      socket.off('receive', handleReceiveMessage);
      socket.off('exception', handleException);

      socket.on('connect', handleConnect);
      socket.on('receive', handleReceiveMessage);
      socket.on('exception', handleException);

      hasSetupListeners.current = true;

      if (socket.connected) {
        handleConnect();
      }
    }

    return () => {
      if (socket) {
        socket.off('connect', handleConnect);
        socket.off('receive', handleReceiveMessage);
        socket.off('exception', handleException);
        hasSetupListeners.current = false;
      }
    };
  }, [socket, chatRoomId]);

  const sendMessage = useCallback(
    (message: object) => {
      if (!socket?.connected || !message || isProcessing.current) return;

      try {
        isProcessing.current = true;
        console.log('Sending message:', message);

        socket.emit('send', message, () => {
          isProcessing.current = false;
        });

        setTimeout(() => {
          isProcessing.current = false;
        }, 5000);
      } catch (error) {
        console.error('Failed to send message:', error);
        isProcessing.current = false;
      }
    },
    [socket]
  );

  return { messages, sendMessage, isConnected };
};
