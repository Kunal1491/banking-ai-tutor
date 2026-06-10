'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface Exam {
  name: string;
  description: string;
}

const exams: Exam[] = [
  { name: 'SBI PO', description: 'Probationary Officer' },
  { name: 'SBI Clerk', description: 'Junior Associate' },
  { name: 'IBPS PO', description: 'Probationary Officer' },
  { name: 'IBPS Clerk', description: 'Junior Associate' },
  { name: 'RBI Assistant', description: 'Grade B Officer' },
  { name: 'RRB PO', description: 'Probationary Officer' },
  { name: 'RRB Clerk', description: 'Junior Associate' },
];

export default function ExamsCovered() {
  return (
    <section id="exams" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Exams We Cover
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prepare for all major banking exams with our comprehensive content
          </p>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:bg-blue-50"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-gradient-to-br from-blue-600 to-purple-600 group-hover:scale-110 transition-transform">
                    <Check size={16} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {exam.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {exam.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600">
                <Check size={20} className="text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-900">
                ✨ New exams added regularly
              </p>
              <p className="text-xs text-blue-700 mt-1">
                We continuously update our content with the latest exam patterns and syllabus changes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
