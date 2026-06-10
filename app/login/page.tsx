import { BrainCircuit, ChevronRight, ShieldCheck } from 'lucide-react';
import { FeatureList, FloatingInsightCards } from '@/components/FeatureList';
import { LoginCard } from '@/components/LoginCard';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <a
        href="#login-form"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-slate-950 focus:shadow-xl"
      >
        Skip to login form
      </a>

      <div className="grid min-h-screen lg:grid-cols-[1.08fr_0.92fr]">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-8 text-white sm:px-10 lg:flex lg:min-h-screen lg:flex-col lg:px-12 lg:py-10 xl:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_78%_8%,rgba(168,85,247,0.20),transparent_28%),radial-gradient(circle_at_55%_86%,rgba(16,185,129,0.16),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_46%,#111827_100%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
          </div>

          <div className="relative z-10 flex min-h-full flex-col">
            <header className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
                  <BrainCircuit
                    className="h-6 w-6 text-cyan-100"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold tracking-tight">
                    BankingAI Coach
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100/80">
                    Exam intelligence
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-200 backdrop-blur-xl sm:flex">
                <ShieldCheck className="h-4 w-4 text-emerald-200" />
                Bank-grade auth
              </div>
            </header>

            <div className="flex flex-1 flex-col justify-center py-14 lg:py-16">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-bold text-cyan-50 shadow-lg shadow-black/10 backdrop-blur-xl">
                  Personalized AI guidance
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </div>

                <h1 className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-7xl">
                  Your AI Banking Exam Mentor
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
                  Master IBPS, SBI, RBI and RRB exams with personalized AI
                  guidance.
                </p>
              </div>

              <div className="mt-9 max-w-4xl">
                <FeatureList />
              </div>

              <FloatingInsightCards />
            </div>

            <div className="grid gap-3 border-t border-white/10 pt-5 text-sm font-semibold text-slate-400 sm:grid-cols-3">
              <span>Adaptive prep engine</span>
              <span>Section-wise analytics</span>
              <span>Built for Indian banking exams</span>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10 sm:px-8 lg:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.10),transparent_32%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          <div className="relative z-10 flex w-full justify-center">
            <LoginCard />
          </div>
        </section>
      </div>
    </main>
  );
}
