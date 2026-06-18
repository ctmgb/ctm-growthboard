

// FILE: app/insights/page.tsx

"use client";

import PageContainer from "@/components/layout/PageContainer";
import {
  Brain,
  TrendingUp,
  Users,
  Phone,
  Target,
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function InsightsPage() {
  const recommendations = [
    {
      title: "Register Arun",
      impact: "+1 Active Leader",
      description:
        "This prospect is ready for registration and will strengthen your frontline leadership.",
      icon: <Users className="h-5 w-5" />,
      color: "bg-green-500",
    },
    {
      title: "Strengthen LR Branch",
      impact: "+8 Matched Pairs",
      description:
        "Your Left-Right branch is behind target pace. Focus here for maximum binary impact.",
      icon: <Target className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      title: "Follow Up with Meena",
      impact: "+1 Conversion Opportunity",
      description:
        "Today's scheduled follow-up has a high probability of conversion.",
      icon: <Phone className="h-5 w-5" />,
      color: "bg-orange-500",
    },
    {
      title: "Activate Ravi",
      impact: "+7,500 BV",
      description:
        "Weekly activation will contribute fresh BV and improve pair generation.",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "bg-purple-500",
    },
  ];

  return (
    <PageContainer>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-28">
        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <Brain className="h-8 w-8" />

            <div>
              <p className="text-sm uppercase tracking-wider opacity-90">
                AI Intelligence
              </p>

              <h1 className="text-3xl font-bold">
                Daily Insights
              </h1>
            </div>
          </div>

          <p className="mt-4 text-sm opacity-90">
            Prioritized recommendations generated from your CTM dashboard,
            leadership progress, mission status, BV balance, and prospect
            pipeline.
          </p>
        </section>

        {/* Highest Impact */}
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Highest Impact Action
              </p>

              <h2 className="mt-2 text-2xl font-bold text-blue-900 dark:text-blue-100">
                Strengthen LR Branch
              </h2>

              <p className="mt-3 text-sm text-blue-700 dark:text-blue-300">
                Improving the Left-Right branch is projected to increase binary
                balance and accelerate progress toward the 234-pair mission.
              </p>
            </div>

            <ArrowUpRight className="h-8 w-8 text-blue-600" />
          </div>

          <div className="mt-5 rounded-2xl bg-white p-4 dark:bg-neutral-900">
            <div className="flex items-center justify-between">
              <span className="font-medium">
                Estimated Benefit
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300">
                +8 Matched Pairs
              </span>
            </div>
          </div>
        </section>

        {/* AI Recommendations */}
        <section className="space-y-4">
          {recommendations.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${item.color}`}
                >
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">
                      {item.title}
                    </h3>

                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold dark:bg-neutral-800">
                      {item.impact}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Health Checks */}
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600" />

              <h2 className="text-lg font-bold text-amber-700 dark:text-amber-300">
                Needs Attention
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-amber-700 dark:text-amber-300">
              <li>• LR branch is lagging behind target pace.</li>
              <li>• 5 prospect follow-ups are due today.</li>
              <li>• 2 weekly activations are pending.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-green-200 bg-green-50 p-5 dark:border-green-900 dark:bg-green-950/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600" />

              <h2 className="text-lg font-bold text-green-700 dark:text-green-300">
                Positive Signals
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>• 10 direct leaders milestone achieved.</li>
              <li>• Weekly income trend is increasing.</li>
              <li>• Top Pole remains well balanced.</li>
            </ul>
          </section>
        </div>

        {/* Executive Score */}
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-bold">
            Executive Readiness Score
          </h2>

          <div className="mt-5 h-4 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400"
              style={{ width: "86%" }}
            />
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <span className="text-neutral-500">
              Overall Performance
            </span>

            <span className="font-bold">
              86 / 100
            </span>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}


