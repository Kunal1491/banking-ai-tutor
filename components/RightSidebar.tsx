'use client';

import { BarChart3, Flame, Target, CheckCircle } from 'lucide-react';

export default function RightSidebar() {
  const stats = [
    {
      label: 'Questions Asked',
      value: '142',
      icon: BarChart3,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Practice Streak',
      value: '7 Days',
      icon: Flame,
      color: 'bg-orange-50 text-orange-600',
    },
    {
      label: 'Accuracy',
      value: '78%',
      icon: Target,
      color: 'bg-green-50 text-green-600',
    },
    {
      label: 'Study Hours',
      value: '24.5h',
      icon: CheckCircle,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  const goals = [
    { task: 'Complete Quant Quiz', completed: false },
    { task: 'Revise Reasoning', completed: true },
    { task: 'Mock Test Today', completed: false },
  ];

  return (
    <div className="hidden lg:flex w-80 flex-col bg-white border-l border-gray-200 overflow-y-auto">
      {/* Stats Section */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>

        <div className="space-y-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`p-3 rounded-lg ${stat.color} flex items-start gap-3`}
              >
                <Icon size={20} className="flex-shrink-0 mt-0.5" />

                <div>
                  <p className="text-xs font-medium opacity-75">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Goals Section */}
      <div className="p-6 flex-1">
        <h3 className="font-semibold text-gray-900 mb-4">Upcoming Goals</h3>

        <div className="space-y-2">
          {goals.map((goal, index) => (
            <label key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={goal.completed}
                readOnly
                className="w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer accent-blue-600"
              />
              <span
                className={`text-sm font-medium ${
                  goal.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-700'
                }`}
              >
                {goal.task}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Continue Learning */}
      <div className="p-6 border-t border-gray-200">
        <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all">
          Continue Learning
        </button>
      </div>
    </div>
  );
}
