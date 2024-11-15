import ArrowLeftTailIcon from '@/components/ui/icons/icon/ArrowLeftTail';
import React, { useState } from 'react';

import Button from '@/components/ui/common/Button/Button';
import { ChatRoom } from '@/hooks/api/types/chat';
import ChatRoomItems from '../chat-item/chat-items';
import styles from './chat-list-edit.module.scss';

type ChatListEditProps = {
  setIsEdit: React.Dispatch<boolean>;
  chatRoomsData: ChatRoom[];
};

const ChatListEdit = ({ setIsEdit, chatRoomsData }: ChatListEditProps) => {
  const [selectedEditChatRooms, setSelectedEditChatRooms] = useState<number[]>(
    []
  );

  const selectedEditChatRoomsCount = selectedEditChatRooms.length;
  const isDisabledDeleteButton = selectedEditChatRoomsCount > 0;

  const handleSelectedEditChatRooms = (chatRoomId: number) => {
    if (selectedEditChatRooms.includes(chatRoomId)) {
      setSelectedEditChatRooms(
        selectedEditChatRooms.filter((index) => index !== chatRoomId)
      );
      return;
    }
    setSelectedEditChatRooms([...selectedEditChatRooms, chatRoomId]);
  };

  const handleAllSelectEditChatRooms = () => {
    if (isAllSelected) {
      setSelectedEditChatRooms([]);
      return;
    }
    setSelectedEditChatRooms(
      chatRoomsData.map((chatInfo) => chatInfo.chatRoomId)
    );
  };

  const isAllSelected = selectedEditChatRooms.length === chatRoomsData.length;

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
          <ChatRoomItems
            chatRoomsData={chatRoomsData}
            isEdit={true}
            selectedItems={selectedEditChatRooms}
            onItemClick={handleSelectedEditChatRooms}
          />
        </div>
      </div>
      <Button
        buttonType={isDisabledDeleteButton ? 'Spacing' : 'Disabled'}
        className={styles.DeleteButton}
      >
        삭제 {selectedEditChatRoomsCount > 0 && selectedEditChatRoomsCount}
      </Button>
    </div>
  );
};

export default ChatListEdit;
