'use client';

import React from 'react';
import { Zap, BookOpen, BarChart3, Brain } from 'lucide-react';

interface FeatureCard {
  icon: React.ComponentType<{ size: number; className: string }>;
  title: string;
  description: string;
  gradient: string;
}

const features: FeatureCard[] = [
  {
    icon: Brain,
    title: 'AI Tutor',
    description: 'Get instant explanations for any concept, question, or doubt with our advanced AI model trained on banking exams.',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: BookOpen,
    title: 'Daily Practice',
    description: 'Solve curated questions daily with detailed solutions, hints, and performance tracking across all topics.',
    gradient: 'from-purple-600 to-purple-400',
  },
  {
    icon: BarChart3,
    title: 'Mock Test Analysis',
    description: 'Take full-length mock tests and get detailed analytics on weak areas with personalized improvement plans.',
    gradient: 'from-pink-600 to-pink-400',
  },
  {
    icon: Zap,
    title: 'Smart Exam Strategy',
    description: 'Learn time management, shortcut techniques, and strategies from toppers to maximize your exam score.',
    gradient: 'from-orange-600 to-orange-400',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Powerful Features to Ace Your Exam
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for comprehensive exam preparation in one platform
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-transparent cursor-pointer overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
