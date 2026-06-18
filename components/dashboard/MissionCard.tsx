

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

const TOTAL_PAIRS = 234;

type MissionState = {
  completedPairs: number;
  remainingPairs: number;
  completionPercentage: number;
};

const FALLBACK: MissionState = {
  completedPairs: 1,
  remainingPairs: 233,
  completionPercentage: 0.43,
};

export default function MissionCard() {
  const [mission, setMission] =
    useState<MissionState>(FALLBACK);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadMission() {
      try {
        const response = await fetch(
          `${API_BASE}?action=dashboard`,
          {
            cache: "no-store",
          }
        );

        const json = await response.json();

        if (json.success && json.data?.pairs) {
          const pairs = json.data.pairs;

          setMission({
            completedPairs:
              Number(
                pairs.completedPairs ?? 0
              ),

            remainingPairs:
              Number(
                pairs.remainingPairs ??
                  TOTAL_PAIRS
              ),

            completionPercentage:
              Number(
                pairs.missionPercentage ?? 0
              ),
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadMission();
  }, []);

  const width = Math.min(
    mission.completionPercentage,
    100
  );

  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          🎯 234-Pair Mission
        </h3>

        <span className="text-sm text-slate-500">
          {loading
            ? "Loading..."
            : `${mission.completionPercentage.toFixed(
                2
              )}%`}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-3xl font-extrabold">
              {mission.completedPairs}
            </div>

            <div className="text-sm text-slate-500">
              Completed Pairs
            </div>
          </div>

          <div className="text-right">
            <div className="text-xl font-bold text-orange-600">
              {mission.remainingPairs}
            </div>

            <div className="text-sm text-slate-500">
              Remaining
            </div>
          </div>
        </div>

        <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-500"
            style={{
              width: `${width}%`,
            }}
          />
        </div>

        <div className="mt-4 rounded-2xl bg-blue-50 p-3">
          <p className="text-sm font-semibold text-blue-800">
            🚀 Recommended Focus
          </p>

          <p className="mt-1 text-sm text-slate-700">
            Strengthen the weaker branch to
            accelerate balanced pair completion.
          </p>
        </div>
      </div>
    </section>
  );
}

