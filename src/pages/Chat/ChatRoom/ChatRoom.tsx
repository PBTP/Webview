import styles from './ChatRoom.module.scss';
import ArrowLeftTailIcon from '@/icons/icon/ArrowLeftTail';
import DotsVerticalIcon from '@/icons/icon/DotsVertical';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useSocket } from '@/hooks/socket/useSocket';
import { useChatRoomMessages } from '@/hooks/api/useChat';
import { ReqChatRoomMessages } from '@/hooks/api/types/chat';
import { useAuthStore } from '@/stores/useAuthStore';
import { UploadIcon, CameraIcon } from '@/icons/icon';

type ChatMessageType = 'TEXT' | 'IMAGE' | 'VIDEO';

const ChatRoom = () => {
  const senderUuid = useAuthStore((state) => state.uuid);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { chatRoomId, storeName, chatMessageId } = state;

  const [chatMessageContent, setChatMessageContent] = useState('');

  const { data: previousMessages } = useChatRoomMessages({
    chatRoomId,
  } as ReqChatRoomMessages);
  const socket = useSocket();

  const [chatMessageType, setChatMessageType] =
    useState<ChatMessageType>('TEXT');

  const [chatMsgs, setChatMsgs] = useState([...previousMessages]);

  const sendMsg = () => {
    if (!socket) return;
    socket.emit('send', {
      chatRoomId,
      chatMessageId,
      senderUuid,
      chatMessageType,
      chatMessageContent,
    });
  };

  useEffect(
    function handleChatRoom() {
      if (!socket || !chatRoomId) return;

      const getMessage = (msg: string[]) => {
        setChatMsgs([...chatMsgs, ...msg]);
      };

      socket.emit('join', { chatRoomId });
      socket.on('receive', getMessage);

      return () => {
        socket.off('receive');
      };
    },
    [socket, chatRoomId]
  );

  return (
    <>
      <div className={styles.ChatRoomHeader}>
        <ArrowLeftTailIcon
          onClick={() => navigate('/chat-list')}
          width={24}
          height={24}
        />
        <div className={styles.ChatRoomTitle}> {storeName} </div>
        <DotsVerticalIcon width={24} height={24} />
      </div>
      <div className={styles.ChatRoomWrapper}>
        <div className={`${styles.ChatWrapper} ${styles.Sender}`}>
          <div className={styles.ChatContainer}>
            <div className={styles.ChatContent}>
              <div className={styles.Date}>오후 8:08</div>
              <div className={`${styles.Chat} ${styles.Sender}`}>
                앗 네! 감사합니다.
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.ChatWrapper} ${styles.Receiver}`}>
          <img
            src="https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp"
            className={styles.ChatImage}
          />
          <div className={styles.ChatContainer}>
            <div className={styles.ChatContent}>
              <div className={`${styles.Chat} ${styles.Receiver}`}>
                아하 네 알겠습니다. ㅎㅎ
              </div>
              <div className={styles.Date}>오후 8:08</div>
            </div>
            <div className={styles.ChatContent}>
              <div className={`${styles.Chat} ${styles.Receiver}`}>
                아하 네 알겠습니다. ㅎㅎ
              </div>
              <div className={styles.Date}>오후 8:08</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ChatInputWrapper}>
        <CameraIcon className={styles.CameraIcon} width={24} height={24} />
        <div className={styles.ChatInputContent}>
          <textarea
            rows={1}
            className={styles.ChatInput}
            placeholder="메시지를 입력하세요"
            onChange={(e) => setChatMessageContent(e.target.value)}
          />
          <UploadIcon
            onClick={sendMsg}
            className={styles.UploadIcon}
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
