'use client';

import { useState, useRef } from 'react';
import { Send, Plus, Mic } from 'lucide-react';

interface ChatInputProps {
  onSendMessage?: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  onSendMessage,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.min(
        textareaRef.current.scrollHeight,
        200
      );
      textareaRef.current.style.height = newHeight + 'px';
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && !disabled) {
      onSendMessage?.(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Input Area */}
        <div className="flex gap-3 items-end">
          {/* Attachment Button */}
          <button
            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-gray-900"
            title="Attach file"
            disabled={disabled}
          >
            <Plus size={20} />
          </button>

          {/* Text Input */}
          <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 flex items-center gap-2 border border-gray-200 hover:border-gray-300 focus-within:border-blue-500 focus-within:bg-white transition-all">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about IBPS, SBI, RBI, RRB exams..."
              disabled={disabled}
              rows={1}
              className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 resize-none outline-none text-sm md:text-base max-h-48"
            />

            {/* Voice Button */}
            <button
              className="flex-shrink-0 p-1.5 hover:bg-gray-200 rounded-lg transition-colors text-gray-600 hover:text-gray-900"
              title="Voice input"
              disabled={disabled}
            >
              <Mic size={18} />
            </button>
          </div>

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            disabled={!message.trim() || disabled}
            className={`flex-shrink-0 p-2.5 rounded-lg font-medium transition-all flex items-center justify-center ${
              message.trim() && !disabled
                ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            title="Send message"
          >
            <Send size={20} />
          </button>
        </div>

        {/* Helper Text */}
        <p className="text-xs text-gray-500 mt-2 pl-12">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
