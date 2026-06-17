
type PoleCardProps = {
  top?: number;
  left?: number;
  right?: number;
  target?: number;
};

export default function PoleCard({
  top = 165,
  left = 82,
  right = 91,
  target = 234,
}: PoleCardProps) {
  const rows = [
    { label: "👑 Top Pole", value: top },
    { label: "⬅️ Left Pole", value: left },
    { label: "➡️ Right Pole", value: right },
  ];

  return (
    <section className="ctm-card">
      <h3 className="mb-4 text-lg font-bold">🌳 Pole Status</h3>

      <div className="space-y-4">
        {rows.map((row) => {
          const percentage = Math.min(
            100,
            Math.round((row.value / target) * 100)
          );

          return (
            <div key={row.label}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium">
                  {row.label}
                </span>
                <span className="text-sm font-semibold">
                  {row.value} / {target}
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Goal: Complete 234 pairs for each mission.
      </p>
    </section>
  );
}

