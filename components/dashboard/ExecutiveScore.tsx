

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type ExecutiveMetrics = {
  missionScore: number;
  leadershipScore: number;
  balanceScore: number;
  incomeScore: number;
  overallScore: number;
};

const FALLBACK: ExecutiveMetrics = {
  missionScore: 1,
  leadershipScore: 25,
  balanceScore: 100,
  incomeScore: 1,
  overallScore: 32,
};

function ProgressBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-semibold">
          {value.toFixed(0)}%
        </span>
      </div>

      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-500"
          style={{
            width: `${Math.min(value, 100)}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function ExecutiveScore() {
  const [metrics, setMetrics] =
    useState<ExecutiveMetrics>(FALLBACK);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadExecutiveScore() {
      try {
        const response = await fetch(
          `${API_BASE}?action=dashboard`,
          {
            cache: "no-store",
          }
        );

        const json = await response.json();

        if (json.success && json.data) {
          const pairs = json.data.pairs;
          const leadership =
            json.data.leadership;

          const missionScore = Number(
            pairs?.missionPercentage ?? 0
          );

          const leadershipScore = Number(
            leadership?.leadershipScore ?? 0
          );

          const balanceScore =
            json.data.balanceHealth === "GREEN"
              ? 100
              : json.data.balanceHealth === "AMBER"
              ? 75
              : 40;

          const incomeScore = Number(
            pairs?.ceilingPercentage ?? 0
          );

          const overall =
            (
              missionScore +
              leadershipScore +
              balanceScore +
              incomeScore
            ) / 4;

          setMetrics({
            missionScore,
            leadershipScore,
            balanceScore,
            incomeScore,
            overallScore: overall,
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadExecutiveScore();
  }, []);

  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          🏆 Executive Score
        </h3>

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
          {loading
            ? "Loading..."
            : `${metrics.overallScore.toFixed(
                0
              )}/100`}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        <ProgressBar
          label="Mission Progress"
          value={metrics.missionScore}
        />

        <ProgressBar
          label="Leadership"
          value={metrics.leadershipScore}
        />

        <ProgressBar
          label="Balance Health"
          value={metrics.balanceScore}
        />

        <ProgressBar
          label="Income Ceiling"
          value={metrics.incomeScore}
        />
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm text-slate-600">
          Executive Performance Index
        </p>

        <p className="mt-1 text-3xl font-extrabold text-indigo-700">
          {metrics.overallScore.toFixed(0)}
        </p>
      </div>
    </section>
  );
}

