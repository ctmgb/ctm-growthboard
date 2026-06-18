

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type Prospect = {
  id: string;
  name: string;
  mobile: string;
  status: string;
  priority: string;
};

function statusColor(status: string) {
  switch (status.toLowerCase()) {
    case "ready":
      return "bg-green-100 text-green-700";
    case "follow-up":
      return "bg-amber-100 text-amber-700";
    case "registered":
      return "bg-blue-100 text-blue-700";
    case "activated":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function ProspectCard() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProspects() {
      try {
        const response = await fetch(
          `${API_BASE}?action=prospects`,
          {
            cache: "no-store",
          }
        );

        const json = await response.json();

        if (json.success && Array.isArray(json.data)) {
          setProspects(
            json.data.map((item: any) => ({
              id:
                item.Prospect_ID ??
                crypto.randomUUID(),
              name:
                item.Name ??
                "Unnamed Prospect",
              mobile:
                item.Mobile ?? "",
              status:
                item.Status ?? "New",
              priority:
                item.Priority ?? "Medium",
            }))
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProspects();
  }, []);

  return (
    <section className="rounded-3xl bg-white p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          👥 Prospects
        </h2>

        <span className="text-sm text-slate-500">
          {loading
            ? "Loading..."
            : `${prospects.length} Records`}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {!loading &&
          prospects.length === 0 && (
            <div className="rounded-2xl bg-slate-50 p-6 text-center text-slate-500">
              No prospects found.
            </div>
          )}

        {prospects.map((prospect) => (
          <div
            key={prospect.id}
            className="rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  {prospect.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  📱 {prospect.mobile}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(
                  prospect.status
                )}`}
              >
                {prospect.status}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                type="button"
              >
                📞 Call
              </button>

              <button
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
                type="button"
              >
                💬 WhatsApp
              </button>

              <button
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                type="button"
              >
                👥 Register
              </button>
            </div>

            <div className="mt-3 text-xs text-slate-500">
              Priority: <strong>{prospect.priority}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

