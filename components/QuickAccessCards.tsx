'use client';

import { Bot, BookOpen, BarChart3, BookMarked, Zap, TrendingUp } from 'lucide-react';

const cards = [
  {
    icon: Bot,
    title: 'Ask AI Tutor',
    description: 'Get instant explanations',
    color: 'blue',
  },
  {
    icon: BookOpen,
    title: 'Daily Quiz',
    description: 'Practice every day',
    color: 'green',
  },
  {
    icon: BarChart3,
    title: 'Mock Test Analysis',
    description: 'Understand your mistakes',
    color: 'purple',
  },
  {
    icon: BookMarked,
    title: 'Study Plan',
    description: 'Personalized roadmap',
    color: 'orange',
  },
  {
    icon: Zap,
    title: 'Exam Strategy',
    description: 'Shortcuts and tricks',
    color: 'pink',
  },
  {
    icon: TrendingUp,
    title: 'Performance Report',
    description: 'Track your progress',
    color: 'indigo',
  },
];

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
  green: 'bg-green-50 text-green-600 hover:bg-green-100',
  purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
  orange: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
  pink: 'bg-pink-50 text-pink-600 hover:bg-pink-100',
  indigo: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
};

export default function QuickAccessCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const colorClass = colorClasses[card.color as keyof typeof colorClasses];

        return (
          <button
            key={index}
            className={`p-6 rounded-xl border border-gray-200 transition-all duration-300 text-left hover:shadow-md hover:border-gray-300 ${colorClass}`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm opacity-80 mt-1">
                  {card.description}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
