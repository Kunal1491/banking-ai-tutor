'use client';

import React, { useState, useRef, forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface AuthInputProps {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  icon?: LucideIcon;
  error?: string;
  disabled?: boolean;
  autoComplete?: string;
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  (
    {
      label,
      name,
      type = 'text',
      placeholder,
      value,
      onChange,
      onBlur,
      icon: Icon,
      error,
      disabled = false,
      autoComplete,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.Ref<HTMLInputElement>) || internalRef;

    const isActive = isFocused || value.length > 0;

    return (
      <div className="w-full">
        <div className="relative">
          {/* Floating Label */}
          <label
            className={`absolute left-0 origin-left transition-all duration-300 pointer-events-none select-none ${
              isActive
                ? 'top-2 text-xs text-cyan-700 font-semibold'
                : 'top-1/2 -translate-y-1/2 text-slate-500'
            }`}
            style={{
              paddingLeft: Icon ? '2.75rem' : '1rem',
              transform: isActive
                ? 'translateY(-0.5rem) scale(0.875)'
                : 'translateY(-50%) scale(1)',
            }}
          >
            {label}
          </label>

          {/* Input Container */}
          <div className="relative">
            {/* Icon */}
            {Icon && (
              <div
                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                  isFocused ? 'text-cyan-700' : 'text-slate-400'
                } ${disabled ? 'opacity-50' : ''}`}
              >
                <Icon size={20} strokeWidth={2} />
              </div>
            )}

            {/* Input Field */}
            <input
              name={name}
              ref={inputRef}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                setIsFocused(false);
                onBlur?.(e);
              }}
              disabled={disabled}
              autoComplete={autoComplete}
              className={`w-full rounded-lg border px-4 py-3 transition-all duration-300 focus:outline-none ${
                Icon ? 'pl-11' : 'pl-4'
              } ${
                error
                  ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-100'
                : isFocused
                    ? 'border-cyan-500 bg-white ring-4 ring-cyan-100'
                    : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
              } ${
                disabled
                  ? 'cursor-not-allowed bg-slate-100 text-slate-400 opacity-60'
                  : 'text-slate-950 placeholder-transparent'
              } text-base font-semibold`}
              aria-label={label}
              aria-invalid={!!error}
              aria-describedby={error ? `${label}-error` : undefined}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div
            id={`${label}-error`}
            className="animate-in fade-in slide-in-from-top-1 mt-2 flex items-center gap-2 text-sm font-medium text-red-600 duration-200"
          >
            <div className="w-1 h-1 rounded-full bg-red-600" />
            {error}
          </div>
        )}
      </div>
    );
  }
);

AuthInput.displayName = 'AuthInput';

export default AuthInput;
