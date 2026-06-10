import SignupForm from '@/components/SignupForm';

export const metadata = {
  title: 'Sign Up | BankingAI Coach',
  description: 'Create your account and start preparing smarter with BankingAI Coach',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-[420px]">
        {/* Header Section */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">BankingAI Coach</h1>
          <p className="text-gray-600 text-base">
            Create your account and start preparing smarter.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <SignupForm />
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
