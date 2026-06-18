

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

const WEEKLY_TARGET = 630000;

type IncomeData = {
  id1Income: number;
  id2Income: number;
  id3Income: number;
  totalIncome: number;
  percentage: number;
};

const FALLBACK: IncomeData = {
  id1Income: 0,
  id2Income: 0,
  id3Income: 0,
  totalIncome: 0,
  percentage: 0,
};

function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

function IncomeRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
      <span className="font-medium text-slate-700">
        {label}
      </span>

      <span className="font-bold text-emerald-700">
        ₹{formatINR(value)}
      </span>
    </div>
  );
}

export default function WeeklyIncomeCard() {
  const [income, setIncome] =
    useState<IncomeData>(FALLBACK);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadIncome() {
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

          const total = Number(
            cache.Weekly_Income ?? 0
          );

          // Placeholder split until the backend
          // exposes per-Business-ID values.
          const split = Math.round(total / 3);

          setIncome({
            id1Income: split,
            id2Income: split,
            id3Income: total - split - split,
            totalIncome: total,
            percentage:
              WEEKLY_TARGET > 0
                ? Math.min(
                    (total / WEEKLY_TARGET) * 100,
                    100
                  )
                : 0,
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadIncome();
  }, []);

  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          💰 Weekly Income
        </h3>

        <span className="text-sm text-slate-500">
          {loading ? "Loading..." : "Live"}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <IncomeRow
          label="👑 ID-1"
          value={income.id1Income}
        />

        <IncomeRow
          label="⬅️ ID-2"
          value={income.id2Income}
        />

        <IncomeRow
          label="➡️ ID-3"
          value={income.id3Income}
        />
      </div>

      <div className="mt-5 rounded-2xl bg-emerald-50 p-4">
        <div className="text-sm text-slate-600">
          Combined Weekly Income
        </div>

        <div className="mt-1 text-3xl font-extrabold text-emerald-700">
          ₹{formatINR(income.totalIncome)}
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-500"
            style={{
              width: `${income.percentage}%`,
            }}
          />
        </div>

        <div className="mt-2 text-sm text-slate-600">
          {income.percentage.toFixed(1)}% of ₹6,30,000 weekly potential
        </div>
      </div>
    </section>
  );
}

