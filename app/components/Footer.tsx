'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BA</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BankingAI Coach
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your personal AI tutor for banking exam success. Comprehensive preparation for IBPS, SBI, RBI, and RRB exams.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <button
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'Features', 'Exams', 'Pricing', 'Blog'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {['Documentation', 'FAQ', 'Community', 'Help Center', 'Contact'].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <Mail size={16} />
                <span>support@bankingaicoach.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <Phone size={16} />
                <span>+1-800-BANKING-1</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Finance Street, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {currentYear} BankingAI Coach. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end text-sm text-gray-500">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Brand Bar */}
      <div className="bg-gray-950 py-4 px-4">
        <div className="max-w-7xl mx-auto text-center text-xs text-gray-600">
          Built with ❤️ for banking exam aspirants
        </div>
      </div>
    </footer>
  );
}
