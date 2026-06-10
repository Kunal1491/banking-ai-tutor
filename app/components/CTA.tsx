'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <Sparkles size={16} className="text-white" />
              <span className="text-sm font-semibold text-white">Limited Time Offer</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Start Your Banking Exam Preparation Today
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already preparing with BankingAI Coach. Get access to AI tutor, 10,000+ questions, and mock tests.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/signup" className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto">
                <span>Get Started Free</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-all w-full sm:w-auto">
                Schedule a Demo
              </button>
            </div>

            {/* Features List */}
            <div className="mt-12 pt-12 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: '✓', text: 'No credit card required' },
                { icon: '⚡', text: '7-day free trial' },
                { icon: '🔒', text: 'Cancel anytime' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-white">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
