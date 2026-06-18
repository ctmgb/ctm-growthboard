

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type Task = {
  id: string;
  text: string;
  completed: boolean;
  priority?: string;
  action?: string;
};

const fallbackTasks: Task[] = [
  {
    id: "1",
    text: "📞 Call Meena",
    completed: true,
    priority: "High",
  },
  {
    id: "2",
    text: "👥 Register Arun",
    completed: false,
    priority: "Critical",
  },
  {
    id: "3",
    text: "✅ Activate Ravi",
    completed: false,
    priority: "Medium",
  },
  {
    id: "4",
    text: "🎓 Mentor Leader #100842",
    completed: false,
    priority: "High",
  },
];

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(fallbackTasks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTasks() {
      try {
        const res = await fetch(
          `${API_BASE}?action=getDailyTasks`,
          {
            cache: "no-store",
          }
        );

        const json = await res.json();

        if (json.success && Array.isArray(json.data)) {
          const mapped: Task[] = json.data.map((item: any) => ({
            id: item.Task_ID ?? crypto.randomUUID(),
            text: item.Task_Title ?? "Untitled Task",
            completed:
              (item.Status ?? "").toLowerCase() === "completed",
            priority: item.Priority ?? "Medium",
            action: item.Action_Link ?? "",
          }));

          setTasks(mapped);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, []);

  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          📅 Today's Tasks
        </h3>

        <span className="text-sm text-slate-500">
          {loading ? "Loading..." : `${tasks.length} Items`}
        </span>
      </div>

      <ul className="mt-4 space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
          >
            <div className="flex flex-col">
              <span
                className={
                  task.completed
                    ? "text-slate-500 line-through"
                    : "font-medium text-slate-900"
                }
              >
                {task.text}
              </span>

              {task.priority && (
                <span className="mt-1 text-xs text-slate-400">
                  Priority: {task.priority}
                </span>
              )}
            </div>

            <span
              className={`rounded-full px-2 py-1 text-xs font-semibold ${
                task.completed
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {task.completed ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
