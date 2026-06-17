
type ProgressCardProps = {
  current?: number;
  target?: number;
};

export default function ProgressCard({
  current = 322400,
  target = 630000,
}: ProgressCardProps) {
  const percentage = Math.min(
    100,
    Math.round((current / target) * 100)
  );

  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">💰 Weekly Progress</h3>
        <span className="font-semibold text-blue-600">
          {percentage}%
        </span>
      </div>

      <p className="mt-3 text-2xl font-bold">
        ₹{current.toLocaleString()}
      </p>

      <p className="text-sm text-slate-500">
        Target: ₹{target.toLocaleString()}
      </p>

      <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Progress toward weekly potential
      </p>
    </section>
  );
}

