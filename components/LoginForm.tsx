'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  AlertCircle,
  BrainCircuit,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
  Sparkles,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface LoginFormProps {
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void;
}

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (
    field: 'email' | 'password',
    value: string
  ): string | undefined => {
    if (field === 'email') {
      if (!value.trim()) return 'Email address is required';
      if (!emailRegex.test(value)) return 'Enter a valid email address';
    }

    if (field === 'password') {
      if (!value.trim()) return 'Password is required';
      if (value.length < 6) return 'Password must be at least 6 characters';
    }

    return undefined;
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {
      email: validateField('email', formData.email),
      password: validateField('password', formData.password),
    };
    const filteredErrors = Object.fromEntries(
      Object.entries(nextErrors).filter(([, value]) => Boolean(value))
    );

    setErrors(filteredErrors);
    setTouched({ email: true, password: true });

    return Object.keys(filteredErrors).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const nextValue = type === 'checkbox' ? checked : value;

    setFormData((current) => ({
      ...current,
      [name]: nextValue,
    }));

    if (touched[name] && type !== 'checkbox') {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name as 'email' | 'password', value),
      }));
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;

    if (type === 'checkbox') return;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
    setErrors((current) => ({
      ...current,
      [name]: validateField(name as 'email' | 'password', value),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGeneralError('');

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

      if (signInError) {
        setGeneralError(signInError.message);
        return;
      }

      if (data?.user) {
        onSubmit?.(formData.email, formData.password, formData.rememberMe);
        router.push('/chat');
      }
    } catch (error) {
      setGeneralError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const emailError = touched.email ? errors.email : undefined;
  const passwordError = touched.password ? errors.password : undefined;

  return (
    <div className="rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_100px_rgba(79,70,229,0.18)] backdrop-blur-2xl sm:p-8">
      <div className="mb-8 text-center">
        <Link
          href="/"
          aria-label="BankingAI Coach home"
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:scale-105 hover:shadow-purple-600/25 focus:outline-none focus:ring-4 focus:ring-blue-600/20"
        >
          <BrainCircuit className="h-7 w-7" aria-hidden="true" />
        </Link>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 text-xs font-bold text-blue-700">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          BankingAI Coach
        </div>

        <h1 className="text-3xl font-black tracking-tight text-gray-950">
          Welcome Back
        </h1>
        <p className="mt-3 text-sm font-medium leading-6 text-gray-600">
          Continue your banking exam preparation.
        </p>
      </div>

      <form
        id="login-form"
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        {generalError && (
          <div
            className="flex items-start gap-3 rounded-2xl border border-red-200/80 bg-red-50/90 px-4 py-3 text-sm font-semibold text-red-700 shadow-sm"
            role="alert"
          >
            <AlertCircle
              className="mt-0.5 h-4 w-4 shrink-0"
              aria-hidden="true"
            />
            <span>{generalError}</span>
          </div>
        )}

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-800"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition"
              aria-hidden="true"
            />
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
              disabled={isLoading}
              placeholder="you@example.com"
              aria-invalid={Boolean(emailError)}
              aria-describedby={emailError ? 'email-error' : undefined}
              className="h-13 w-full rounded-2xl border border-gray-200/90 bg-white/85 px-4 pl-12 text-sm font-semibold text-gray-950 shadow-sm outline-none transition duration-200 placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
          {emailError && (
            <p id="email-error" className="text-sm font-semibold text-red-600">
              {emailError}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-bold text-gray-800"
          >
            Password
          </label>
          <div className="relative">
            <LockKeyhole
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="current-password"
              disabled={isLoading}
              placeholder="Enter your password"
              aria-invalid={Boolean(passwordError)}
              aria-describedby={passwordError ? 'password-error' : undefined}
              className="h-13 w-full rounded-2xl border border-gray-200/90 bg-white/85 px-4 pl-12 pr-12 text-sm font-semibold text-gray-950 shadow-sm outline-none transition duration-200 placeholder:text-gray-400 hover:border-purple-300 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              disabled={isLoading}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl text-gray-400 transition duration-200 hover:bg-purple-50 hover:text-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-500/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Eye className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
          {passwordError && (
            <p
              id="password-error"
              className="text-sm font-semibold text-red-600"
            >
              {passwordError}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between gap-4">
          <label className="group flex cursor-pointer items-center gap-3 text-sm font-semibold text-gray-600">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              disabled={isLoading}
              className="h-4 w-4 rounded border-gray-300 bg-white accent-blue-600 transition group-hover:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            />
            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-bold text-purple-600 transition duration-200 hover:text-blue-600 focus:outline-none focus:ring-4 focus:ring-purple-500/15"
          >
            Forgot password
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="group relative flex h-13 w-full items-center justify-center overflow-hidden rounded-2xl px-5 text-sm font-black text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-600/25 focus:outline-none focus:ring-4 focus:ring-blue-600/20 active:translate-y-0 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition duration-300 group-hover:from-blue-500 group-hover:to-purple-500" />
          <span className="relative flex items-center justify-center gap-2">
            {isLoading ? (
              <>
                <LoaderCircle
                  className="h-5 w-5 animate-spin"
                  aria-hidden="true"
                />
                Signing in
              </>
            ) : (
              'Sign In'
            )}
          </span>
        </button>

        <div className="relative py-1">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>
        </div>

        <p className="text-center text-sm font-medium text-gray-600">
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text transition duration-200 hover:from-blue-500 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-blue-600/15"
          >
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
