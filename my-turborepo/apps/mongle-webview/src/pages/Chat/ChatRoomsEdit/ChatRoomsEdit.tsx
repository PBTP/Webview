import React, { useState } from 'react';
import ArrowLeftTailIcon from '@/icons/icon/ArrowLeftTail';

import styles from './ChatRoomsEdit.module.scss';
import Button from '@/components/common/Button/Button';
import ChatItemBase from '../ChatRooms/ChatItemBase';
import { ChatRoom } from '@/hooks/api/types/chat';

type ChatRoomsEditProps = {
  setIsEdit: React.Dispatch<boolean>;
  chatData: ChatRoom[];
};

const ChatRoomsEdit = ({ setIsEdit, chatData }: ChatRoomsEditProps) => {
  const [selectedEditChatRooms, setSelectedEditChatRooms] = useState<string[]>(
    []
  );

  const selectedEditChatRoomsCount = selectedEditChatRooms.length;
  const isDisabledDeleteButton = selectedEditChatRoomsCount > 0;

  const handleSelectedEditChatRooms = (chatId: string) => {
    if (selectedEditChatRooms.includes(chatId)) {
      setSelectedEditChatRooms(
        selectedEditChatRooms.filter((index) => index !== chatId)
      );
      return;
    }
    setSelectedEditChatRooms([...selectedEditChatRooms, chatId]);
  };

  const handleAllSelectEditChatRooms = () => {
    if (isAllSelected) {
      setSelectedEditChatRooms([]);
      return;
    }
    setSelectedEditChatRooms(chatData.map((chatInfo) => chatInfo.chatRoomId));
  };

  const isAllSelected = selectedEditChatRooms.length === chatData.length;

  return (
    <div className={styles.ChatRoomsEditWrapper}>
      <div className={styles.ChatRoomsEditContainer}>
        <div className={styles.ChatRoomsEditHeader}>
          <ArrowLeftTailIcon
            onClick={() => setIsEdit(false)}
            width={24}
            height={24}
            className={styles.BackIcon}
          />
          <div className={styles.ChatRoomsEditTitle}> 편집 </div>
          <div
            onClick={handleAllSelectEditChatRooms}
            className={styles.ChatRoomsEditSubTitle}
          >
            {isAllSelected ? '전제 해제' : '전체 선택'}
          </div>
        </div>
        <div className={styles.ChatRoomsEditContent}>
          {chatData.map((chatInfo, idx) => {
            return (
              <ChatItemBase
                onClick={() => handleSelectedEditChatRooms(chatInfo.chatRoomId)}
                key={`${chatInfo.chatRoomId}-${idx}`}
              >
                <ChatItemBase.EditButton
                  isActive={selectedEditChatRooms.includes(chatInfo.chatRoomId)}
                />
                <ChatItemBase.ChatItemContent chatInfo={chatInfo} />
              </ChatItemBase>
            );
          })}
        </div>
      </div>
      <Button
        buttonType={isDisabledDeleteButton ? 'Spacing' : 'Disabled'}
        className={styles.DeleteButton}
      >
        삭제 {selectedEditChatRoomsCount}
      </Button>
    </div>
  );
};

export default ChatRoomsEdit;
