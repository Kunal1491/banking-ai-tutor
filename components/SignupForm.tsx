'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import AuthInput from './AuthInput';
import { PasswordInput } from './PasswordInput';
import { supabase } from '@/lib/supabase';

interface FormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  mobileNumber?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (touched[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Field-specific handlers for components without name attribute
  const createFieldChangeHandler = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));

    // Clear error when user starts typing
    if (touched[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    console.log('Starting signup process...');

    try {
      console.log('Attempting to sign up with email:', formData.email);
      // Sign up user with Supabase
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            phone: formData.mobileNumber,
          },
        },
      });

      console.log('Signup response:', { data, signUpError });

      if (signUpError) {
        console.error('Signup error:', signUpError);
        setGeneralError(signUpError.message);
        setIsLoading(false);
        return;
      }

      if (data?.user) {
        console.log('Signup successful, redirecting to login...');
        // Successfully signed up - redirect to login page
        router.push('/login');
      }
    } catch (error) {
      console.error('Caught error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setGeneralError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      {generalError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {generalError}
        </div>
      )}

      <AuthInput
        name="fullName"
        label="Full Name"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={createFieldChangeHandler('fullName')}
        onBlur={handleBlur}
        error={touched.fullName ? errors.fullName : undefined}
        disabled={isLoading}
      />

      <AuthInput
        name="email"
        label="Email Address"
        type="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={createFieldChangeHandler('email')}
        onBlur={handleBlur}
        error={touched.email ? errors.email : undefined}
        disabled={isLoading}
      />

      <AuthInput
        name="mobileNumber"
        label="Mobile Number"
        type="tel"
        placeholder="Enter your 10-digit mobile number"
        value={formData.mobileNumber}
        onChange={createFieldChangeHandler('mobileNumber')}
        onBlur={handleBlur}
        error={touched.mobileNumber ? errors.mobileNumber : undefined}
        disabled={isLoading}
      />

      <PasswordInput
        name="password"
        label="Password"
        placeholder="Create a strong password"
        value={formData.password}
        onChange={createFieldChangeHandler('password')}
        onBlur={handleBlur}
        error={touched.password ? errors.password : undefined}
        disabled={isLoading}
      />

      <PasswordInput
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={createFieldChangeHandler('confirmPassword')}
        onBlur={handleBlur}
        error={touched.confirmPassword ? errors.confirmPassword : undefined}
        disabled={isLoading}
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`
          w-full py-2.5 px-4 rounded-lg font-medium
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800
          disabled:opacity-70 disabled:cursor-not-allowed
          flex items-center justify-center gap-2
        `}
      >
        {isLoading ? (
          <>
            <div className="flex gap-1">
              <div
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: '0s' }}
              />
              <div
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: '0.15s' }}
              />
              <div
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
            <span>Creating Account...</span>
          </>
        ) : (
          <>
            <span>Create Account</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </>
        )}
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link
          href="/login"
          className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}
