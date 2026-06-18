

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type ProgressData = {
  weeklyIncome: number;
  weeklyTarget: number;
  percentage: number;
};

const FALLBACK_DATA: ProgressData = {
  weeklyIncome: 322400,
  weeklyTarget: 630000,
  percentage: 51,
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

export default function ProgressCard() {
  const [data, setData] = useState<ProgressData>(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProgress() {
      try {
        const response = await fetch(
          `${API_BASE}?action=dashboard`,
          {
            cache: "no-store",
          }
        );

        const json = await response.json();

        if (json.success && json.data?.cache) {
          const cache = json.data.cache;

          const income = Number(cache.Weekly_Income ?? 0);
          const target = 630000;

          setData({
            weeklyIncome: income,
            weeklyTarget: target,
            percentage:
              target > 0
                ? Math.round((income / target) * 100)
                : 0,
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, []);

  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          💰 Weekly Progress
        </h3>

        <span className="text-sm text-slate-500">
          {loading ? "Loading..." : `${data.percentage}%`}
        </span>
      </div>

      <div className="mt-5">
        <div className="text-3xl font-extrabold">
          ₹{formatCurrency(data.weeklyIncome)}
        </div>

        <div className="mt-1 text-sm text-slate-500">
          of ₹{formatCurrency(data.weeklyTarget)}
        </div>

        <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${Math.min(
                data.percentage,
                100
              )}%`,
            }}
          />
        </div>

        <div className="mt-3 text-center text-sm font-semibold text-slate-700">
          {data.percentage}% Complete
        </div>
      </div>
    </section>
  );
}

