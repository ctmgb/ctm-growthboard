"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type AITask = {
  Task_Title?: string;
  Task_Description?: string;
  Expected_Impact?: string;
  Priority?: string;
};

export default function AICoach() {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState<AITask | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAI() {
      try {
        const response = await fetch(
          `${API_BASE}?action=tasks`,
          {
            cache: "no-store",
          }
        );

        const json = await response.json();

        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setTask(json.data[0]);
        } else {
          setError("No AI recommendation available.");
        }
      } catch (err) {
        console.error(err);
        setError("Unable to connect to AI service.");
      } finally {
        setLoading(false);
      }
    }

    loadAI();
  }, []);

  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
        🤖 AI Coach
      </p>

      {loading ? (
        <h2 className="mt-3 text-xl font-bold">
          Loading recommendation...
        </h2>
      ) : error ? (
        <h2 className="mt-3 text-xl font-bold">
          {error}
        </h2>
      ) : (
        <>
          <h2 className="mt-3 text-2xl font-bold">
            {task?.Task_Title ?? "No recommendation"}
          </h2>

          <p className="mt-3 text-sm opacity-95">
            {task?.Task_Description ?? ""}
          </p>

          <div className="mt-4 space-y-1 text-sm">
            <p>
              🎯 Priority:{" "}
              <strong>{task?.Priority ?? "-"}</strong>
            </p>

            <p>
              💰 Expected Impact:{" "}
              <strong>{task?.Expected_Impact ?? "-"}</strong>
            </p>
          </div>
        </>
      )}

      <button
        type="button"
        className="mt-5 rounded-xl bg-white px-5 py-2 font-semibold text-blue-700 transition hover:scale-[1.02]"
      >
        TAKE ACTION
      </button>
    </section>
  );
}