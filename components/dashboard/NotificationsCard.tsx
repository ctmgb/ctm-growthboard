

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type Notification = {
  id: string;
  title: string;
  message: string;
  severity: "info" | "success" | "warning" | "critical";
};

const FALLBACK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "Welcome",
    message: "CTM GrowthBoard is connected successfully.",
    severity: "success",
  },
];

function getBadgeClass(severity: Notification["severity"]) {
  switch (severity) {
    case "success":
      return "bg-emerald-100 text-emerald-700";
    case "warning":
      return "bg-amber-100 text-amber-700";
    case "critical":
      return "bg-red-100 text-red-700";
    default:
      return "bg-blue-100 text-blue-700";
  }
}

export default function NotificationsCard() {
  const [notifications, setNotifications] = useState<Notification[]>(
    FALLBACK_NOTIFICATIONS
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotifications() {
      try {
        const response = await fetch(
          `${API_BASE}?action=notifications`,
          {
            cache: "no-store",
          }
        );

        const json = await response.json();

        if (json.success && Array.isArray(json.data)) {
          const mapped: Notification[] = json.data.map((item: any) => ({
            id:
              item.Notification_ID ??
              crypto.randomUUID(),
            title:
              item.Title ??
              item.Notification_Title ??
              "Notification",
            message:
              item.Message ??
              item.Notification_Message ??
              "",
            severity:
              (
                item.Severity ??
                "info"
              ).toLowerCase() as Notification["severity"],
          }));

          setNotifications(
            mapped.length > 0
              ? mapped
              : FALLBACK_NOTIFICATIONS
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadNotifications();
  }, []);

  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          🔔 Notifications
        </h3>

        <span className="text-sm text-slate-500">
          {loading
            ? "Loading..."
            : `${notifications.length} Items`}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">
                  {notification.title}
                </h4>

                <p className="mt-1 text-sm text-slate-600">
                  {notification.message}
                </p>
              </div>

              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${getBadgeClass(
                  notification.severity
                )}`}
              >
                {notification.severity.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

