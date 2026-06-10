'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import QuickAccessCards from '@/components/QuickAccessCards';
import ChatWindow from '@/components/ChatWindow';
import RightSidebar from '@/components/RightSidebar';

export default function DashboardPage() {
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <Header userName="Kunal" />

        {/* Content Area */}
        <div className="flex-1 overflow-hidden flex">
          <div className="flex-1 overflow-y-auto">
            {!showChat && (
              <>
                {/* Quick Access Cards */}
                <div className="bg-white border-b border-gray-200">
                  <QuickAccessCards />
                </div>

                {/* Chat Area */}
              </>
            )}

            {showChat && <ChatWindow />}
          </div>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
