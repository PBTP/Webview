'use client';

import dynamic from 'next/dynamic';

const ChatRooms = dynamic(
  () => import('@/components/Chat/ChatRooms/ChatRooms'),
  { ssr: false } // SSR을 비활성화
);

export default function ChatListPage() {
  return <ChatRooms />;
}
