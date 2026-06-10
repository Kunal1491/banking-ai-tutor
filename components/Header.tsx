'use client';

import { Bell, User } from 'lucide-react';

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName = 'Kunal' }: HeaderProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-8 sticky top-0 z-10">
      {/* Left: Greeting */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-900">
            {getGreeting()}, {userName} 👋
          </h1>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Ready to crack your banking exam today?
        </p>
      </div>

      {/* Right: Icons and Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={24} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Profile Avatar */}
        <button className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold hover:shadow-lg transition-shadow">
          <User size={20} />
        </button>
      </div>
    </div>
  );
}
