'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Bot,
  FileText,
  BarChart3,
  BookOpen,
  CheckSquare,
  Brain,
  TrendingUp,
  Menu,
  X,
  LogOut,
  Settings,
  MessageSquare,
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileClose = () => {
    setIsMobileOpen(false);
    onClose?.();
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Bot, label: 'AI Tutor', href: '#' },
    { icon: MessageSquare, label: 'Chat', href: '/dashboard' },
    { icon: FileText, label: 'Mock Tests', href: '#' },
    { icon: CheckSquare, label: 'Daily Quiz', href: '#' },
    { icon: BookOpen, label: 'Study Plans', href: '#' },
    { icon: BarChart3, label: 'Analytics', href: '#' },
    { icon: Brain, label: 'Saved Notes', href: '#' },
  ];

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
            <Bot size={24} className="text-white" />
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-bold text-gray-900">BankingAI</span>
            <span className="text-xs text-blue-600 font-semibold">Coach</span>
          </div>
        </div>
        {isMobileOpen && (
          <button
            onClick={handleMobileClose}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        )}
      </div>

      {/* New Chat Button */}
      <div className="p-6 border-b border-gray-200">
        <button className="w-full px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
          <MessageSquare size={18} />
          <span>New Chat</span>
        </button>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              index === 0
                ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon size={20} />
            <span className="hidden md:inline">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Menu */}
      <div className="border-t border-gray-200 p-4 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings size={20} />
          <span className="hidden md:inline">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <LogOut size={20} />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen bg-white border-r border-gray-200 fixed left-0 top-0 w-64 flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed top-4 left-4 z-40 p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          <Menu size={24} className="text-gray-600" />
        </button>

        {/* Mobile Overlay */}
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={handleMobileClose}
          />
        )}

        {/* Mobile Sidebar */}
        <div className="fixed left-0 top-0 h-screen w-64 bg-white z-40 flex flex-col transform transition-transform duration-300">
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
