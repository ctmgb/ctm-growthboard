

// FILE: app/earnings/page.tsx

"use client";

import PageContainer from "@/components/layout/PageContainer";
import {
  Crown,
  ArrowLeftCircle,
  ArrowRightCircle,
  Wallet,
  TrendingUp,
  IndianRupee,
} from "lucide-react";

export default function EarningsPage() {
  const earnings = [
    {
      title: "👑 ID-1 (Top Pole)",
      income: 148500,
      ceiling: 210000,
      icon: <Crown className="h-6 w-6 text-amber-500" />,
      progressColor: "bg-amber-500",
    },
    {
      title: "⬅️ ID-2 (Left Pole)",
      income: 82700,
      ceiling: 210000,
      icon: <ArrowLeftCircle className="h-6 w-6 text-blue-500" />,
      progressColor: "bg-blue-500",
    },
    {
      title: "➡️ ID-3 (Right Pole)",
      income: 91200,
      ceiling: 210000,
      icon: <ArrowRightCircle className="h-6 w-6 text-purple-500" />,
      progressColor: "bg-purple-500",
    },
  ];

  const totalIncome = earnings.reduce((sum, item) => sum + item.income, 0);
  const totalCeiling = 630000;
  const totalProgress = (totalIncome / totalCeiling) * 100;

  return (
    <PageContainer>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-28">
        {/* Header */}
        <section className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <Wallet className="h-8 w-8" />

            <div>
              <p className="text-sm uppercase tracking-wider opacity-90">
                Weekly Earnings
              </p>

              <h1 className="text-3xl font-bold">
                Income Dashboard
              </h1>
            </div>
          </div>

          <p className="mt-4 text-sm opacity-90">
            Track weekly income across all three Business IDs and monitor
            progress toward the ₹6.30 lakh combined weekly ceiling.
          </p>
        </section>

        {/* Combined Summary */}
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">
                Combined Weekly Income
              </p>

              <h2 className="mt-2 flex items-center gap-1 text-4xl font-bold">
                <IndianRupee className="h-8 w-8" />
                {totalIncome.toLocaleString("en-IN")}
              </h2>
            </div>

            <TrendingUp className="h-12 w-12 text-green-500" />
          </div>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
            <div
              className="h-full rounded-full bg-green-500"
              style={{ width: `${Math.min(totalProgress, 100)}%` }}
            />
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <span className="text-neutral-500">
              Progress to ₹6,30,000
            </span>

            <span className="font-semibold">
              {Math.round(totalProgress)}%
            </span>
          </div>
        </section>

        {/* Individual Business IDs */}
        <div className="space-y-5">
          {earnings.map((item) => {
            const progress = (item.income / item.ceiling) * 100;

            return (
              <section
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.icon}

                    <div>
                      <h2 className="text-xl font-bold">
                        {item.title}
                      </h2>

                      <p className="text-sm text-neutral-500">
                        Weekly Ceiling: ₹2,10,000
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-semibold dark:bg-neutral-800">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="mt-6 flex justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">
                      Current Earnings
                    </p>

                    <p className="mt-1 text-3xl font-bold">
                      ₹{item.income.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-neutral-500">
                      Remaining
                    </p>

                    <p className="mt-1 text-2xl font-bold text-red-500">
                      ₹
                      {(item.ceiling - item.income).toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-4 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                  <div
                    className={`${item.progressColor} h-full rounded-full`}
                    style={{
                      width: `${Math.min(progress, 100)}%`,
                    }}
                  />
                </div>
              </section>
            );
          })}
        </div>

        {/* AI Insight */}
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/20">
          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">
            🤖 AI Earnings Insight
          </h2>

          <p className="mt-3 text-sm text-blue-600 dark:text-blue-400">
            The greatest opportunity for increasing weekly income is currently
            the <strong>Left Pole (ID-2)</strong>. Strengthening that branch
            could significantly improve matched pairs and accelerate progress
            toward the combined ₹6.30 lakh weekly potential.
          </p>

          <div className="mt-5 rounded-2xl bg-white p-4 dark:bg-neutral-900">
            <div className="flex items-center justify-between">
              <span className="font-medium">
                Estimated Weekly Uplift
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300">
                +₹42,000
              </span>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}

