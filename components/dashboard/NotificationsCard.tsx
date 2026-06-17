
type Notification = {
  id: number;
  icon: string;
  message: string;
};

type NotificationsCardProps = {
  notifications?: Notification[];
};

const defaultNotifications: Notification[] = [
  {
    id: 1,
    icon: "🟠",
    message: "5 follow-ups due today",
  },
  {
    id: 2,
    icon: "🔴",
    message: "LR branch imbalance detected",
  },
  {
    id: 3,
    icon: "🟢",
    message: "New leader activated",
  },
  {
    id: 4,
    icon: "🏆",
    message: "100 pairs milestone reached",
  },
];

export default function NotificationsCard({
  notifications = defaultNotifications,
}: NotificationsCardProps) {
  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">🔔 Notifications</h3>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold">
          {notifications.length}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
          >
            <span className="text-xl">{item.icon}</span>

            <span className="text-sm text-slate-700">
              {item.message}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

