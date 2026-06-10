'use client';

import { User, Bot } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatMessageProps {
  message?: Message;
  role?: 'user' | 'assistant';
  content?: string;
  timestamp?: string;
}

export default function ChatMessage({
  message,
  role: propRole,
  content: propContent,
  timestamp: propTimestamp,
}: ChatMessageProps) {
  const role = message?.role || propRole || 'user';
  const content = message?.content || propContent || '';
  const timestamp = message?.timestamp || propTimestamp;
  
  const isUser = role === 'user';

  return (
    <div
      className={`flex gap-4 mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {/* Avatar - Assistant */}
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white">
            <Bot size={18} />
          </div>
        </div>
      )}

      {/* Message Content */}
      <div
        className={`max-w-sm md:max-w-2xl lg:max-w-3xl ${
          isUser ? 'order-first mr-2' : ''
        }`}
      >
        {/* Message Bubble */}
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-blue-600 text-white rounded-br-none'
              : 'bg-gray-100 text-gray-900 rounded-bl-none'
          }`}
        >
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
            {content}
          </p>
        </div>

        {/* Timestamp */}
        {timestamp && (
          <p className="text-xs text-gray-500 mt-1 px-2">
            {timestamp}
          </p>
        )}
      </div>

      {/* Avatar - User */}
      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white">
            <User size={18} />
          </div>
        </div>
      )}
    </div>
  );
}
