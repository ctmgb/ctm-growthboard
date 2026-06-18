

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type FollowUp = {
  id: string;
  name: string;
  mobile: string;
  dueDate: string;
  priority: string;
  status: string;
};

export default function FollowupCard() {
  const [items, setItems] = useState<FollowUp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFollowUps() {
      try {
        const response = await fetch(
          `${API_BASE}?action=followups`,
          {
            cache: "no-store",
          }
        );

        const json = await response.json();

        if (json.success && Array.isArray(json.data)) {
          setItems(
            json.data.map((item: any) => ({
              id: item.Prospect_ID ?? crypto.randomUUID(),
              name: item.Name ?? "Unknown Prospect",
              mobile: item.Mobile ?? "",
              dueDate: item.Next_Followup_Date ?? "",
              priority: item.Priority ?? "Medium",
              status: item.Status ?? "Follow-up",
            }))
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadFollowUps();
  }, []);

  return (
    <section className="rounded-3xl bg-white p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          📞 Due Follow-ups
        </h2>

        <span className="text-sm text-slate-500">
          {loading ? "Loading..." : `${items.length} Due`}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {items.length === 0 && !loading && (
          <div className="rounded-2xl bg-slate-50 p-4 text-center text-slate-500">
            No follow-ups due today.
          </div>
        )}

        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.mobile}
                </p>
              </div>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                {item.priority}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-slate-500">
                📅 {item.dueDate || "Today"}
              </span>

              <button
                className="rounded-lg bg-blue-600 px-3 py-2 text-white transition hover:bg-blue-700"
                type="button"
              >
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

