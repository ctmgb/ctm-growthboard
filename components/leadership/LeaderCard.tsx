

// FILE: components/leadership/LeaderCard.tsx

"use client";

import React from "react";
import {
  Crown,
  Users,
  TrendingUp,
  Trophy,
  Target,
  ArrowUpRight,
} from "lucide-react";

export interface LeaderCardProps {
  name?: string;
  memberId?: string;
  rank?: string;
  directLeaders?: number;
  totalLeaders?: number;
  weeklyIncome?: number;
  leadershipScore?: number;
}

export default function LeaderCard({
  name = "Raphael Raj",
  memberId = "100842",
  rank = "🥈 Level 2 Multiplier",
  directLeaders = 10,
  totalLeaders = 118,
  weeklyIncome = 322400,
  leadershipScore = 78,
}: LeaderCardProps) {
  return (
    <section className="w-full rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500">
            Leadership Profile
          </p>

          <h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">
            {name}
          </h2>

          <p className="mt-1 text-sm text-neutral-500">
            Business ID #{memberId}
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/20">
          <Crown className="h-7 w-7 text-amber-600" />
        </div>
      </div>

      {/* Rank Banner */}
      <div className="mt-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-white">
        <p className="text-xs uppercase tracking-widest opacity-80">
          Current Rank
        </p>

        <h3 className="mt-1 text-xl font-bold">
          {rank}
        </h3>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
          <Users className="mb-2 h-5 w-5 text-blue-500" />

          <p className="text-xs uppercase text-neutral-500">
            Direct Leaders
          </p>

          <p className="mt-1 text-2xl font-bold">
            {directLeaders}
          </p>
        </div>

        <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
          <TrendingUp className="mb-2 h-5 w-5 text-green-500" />

          <p className="text-xs uppercase text-neutral-500">
            Total Leaders
          </p>

          <p className="mt-1 text-2xl font-bold">
            {totalLeaders}
          </p>
        </div>

        <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
          <Trophy className="mb-2 h-5 w-5 text-amber-500" />

          <p className="text-xs uppercase text-neutral-500">
            Weekly Income
          </p>

          <p className="mt-1 text-lg font-bold">
            ₹{weeklyIncome.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
          <Target className="mb-2 h-5 w-5 text-purple-500" />

          <p className="text-xs uppercase text-neutral-500">
            Score
          </p>

          <p className="mt-1 text-2xl font-bold">
            {leadershipScore}%
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
            Leadership Progress
          </span>

          <span className="text-sm font-bold">
            {leadershipScore}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
            style={{ width: `${leadershipScore}%` }}
          />
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/20">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              AI Recommendation
            </p>

            <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
              Develop 2 additional frontline leaders to strengthen your
              duplication pipeline and accelerate progress toward the
              100-leader milestone.
            </p>
          </div>

          <ArrowUpRight className="h-5 w-5 text-blue-600" />
        </div>
      </div>
    </section>
  );
}

