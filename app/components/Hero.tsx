'use client';

import React from 'react';
import { Play, ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 hover:border-purple-300 transition-colors">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Next Generation AI Learning</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-gray-900">Master Banking</span>
                <span className="block">
                  <span className="relative">
                    <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Exams with AI</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-sm opacity-30"></span>
                  </span>
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
              Your personal AI tutor that explains concepts, personalizes your learning, and helps you ace IBPS & SBI exams in half the time.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-full text-sm text-gray-700">
                <Zap size={16} className="text-blue-600" />
                <span>Instant Explanations</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-purple-50 rounded-full text-sm text-gray-700">
                <Brain size={16} className="text-purple-600" />
                <span>Smart Personalization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-4 font-bold text-white rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-500 transition-all"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <span>Start Learning Free</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 font-bold rounded-xl hover:border-blue-600 hover:bg-white hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                <Play size={20} className="fill-gray-700 group-hover:fill-blue-600 group-hover:text-blue-600" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="font-medium">Trusted by 10,000+ students</span>
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <div>
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                  <p className="text-gray-600">Accuracy Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">2.5h</p>
                  <p className="text-gray-600">Daily Average</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative h-96 sm:h-full lg:h-[550px] hidden lg:flex items-center justify-center perspective">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-purple-200/20 to-transparent rounded-3xl blur-3xl"></div>
            
            {/* Main Card with Modern Style */}
            <div className="relative w-80 h-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">AI Session</p>
                    <p className="text-2xl font-black text-gray-900 mt-1">Real-time Support</p>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Sparkles size={28} className="text-white" />
                  </div>
                </div>

                {/* AI Response Example */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
                    <p className="text-sm text-gray-700 font-medium">Your Question</p>
                    <p className="text-xs text-gray-600 mt-1">How to solve compound interest problems?</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 flex-1">
                      <p className="text-sm text-gray-700">Compound interest is calculated using the formula...</p>
                      <div className="mt-3 flex space-x-2">
                        <div className="h-1.5 bg-blue-400 rounded-full w-8"></div>
                        <div className="h-1.5 bg-blue-300 rounded-full w-12"></div>
                        <div className="h-1.5 bg-blue-200 rounded-full w-6"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-600">98%</p>
                    <p className="text-xs text-gray-600">Accuracy</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-blue-600">&lt;2s</p>
                    <p className="text-xs text-gray-600">Response</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-purple-600">∞</p>
                    <p className="text-xs text-gray-600">Questions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge 1 - Top Right */}
            <div className="absolute top-12 right-0 animate-float" style={{ animationDelay: '0s' }}>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="flex items-center space-x-2">
                  <Zap size={18} className="text-yellow-500" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Instant Feedback</p>
                    <p className="text-xs text-gray-600">Real-time insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 - Bottom Left */}
            <div className="absolute bottom-20 left-0 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="flex items-center space-x-2">
                  <Brain size={18} className="text-purple-600" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Smart Learning</p>
                    <p className="text-xs text-gray-600">Adaptive paths</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge 3 - Top Left */}
            <div className="absolute -top-4 -left-8 animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-3 shadow-lg text-white">
                <p className="text-xs font-bold">Score: 187/200 ✓</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations via style tag */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
