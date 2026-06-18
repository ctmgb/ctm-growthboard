

// FILE: app/mission/page.tsx

"use client";

import PageContainer from "@/components/layout/PageContainer";
import { Target, Crown, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function MissionPage() {
  const missions = [
    {
      title: "👑 Top Pole (ID-1)",
      current: 165,
      target: 234,
      icon: <Crown className="h-6 w-6 text-amber-500" />,
      color: "bg-amber-500",
    },
    {
      title: "⬅️ Left Pole (ID-2)",
      current: 82,
      target: 234,
      icon: <ArrowLeftCircle className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-500",
    },
    {
      title: "➡️ Right Pole (ID-3)",
      current: 91,
      target: 234,
      icon: <ArrowRightCircle className="h-6 w-6 text-purple-500" />,
      color: "bg-purple-500",
    },
  ];

  const missionScore = 86;

  return (
    <PageContainer>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-28">
        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8" />

            <div>
              <p className="text-sm uppercase tracking-wider opacity-90">
                CTM Mission Control
              </p>

              <h1 className="text-3xl font-bold">
                234 Pair Tracker
              </h1>
            </div>
          </div>

          <p className="mt-4 text-sm opacity-90">
            Monitor independent progress across all three Business IDs and stay
            on track toward the combined ₹6.30 lakh weekly potential.
          </p>
        </section>

        {/* Mission Score */}
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">
                Overall Mission Score
              </p>

              <h2 className="mt-1 text-4xl font-bold">
                {missionScore}/100
              </h2>
            </div>

            <Target className="h-12 w-12 text-emerald-500" />
          </div>

          <div className="mt-5 h-4 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{ width: `${missionScore}%` }}
            />
          </div>
        </section>

        {/* Mission Cards */}
        <div className="space-y-5">
          {missions.map((mission) => {
            const progress = (mission.current / mission.target) * 100;
            const remaining = mission.target - mission.current;

            return (
              <section
                key={mission.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {mission.icon}

                    <div>
                      <h2 className="text-xl font-bold">
                        {mission.title}
                      </h2>

                      <p className="text-sm text-neutral-500">
                        Independent 234-Pair Mission
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-semibold dark:bg-neutral-800">
                    {Math.round(progress)}%
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">
                      Completed
                    </p>

                    <p className="text-4xl font-bold">
                      {mission.current}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-neutral-500">
                      Remaining
                    </p>

                    <p className="text-3xl font-bold text-red-500">
                      {remaining}
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-4 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                  <div
                    className={`${mission.color} h-full rounded-full`}
                    style={{
                      width: `${Math.min(progress, 100)}%`,
                    }}
                  />
                </div>
              </section>
            );
          })}
        </div>

        {/* AI Recommendation */}
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/20">
          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">
            🤖 AI Recommended Focus
          </h2>

          <p className="mt-3 text-sm text-blue-600 dark:text-blue-400">
            Strengthen the <strong>Left Pole (ID-2)</strong> by developing the
            LR branch. This action has the highest projected impact on balanced
            pair completion and overall mission progress.
          </p>

          <div className="mt-5 rounded-2xl bg-white p-4 dark:bg-neutral-900">
            <div className="flex items-center justify-between">
              <span className="font-medium">
                Estimated Benefit
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300">
                +12 Pairs
              </span>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}

