
type Task = {
  id: number;
  text: string;
  completed?: boolean;
};

type TaskListProps = {
  tasks?: Task[];
};

const defaultTasks: Task[] = [
  { id: 1, text: "📞 Call Meena", completed: true },
  { id: 2, text: "👥 Register Arun", completed: false },
  { id: 3, text: "✅ Activate Ravi", completed: false },
  { id: 4, text: "🎓 Mentor Leader #100842", completed: false },
];

export default function TaskList({
  tasks = defaultTasks,
}: TaskListProps) {
  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">📅 Today's Tasks</h3>
        <span className="text-sm text-slate-500">
          {tasks.length} Items
        </span>
      </div>

      <ul className="mt-4 space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
          >
            <span
              className={
                task.completed
                  ? "text-slate-500 line-through"
                  : "font-medium text-slate-900"
              }
            >
              {task.text}
            </span>

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

