import ChatRoom from './_components/chat-room';

interface ChatPageProps {
  params: {
    id: string;
  };
  searchParams: {
    storeName: string;
  };
}

const ChatPage = ({ params, searchParams }: ChatPageProps) => {
  return <ChatRoom chatRoomId={params.id} storeName={searchParams.storeName} />;
};

export default ChatPage;
