'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  AlertCircle,
  ArrowRight,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
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
    <form
      id="login-form"
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      {generalError && (
        <div
          className="flex items-start gap-3 rounded-2xl border border-red-200/80 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 shadow-sm"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{generalError}</span>
        </div>
      )}

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-slate-800"
        >
          Email Address
        </label>
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
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
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 pl-12 text-sm font-medium text-slate-950 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
          />
        </div>
        {emailError && (
          <p id="email-error" className="text-sm font-medium text-red-600">
            {emailError}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-slate-800"
        >
          Password
        </label>
        <div className="relative">
          <LockKeyhole
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
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
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 pl-12 pr-12 text-sm font-medium text-slate-950 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            disabled={isLoading}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl text-slate-400 transition duration-200 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-950/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Eye className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        {passwordError && (
          <p id="password-error" className="text-sm font-medium text-red-600">
            {passwordError}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="group flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-600">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            disabled={isLoading}
            className="h-4 w-4 rounded border-slate-300 bg-white accent-slate-950 transition group-hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
          Remember me
        </label>

        <Link
          href="/forgot-password"
          className="text-sm font-semibold text-slate-950 transition duration-200 hover:text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-950/10"
        >
          Forgot Password
        </Link>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="group flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white shadow-xl shadow-slate-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-950/25 focus:outline-none focus:ring-4 focus:ring-slate-950/20 active:translate-y-0 disabled:cursor-not-allowed disabled:translate-y-0 disabled:bg-slate-700 disabled:shadow-none"
      >
        {isLoading ? (
          <>
            <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
            Signing in
          </>
        ) : (
          <>
            Sign In
            <ArrowRight
              className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      <p className="text-center text-sm font-medium text-slate-600">
        New to BankingAI Coach?{' '}
        <Link
          href="/signup"
          className="font-bold text-slate-950 transition duration-200 hover:text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-950/10"
        >
          Create Account
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
