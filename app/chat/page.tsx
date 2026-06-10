'use client';

import { useState } from 'react';
import ChatWindow from '@/components/ChatWindow';
import ChatSidebar from '@/components/ChatSidebar';
import ChatHeader from '@/components/ChatHeader';

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [conversations, setConversations] = useState<
    Array<{ id: string; title: string; date: string }>
  >([
    { id: '1', title: 'Banking Exam Tips', date: 'Today' },
    { id: '2', title: 'Quantitative Analysis', date: 'Yesterday' },
    { id: '3', title: 'Logical Reasoning Guide', date: '2 days ago' },
  ]);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <ChatSidebar
        isOpen={sidebarOpen}
        conversations={conversations}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <ChatHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Chat Window */}
        <ChatWindow />
      </div>
    </div>
  );
}
