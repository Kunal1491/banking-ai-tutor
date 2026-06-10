'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, LogOut, Settings, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ChatHeaderProps {
  onToggleSidebar: () => void;
}

export default function ChatHeader({ onToggleSidebar }: ChatHeaderProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await supabase.auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4 md:px-6 bg-white sticky top-0 z-20">
      {/* Left: Menu Button */}
      <button
        onClick={onToggleSidebar}
        className="hidden md:flex p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Menu size={24} className="text-gray-700" />
      </button>

      {/* Center: Logo/Title */}
      <div className="flex-1 flex justify-center md:justify-start md:flex-none">
        <h1 className="text-lg font-semibold text-gray-900">BankingAI Coach</h1>
      </div>

      {/* Right: User Menu */}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <User size={24} className="text-gray-700" />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-2 text-gray-700 border-b border-gray-200 transition-colors">
                <Settings size={18} />
                <span>Settings</span>
              </button>

              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full text-left px-4 py-3 hover:bg-red-50 flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors disabled:opacity-50"
              >
                <LogOut size={18} />
                <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
