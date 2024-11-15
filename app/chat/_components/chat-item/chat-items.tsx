import { ChatRoom } from '@/hooks/api/types/chat';
import ChatItem from './chat-item';

interface ChatRoomItemsProps {
  chatRoomsData: ChatRoom[];
  isEdit?: boolean;
  onItemClick?: (chatRoomId: number, storeName: string) => void;
  selectedItems?: number[];
}

const ChatRoomItems = ({
  chatRoomsData,
  isEdit = false,
  onItemClick,
  selectedItems = [],
}: ChatRoomItemsProps) => {
  return (
    <>
      {chatRoomsData.map((chatInfo) => {
        const unViewedMsgCount = !isEdit && chatInfo?.unViewedMsgCount > 0;
        return (
          <ChatItem
            key={chatInfo.chatRoomId}
            onClick={() =>
              onItemClick?.(chatInfo.chatRoomId, chatInfo.chatRoomName)
            }
          >
            {isEdit && (
              <ChatItem.EditButton
                isActive={selectedItems.includes(chatInfo.chatRoomId)}
              />
            )}
            <ChatItem.ChatItemContent chatInfo={chatInfo} />
            {unViewedMsgCount && (
              <ChatItem.UnViewCount
                unViewedMsgCount={chatInfo.unViewedMsgCount}
              />
            )}
          </ChatItem>
        );
      })}
    </>
  );
};

export default ChatRoomItems;
