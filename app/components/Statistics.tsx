'use client';

import React from 'react';
import { BarChart3, Users, BookOpen, Zap } from 'lucide-react';

interface StatCard {
  icon: React.ComponentType<{ size: number; className: string }>;
  value: string;
  label: string;
  gradient: string;
}

const stats: StatCard[] = [
  {
    icon: BookOpen,
    value: '10,000+',
    label: 'Questions',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'AI Support',
    gradient: 'from-purple-600 to-purple-400',
  },
  {
    icon: BarChart3,
    value: '100+',
    label: 'Study Topics',
    gradient: 'from-pink-600 to-pink-400',
  },
  {
    icon: Users,
    value: 'Unlimited',
    label: 'Practice',
    gradient: 'from-orange-600 to-orange-400',
  },
];

export default function Statistics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            By The Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The scale of our platform and the quality of resources
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${stat.gradient} p-3 mb-4 mx-auto group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                  <Icon size={28} className="text-white mx-auto" />
                </div>

                {/* Value */}
                <div className="relative z-10">
                  <p className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>

                {/* Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${stat.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-gray-700">Accuracy in AI Explanations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600 mb-2">4.9/5</p>
              <p className="text-gray-700">Average Rating from Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-600 mb-2">92%</p>
              <p className="text-gray-700">Students Pass Their Exams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
