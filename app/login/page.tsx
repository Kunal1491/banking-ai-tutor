import { LoginForm } from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-10 text-gray-950 sm:px-6 lg:px-8">
      <a
        href="#login-form"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-gray-950 focus:shadow-xl"
      >
        Skip to login form
      </a>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(147,51,234,0.16),transparent_28%),radial-gradient(circle_at_50%_88%,rgba(219,39,119,0.14),transparent_34%)]" />
        <div className="absolute -right-32 -top-36 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl" />
        <div className="absolute -bottom-36 -left-32 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500 opacity-20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
      </div>

      <section className="relative z-10 w-full max-w-[420px]">
        <LoginForm />
      </section>
    </main>
  );
}
