

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type PoleData = {
  top: number;
  left: number;
  right: number;
};

const FALLBACK: PoleData = {
  top: 1,
  left: 1,
  right: 1,
};

function PoleRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>

      <span className="font-bold text-blue-700">
        {value} / 234
      </span>
    </div>
  );
}

export default function PoleCard() {
  const [data, setData] = useState<PoleData>(FALLBACK);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          `${API_BASE}?action=dashboard`,
          {
            cache: "no-store",
          }
        );

        const json = await res.json();

        if (json.success && json.data?.cache) {
          const cache = json.data.cache;

          const pairs = Number(cache.Current_Pairs ?? 0);

          setData({
            top: pairs,
            left: pairs,
            right: pairs,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, []);

  return (
    <section className="ctm-card">
      <h3 className="text-lg font-bold">
        🌳 Pole Status
      </h3>

      <div className="mt-4 space-y-3">
        <PoleRow
          icon="👑"
          label="Top Pole"
          value={data.top}
        />

        <PoleRow
          icon="⬅️"
          label="Left Pole"
          value={data.left}
        />

        <PoleRow
          icon="➡️"
          label="Right Pole"
          value={data.right}
        />
      </div>
    </section>
  );
}

