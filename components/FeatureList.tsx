import {
  BarChart3,
  Bot,
  Brain,
  CalendarCheck2,
  CheckCircle2,
  Sparkles,
  Trophy,
} from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Tutor 24/7',
    description: 'Clear explanations for quant, reasoning, English, and GA.',
  },
  {
    icon: CalendarCheck2,
    title: 'Smart Study Plans',
    description: 'Daily prep paths that adapt around your score trends.',
  },
  {
    icon: BarChart3,
    title: 'Mock Test Analysis',
    description: 'Pinpoint weak sections before they become exam-day gaps.',
  },
];

export function FeatureList() {
  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl shadow-black/10 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.12]"
        >
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/10 text-cyan-100 shadow-lg shadow-cyan-950/20 transition duration-300 group-hover:text-white">
              <feature.icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{feature.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FloatingInsightCards() {
  return (
    <div className="relative mt-8 hidden h-56 max-w-2xl sm:block">
      <div className="absolute left-0 top-4 w-72 rounded-3xl border border-white/10 bg-white/[0.10] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/15 text-cyan-100">
            <Brain className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">
            Live
          </span>
        </div>
        <p className="mt-5 text-sm font-semibold text-slate-300">
          Readiness score
        </p>
        <div className="mt-2 flex items-end gap-3">
          <span className="text-5xl font-bold tracking-tight text-white">
            86
          </span>
          <span className="pb-2 text-sm font-bold text-emerald-200">
            +12 this week
          </span>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300" />
        </div>
      </div>

      <div className="absolute right-0 top-0 w-72 rounded-3xl border border-white/10 bg-slate-950/30 p-5 shadow-2xl shadow-indigo-950/30 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-300/15 text-violet-100">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Next best action</p>
            <p className="text-xs font-medium text-slate-400">AI generated</p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-200">
          Spend 35 minutes on syllogism speed drills before your RBI mock.
        </p>
      </div>

      <div className="absolute bottom-0 left-28 w-80 rounded-3xl border border-white/10 bg-white/[0.09] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-200/15 text-amber-100">
              <Trophy className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Mock streak</p>
              <p className="text-xs font-medium text-slate-400">
                7 focused sessions
              </p>
            </div>
          </div>
          <CheckCircle2 className="h-6 w-6 text-emerald-200" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

