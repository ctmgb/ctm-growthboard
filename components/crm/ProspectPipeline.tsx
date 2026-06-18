
"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type PipelineStats = {
  newCount: number;
  followUpCount: number;
  readyCount: number;
  convertedCount: number;
  conversionRate: number;
};

const FALLBACK: PipelineStats = {
  newCount: 0,
  followUpCount: 0,
  readyCount: 0,
  convertedCount: 0,
  conversionRate: 0,
};

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-slate-900">
        {value}
      </div>
    </div>
  );
}

export default function ProspectPipeline() {
  const [stats, setStats] = useState(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPipeline() {
      try {
        const response = await fetch(
          `${API_BASE}?action=crmSummary`,
          {
            cache: "no-store",
          }
        );

        const json = await response.json();

        if (json.success && json.data) {
          const data = json.data;

          const total =
            Number(data.total ?? 0);

          const converted =
            Number(data.converted ?? 0);

          setStats({
            newCount:
              Number(data.new ?? 0),
            followUpCount:
              Number(data.followUp ?? 0),
            readyCount:
              Number(data.ready ?? 0),
            convertedCount:
              converted,
            conversionRate:
              total > 0
                ? Number(
                    (
                      (converted / total) *
                      100
                    ).toFixed(1)
                  )
                : 0,
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadPipeline();
  }, []);

  return (
    <section className="rounded-3xl bg-white p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          📊 Prospect Pipeline
        </h2>

        <span className="text-sm text-slate-500">
          {loading ? "Loading..." : "Live"}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <StatCard
          label="🆕 New"
          value={stats.newCount}
        />

        <StatCard
          label="📞 Follow-up"
          value={stats.followUpCount}
        />

        <StatCard
          label="👥 Ready"
          value={stats.readyCount}
        />

        <StatCard
          label="✅ Converted"
          value={stats.convertedCount}
        />
      </div>

      <div className="mt-5 rounded-2xl bg-emerald-50 p-4">
        <div className="text-sm text-slate-600">
          Conversion Rate
        </div>

        <div className="mt-1 text-3xl font-extrabold text-emerald-700">
          {stats.conversionRate}%
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-500"
            style={{
              width: `${Math.min(
                stats.conversionRate,
                100
              )}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

