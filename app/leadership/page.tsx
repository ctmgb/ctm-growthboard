

// FILE: app/leadership/page.tsx

"use client";

import PageContainer from "@/components/layout/PageContainer";
import LeaderCard from "@/components/leadership/LeaderCard";
import LadderCard from "@/components/leadership/LadderCard";
import AchievementCard from "@/components/leadership/AchievementCard";

export default function LeadershipPage() {
  return (
    <PageContainer>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-28">
        {/* Header */}
        <section className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white shadow-lg">
          <p className="text-sm font-medium uppercase tracking-wider opacity-90">
            Leadership
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            10 → 100 → 400 Growth Journey
          </h1>

          <p className="mt-3 max-w-2xl text-sm opacity-90">
            Track your leadership progression, duplication milestones, and
            achievements while building balanced organizations across your
            three Business IDs.
          </p>
        </section>

        {/* Summary */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-xs uppercase text-neutral-500">
              Current Rank
            </p>

            <p className="mt-2 text-xl font-bold">
              🥈 Level 2 Multiplier
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-xs uppercase text-neutral-500">
              Direct Leaders
            </p>

            <p className="mt-2 text-3xl font-bold">
              10
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-xs uppercase text-neutral-500">
              Team Leaders
            </p>

            <p className="mt-2 text-3xl font-bold">
              118
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-xs uppercase text-neutral-500">
              Leadership Score
            </p>

            <p className="mt-2 text-3xl font-bold">
              78%
            </p>
          </div>
        </div>

        {/* Leader Overview */}
        <LeaderCard />

        {/* Duplication Ladder */}
        <LadderCard />

        {/* Achievements */}
        <AchievementCard />

        {/* AI Recommendation */}
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/20">
          <h2 className="text-lg font-bold text-blue-800 dark:text-blue-300">
            🤖 AI Leadership Coach
          </h2>

          <p className="mt-3 text-sm text-blue-700 dark:text-blue-400">
            Your highest-impact action today is to mentor two emerging leaders
            in your weaker branch. Achieving this keeps your 10 → 100 → 400
            duplication model balanced and accelerates progress toward your
            independent 234-pair missions.
          </p>

          <div className="mt-5 rounded-2xl bg-white/70 p-4 dark:bg-neutral-900/40">
            <div className="flex items-center justify-between">
              <span className="font-semibold">
                Expected Impact
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
                +8 Leaders
              </span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
              <div className="h-full w-[78%] rounded-full bg-green-500" />
            </div>

            <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
              Leadership Progress: 78%
            </p>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}

