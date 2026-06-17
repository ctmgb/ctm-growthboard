
type Metric = {
  label: string;
  value: number;
};

type ExecutiveScoreProps = {
  metrics?: Metric[];
};

const defaultMetrics: Metric[] = [
  { label: "🎯 Mission", value: 86 },
  { label: "👥 Leadership", value: 78 },
  { label: "⚖️ Balance", value: 82 },
  { label: "🔄 234 Mission", value: 71 },
  { label: "💰 Weekly Income", value: 51 },
];

export default function ExecutiveScore({
  metrics = defaultMetrics,
}: ExecutiveScoreProps) {
  return (
    <section className="ctm-card">
      <h3 className="text-lg font-bold">🏆 Executive Scorecard</h3>

      <div className="mt-5 space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium">
                {metric.label}
              </span>

              <span className="text-sm font-semibold">
                {metric.value}%
              </span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                style={{
                  width: `${Math.max(
                    0,
                    Math.min(metric.value, 100)
                  )}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

