

// FILE: components/leadership/AchievementCard.tsx

"use client";

import React from "react";
import {
  Award,
  CheckCircle2,
  Lock,
  Star,
  Trophy,
  Crown,
  Target,
  Medal,
} from "lucide-react";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  icon: React.ReactNode;
}

export interface AchievementCardProps {
  achievements?: Achievement[];
}

export default function AchievementCard({
  achievements = [
    {
      id: "1",
      title: "First Prospect",
      description: "Added your first prospect to the CRM.",
      unlocked: true,
      icon: <Star className="h-5 w-5" />,
    },
    {
      id: "2",
      title: "10 Leader Builder",
      description: "Personally developed 10 active leaders.",
      unlocked: true,
      icon: <UsersIcon />,
    },
    {
      id: "3",
      title: "100 Leader Club",
      description: "Expanded the team to approximately 100 leaders.",
      unlocked: true,
      icon: <Medal className="h-5 w-5" />,
    },
    {
      id: "4",
      title: "400 Leader Vision",
      description: "Grow toward the 400 leader milestone.",
      unlocked: false,
      icon: <Crown className="h-5 w-5" />,
    },
    {
      id: "5",
      title: "234 Pair Mission",
      description: "Complete an independent 234-pair mission.",
      unlocked: false,
      icon: <Target className="h-5 w-5" />,
    },
    {
      id: "6",
      title: "Triple Ceiling Champion",
      description: "Approach ₹6.30 lakh combined weekly potential.",
      unlocked: false,
      icon: <Trophy className="h-5 w-5" />,
    },
  ],
}: AchievementCardProps) {
  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const progress = Math.round(
    (unlockedCount / achievements.length) * 100
  );

  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500">
            Achievement Center
          </p>

          <h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">
            Milestones & Badges
          </h2>
        </div>

        <div className="rounded-full bg-yellow-100 p-3 dark:bg-yellow-900/20">
          <Award className="h-6 w-6 text-yellow-600" />
        </div>
      </div>

      {/* Overall Progress */}
      <div className="mt-6 rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-800">
        <div className="flex items-center justify-between">
          <span className="font-medium">
            Achievement Progress
          </span>

          <span className="font-bold">
            {unlockedCount}/{achievements.length}
          </span>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-sm text-neutral-500">
          {progress}% of milestone badges unlocked.
        </p>
      </div>

      {/* Achievement List */}
      <div className="mt-6 space-y-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`flex items-start gap-4 rounded-2xl border p-4 transition-all ${
              achievement.unlocked
                ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20"
                : "border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${
                achievement.unlocked
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-neutral-200 text-neutral-500 dark:bg-neutral-700"
              }`}
            >
              {achievement.icon}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-900 dark:text-white">
                  {achievement.title}
                </h3>

                {achievement.unlocked ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <Lock className="h-5 w-5 text-neutral-400" />
                )}
              </div>

              <p className="mt-1 text-sm text-neutral-500">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-5 text-white">
        <h3 className="font-bold text-lg">
          Next Target
        </h3>

        <p className="mt-2 text-sm text-white/90">
          Focus on balanced duplication and leadership development to unlock
          the 400 Leader milestone and accelerate progress toward the
          independent 234-pair missions across all three Business IDs.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Small helper icon to avoid importing another Lucide icon           */
/* ------------------------------------------------------------------ */

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

