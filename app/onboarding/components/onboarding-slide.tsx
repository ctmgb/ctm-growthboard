

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
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-8">
        {/* Progress */}
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>
            Step {current} of {total}
          </span>

          <span>
            {Math.round((current / total) * 100)}%
          </span>
        </div>

        <div className="mt-3 h-2 rounded-full bg-slate-800">
          <div
            className="h-2 rounded-full bg-blue-500 transition-all"
            style={{
              width: `${(current / total) * 100}%`,
            }}
          />
        </div>

        {/* Hero */}
        <div className="mt-10">
          <h1 className="text-4xl font-extrabold leading-tight">
            {slide.title}
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-blue-300">
            {slide.subtitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {slide.description}
          </p>
        </div>

        {/* Bullet Points */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <ul className="space-y-4">
            {slide.bullets.map((item, index) => (
              <li
                key={index}
                className="text-lg leading-7 text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration Placeholder */}
        <div className="mt-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6 text-center">
          <div className="text-sm uppercase tracking-widest text-blue-300">
            CTM Journey
          </div>

          <div className="mt-3 text-xl font-bold">
            {slide.illustration}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-10">
          <div className="flex gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="flex-1 rounded-2xl border border-slate-700 py-4 font-semibold"
              >
                Back
              </button>
            )}

            <button
              onClick={onNext}
              className="flex-1 rounded-2xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500"
            >
              {isLast ? "🚀 Create My CTM Account" : slide.cta}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-slate-800 pt-5 text-center text-sm text-slate-400">
          <div className="font-semibold text-white">
            Healer King Raphael Raj
          </div>
          <div>70-369-70-339</div>
        </div>
      </div>
    </main>
  );
}

