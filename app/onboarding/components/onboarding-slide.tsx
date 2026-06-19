

"use client";

import type { OnboardingSlide } from "../data";

interface OnboardingSlideProps {
  slide: OnboardingSlide;
  current: number;
  total: number;
  onBack?: () => void;
  onNext: () => void;
  isLast?: boolean;
}

export default function OnboardingSlide({
  slide,
  current,
  total,
  onBack,
  onNext,
  isLast = false,
}: OnboardingSlideProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[20%] left-[-80px] h-[260px] w-[260px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8">
        {/* Badge */}
        <div className="inline-flex w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
          {slide.badge}
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>
              Executive Briefing
            </span>

            <span>
              {current} / {total}
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-500"
              style={{
                width: `${(current / total) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Hero */}
        <div className="mt-8">
          <h1 className="text-[2.5rem] font-black leading-tight tracking-tight">
            {slide.headline}
          </h1>

          <p className="mt-5 text-[1.25rem] leading-9 text-slate-300">
            {slide.subheadline}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 flex-1 space-y-5">
          {slide.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="text-4xl">
                {card.icon}
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                {card.title}
              </h2>

              <p className="mt-3 text-lg leading-8 text-slate-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6">
          <p className="text-lg italic leading-8 text-emerald-100">
            “{slide.quote}”
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex gap-4">
          {onBack && (
            <button
              onClick={onBack}
              className="flex-1 rounded-2xl border border-slate-700 bg-slate-900 py-4 text-lg font-semibold transition hover:border-slate-500"
            >
              Back
            </button>
          )}

          <button
            onClick={onNext}
            className="flex-1 rounded-2xl bg-blue-600 py-4 text-lg font-bold transition hover:bg-blue-500"
          >
            {isLast
              ? "🚀 Start My CTM Journey"
              : slide.cta}
          </button>
        </div>

        {/* Trust Footer */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-center text-sm text-slate-400">
          🔒 Transparent &nbsp;•&nbsp;
          📊 Measurable &nbsp;•&nbsp;
          🤖 AI-Assisted &nbsp;•&nbsp;
          👥 Leadership-Focused &nbsp;•&nbsp;
          📱 Mobile-First
        </div>
      </div>
    </main>
  );
}

