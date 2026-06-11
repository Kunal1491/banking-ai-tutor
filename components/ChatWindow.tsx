'use client';

import { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

type ApiChatResponse = {
  role?: 'assistant';
  content?: string;
  error?: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextMessageIdRef = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const createMessageId = () => {
    nextMessageIdRef.current += 1;
    return `message-${nextMessageIdRef.current}`;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = [
    {
      title: 'Banking Concepts',
      description: 'Learn about monetary policy and interest rates',
    },
    {
      title: 'Exam Tips',
      description: 'Get strategies to crack your banking exam',
    },
    {
      title: 'Mock Tests',
      description: 'Practice with full-length mock examinations',
    },
    {
      title: 'Study Plan',
      description: 'Create a personalized study schedule',
    },
  ];

  const handleSendMessage = async (text: string) => {
    const trimmedText = text.trim();

    if (!trimmedText || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: createMessageId(),
      role: 'user',
      content: trimmedText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const requestMessages = [
      ...messages.map(({ role, content }) => ({ role, content })),
      {
        role: 'user' as const,
        content: trimmedText,
      },
    ];

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: requestMessages,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as ApiChatResponse;

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      if (!data.content) {
        throw new Error('AI response was empty');
      }

      const aiMessage: Message = {
        id: createMessageId(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorText =
        error instanceof Error
          ? error.message
          : 'Please check the server logs for details.';

      const errorMessage: Message = {
        id: createMessageId(),
        role: 'assistant',
        content: `Sorry, I encountered an error. ${errorText}`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (title: string) => {
    if (!isLoading) {
      handleSendMessage(title);
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          // Welcome State - Claude.ai Style
          <div className="h-full flex flex-col items-center justify-center px-4 py-8 bg-white">
            {/* Welcome Header */}
            <div className="max-w-3xl w-full">
              <h1 className="text-5xl font-bold text-center text-gray-900 mb-2">
                BankingAI Coach
              </h1>
              <p className="text-center text-lg text-gray-500 mb-12">
                Your personal AI tutor for banking exam preparation
              </p>

              {/* Suggested Questions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question.title)}
                    disabled={isLoading}
                    className="p-4 text-left rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all group"
                  >
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {question.title}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {question.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Messages
          <div className="max-w-3xl mx-auto w-full px-4 py-8">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm">AI</span>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto w-full px-4 py-4">
          <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
        </div>
      </div>
    </div>
  );
}
