'use client';

import React from 'react';
import { UserPlus, HelpCircle, BookMarked, Trophy } from 'lucide-react';

interface Step {
  icon: React.ComponentType<{ size: number; className: string }>;
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: UserPlus,
    number: 1,
    title: 'Sign Up',
    description: 'Create your account and choose your target exam in just 2 minutes',
  },
  {
    icon: HelpCircle,
    number: 2,
    title: 'Ask Questions',
    description: 'Chat with our AI tutor anytime. Get instant explanations and concepts clarification',
  },
  {
    icon: BookMarked,
    number: 3,
    title: 'Practice Daily',
    description: 'Solve curated questions daily with hints, solutions, and performance analytics',
  },
  {
    icon: Trophy,
    number: 4,
    title: 'Crack the Exam',
    description: 'Master the exam with mock tests, strategy tips, and personalized study plans',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in 4 simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col">
                  {/* Number Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-xl p-6 flex-1 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                      <Icon size={24} className="text-blue-600" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Ready to start your journey?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
}
