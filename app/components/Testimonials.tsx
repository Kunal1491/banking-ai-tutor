'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  exam: string;
  score: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    exam: 'SBI PO',
    score: 'Score: 152/200',
    text: 'BankingAI Coach transformed my preparation. The AI tutor is incredibly helpful, and I went from 85 marks to 152 marks in just 3 months!',
    image: '👩‍🎓',
  },
  {
    name: 'Amit Kumar',
    exam: 'IBPS Clerk',
    score: 'Score: 188/200',
    text: 'The mock tests are so realistic and the analysis is super detailed. I never thought I could score this high. Highly recommended!',
    image: '👨‍💼',
  },
  {
    name: 'Ananya Gupta',
    exam: 'RBI Assistant',
    score: 'Score: 165/200',
    text: 'What I love most is the daily practice feature and the instant AI support. No more waiting for replies. Simply the best platform!',
    image: '👩‍💻',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who cracked their exams with BankingAI Coach
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mb-4"></div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 font-medium">
                    {testimonial.exam}
                  </p>
                  <p className="text-xs text-green-600 font-semibold">
                    {testimonial.score}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-4">Join 10,000+ successful students</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
