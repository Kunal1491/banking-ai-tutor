'use client';

import Link from 'next/link';
import {
  Plus,
  Menu,
  X,
  Clock,
  Trash2,
  Edit2,
} from 'lucide-react';
import { useState } from 'react';

interface Conversation {
  id: string;
  title: string;
  date: string;
}

interface ChatSidebarProps {
  isOpen: boolean;
  conversations: Conversation[];
  onToggle: () => void;
}

export default function ChatSidebar({
  isOpen,
  conversations,
  onToggle,
}: ChatSidebarProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={onToggle}
        className="md:hidden fixed left-4 top-4 z-50 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        {isOpen ? (
          <X size={24} className="text-gray-700" />
        ) : (
          <Menu size={24} className="text-gray-700" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={onToggle}
          className="md:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static inset-y-0 left-0 z-40
          w-64 bg-white border-r border-gray-200
          flex flex-col transition-all duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* New Chat Button */}
        <div className="p-4 border-b border-gray-200 mt-12 md:mt-0">
          <Link
            href="/chat"
            onClick={() => window.location.reload()}
            className="w-full px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Plus size={18} />
            <span>New Chat</span>
          </Link>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
          <div className="px-3 pb-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Chat History
            </p>
          </div>

          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onMouseEnter={() => setHoveredId(conversation.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <button
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors truncate text-gray-700 text-sm"
              >
                <div className="truncate">{conversation.title}</div>
                <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  <Clock size={12} />
                  {conversation.date}
                </div>
              </button>

              {/* Hover Actions */}
              {hoveredId === conversation.id && (
                <div className="absolute right-2 top-2 flex gap-1">
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                    <Edit2 size={14} className="text-gray-500" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                    <Trash2 size={14} className="text-gray-500" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 space-y-3 text-xs text-gray-500">
          <button className="w-full text-left hover:text-gray-700 transition-colors">
            Terms & Privacy
          </button>
          <button className="w-full text-left hover:text-gray-700 transition-colors">
            Help & Support
          </button>
        </div>
      </div>
    </>
  );
}
