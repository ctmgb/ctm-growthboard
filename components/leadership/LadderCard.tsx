

// FILE: components/leadership/LadderCard.tsx

"use client";

import React from "react";
import {
  CheckCircle2,
  Circle,
  TrendingUp,
  Users,
  Crown,
} from "lucide-react";

export interface LadderCardProps {
  directLeaders?: number;
  totalLeaders?: number;
  expansionLeaders?: number;
}

export default function LadderCard({
  directLeaders = 10,
  totalLeaders = 118,
  expansionLeaders = 118,
}: LadderCardProps) {
  const stage1Complete = directLeaders >= 10;
  const stage2Complete = totalLeaders >= 100;
  const stage3Complete = expansionLeaders >= 400;

  const stage2Progress = Math.min((totalLeaders / 100) * 100, 100);
  const stage3Progress = Math.min((expansionLeaders / 400) * 100, 100);

  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500">
            CTM Duplication Ladder
          </p>

          <h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">
            10 → 100 → 400 Leadership Model
          </h2>
        </div>

        <div className="rounded-full bg-violet-100 p-3 dark:bg-violet-900/20">
          <TrendingUp className="h-6 w-6 text-violet-600" />
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-8 space-y-6">
        {/* Stage 1 */}
        <div className="flex gap-4">
          <div className="pt-1">
            {stage1Complete ? (
              <CheckCircle2 className="h-7 w-7 text-green-500" />
            ) : (
              <Circle className="h-7 w-7 text-neutral-400" />
            )}
          </div>

          <div className="flex-1 rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-800">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">
                Stage 1 — Build 10 Leaders
              </h3>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300">
                {directLeaders}/10
              </span>
            </div>

            <p className="mt-2 text-sm text-neutral-500">
              Personally develop and mentor 10 active frontline leaders.
            </p>

            <div className="mt-4 flex items-center gap-2 text-green-600">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">
                Milestone Achieved
              </span>
            </div>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="flex gap-4">
          <div className="pt-1">
            {stage2Complete ? (
              <CheckCircle2 className="h-7 w-7 text-green-500" />
            ) : (
              <Circle className="h-7 w-7 text-amber-500" />
            )}
          </div>

          <div className="flex-1 rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-800">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">
                Stage 2 — Expand to 100 Leaders
              </h3>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                {totalLeaders}/100
              </span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{ width: `${stage2Progress}%` }}
              />
            </div>

            <p className="mt-3 text-sm text-neutral-500">
              Collective team duplication toward the 100-leader milestone.
            </p>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="flex gap-4">
          <div className="pt-1">
            {stage3Complete ? (
              <CheckCircle2 className="h-7 w-7 text-green-500" />
            ) : (
              <Circle className="h-7 w-7 text-neutral-400" />
            )}
          </div>

          <div className="flex-1 rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-800">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">
                Stage 3 — Expand to 400 Leaders
              </h3>

              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                {expansionLeaders}/400
              </span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
              <div
                className="h-full rounded-full bg-purple-500"
                style={{ width: `${stage3Progress}%` }}
              />
            </div>

            <p className="mt-3 text-sm text-neutral-500">
              Scale duplication toward Master Tribe Leader status while
              maintaining balanced growth.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-5 text-white">
        <div className="flex items-center gap-3">
          <Crown className="h-6 w-6" />

          <div>
            <h3 className="font-bold text-lg">
              Ultimate Leadership Goal
            </h3>

            <p className="mt-1 text-sm text-white/90">
              Build a sustainable 10 → 100 → 400 duplication engine while
              progressing toward all three independent 234-pair missions and
              the ₹6.30 lakh weekly potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


