

"use client";

import Link from "next/link";

export default function RegistrationSuccessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-xl shadow-2xl">
          {/* Success Icon */}
          <div className="text-center">
            <div className="text-6xl">🎉</div>

            <h1 className="mt-5 text-4xl font-black text-white">
              Welcome to CTM GrowthBoard
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Your registration has been completed successfully and your
              CTM workspace is ready.
            </p>
          </div>

          {/* Progress */}
          <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5">
            <h2 className="text-lg font-bold text-emerald-300">
              ✅ Registration Complete
            </h2>

            <ul className="mt-4 space-y-3 text-slate-200">
              <li>• Profile created successfully</li>
              <li>• Referral relationship preserved</li>
              <li>• Sponsor information recorded</li>
              <li>• Ready for Business ID allocation</li>
            </ul>
          </div>

          {/* Business IDs */}
          <div className="mt-6 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-5">
            <h2 className="text-lg font-bold text-blue-300">
              Assigned Business IDs
            </h2>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3">
                <span>Top Pole (ID-1)</span>
                <span className="font-bold text-blue-400">
                  100001
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3">
                <span>Left Pole (ID-2)</span>
                <span className="font-bold text-blue-400">
                  100002
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3">
                <span>Right Pole (ID-3)</span>
                <span className="font-bold text-blue-400">
                  100003
                </span>
              </div>
            </div>
          </div>

          {/* First Week Plan */}
          <div className="mt-6 rounded-3xl border border-amber-500/20 bg-amber-500/10 p-5">
            <h2 className="text-lg font-bold text-amber-300">
              Your First Week
            </h2>

            <ul className="mt-4 space-y-3 text-slate-200">
              <li>• Review your AI-powered dashboard</li>
              <li>• Add your first prospects</li>
              <li>• Complete scheduled follow-ups</li>
              <li>• Track progress and leadership growth</li>
              <li>• Build consistent daily habits</li>
            </ul>
          </div>

          {/* CTA */}
          <Link
            href="/crm"
            className="mt-8 block w-full rounded-2xl bg-blue-600 py-4 text-center text-lg font-bold text-white transition hover:bg-blue-500"
          >
            🚀 Enter CTM GrowthBoard
          </Link>

          {/* Trust Footer */}
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-center text-sm text-slate-400">
            🔒 Transparent • 📊 Measurable • 🤖 AI-Assisted • 👥 Leadership-Focused • 📱 Mobile-First
          </div>
        </div>
      </div>
    </main>
  );
}

