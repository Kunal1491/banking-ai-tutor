import { ShieldCheck } from 'lucide-react';
import { LoginForm } from '@/components/LoginForm';

export function LoginCard() {
  return (
    <section
      aria-labelledby="login-heading"
      className="w-full max-w-[420px] rounded-[2rem] border border-white/80 bg-white/95 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:p-8"
    >
      <div className="mb-8">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600">
          <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          Secure AI workspace
        </div>
        <h2
          id="login-heading"
          className="text-3xl font-bold tracking-tight text-slate-950"
        >
          Welcome back
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Sign in to continue your study plan, AI tutor chats, and mock test
          insights.
        </p>
      </div>

      <LoginForm />
    </section>
  );
}

export default LoginCard;
