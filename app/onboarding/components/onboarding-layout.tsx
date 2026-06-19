

"use client";

import type { ReactNode } from "react";

interface OnboardingLayoutProps {
  step: number;
  totalSteps: number;
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function OnboardingLayout({
  step,
  totalSteps,
  title,
  subtitle,
  children,
  footer,
}: OnboardingLayoutProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-300">
            ✨ CTM GrowthBoard
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">
                Step {step} of {totalSteps}
              </p>

              <h1 className="mt-2 text-4xl font-bold leading-tight text-white">
                {title}
              </h1>

              <p className="mt-3 text-lg leading-8 text-slate-300">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="mt-3 flex justify-center gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    index < step
                      ? "bg-blue-400"
                      : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <section className="flex-1 space-y-5">
          {children}
        </section>

        {/* Footer */}
        {footer && (
          <footer className="mt-8">
            {footer}
          </footer>
        )}
      </div>
    </main>
  );
}

