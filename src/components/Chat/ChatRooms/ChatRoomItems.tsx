import { ChatRoom } from '@/hooks/api/types/chat';
import ChatItemBase from './ChatItemBase/ChatItemBase';

interface ChatRoomItemsProps {
  chatRoomsData: ChatRoom[];
  isEdit?: boolean;
  onItemClick?: (chatRoomId: number, storeName?: string) => void;
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
          <ChatItemBase
            key={chatInfo.chatRoomId}
            onClick={() =>
              onItemClick?.(chatInfo.chatRoomId, chatInfo.chatRoomName)
            }
          >
            {isEdit && (
              <ChatItemBase.EditButton
                isActive={selectedItems.includes(chatInfo.chatRoomId)}
              />
            )}
            <ChatItemBase.ChatItemContent chatInfo={chatInfo} />
            {unViewedMsgCount && (
              <ChatItemBase.UnViewCount
                unViewedMsgCount={chatInfo.unViewedMsgCount}
              />
            )}
          </ChatItemBase>
        );
      })}
    </>
  );
};

export default ChatRoomItems;
