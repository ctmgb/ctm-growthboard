
type MissionCardProps = {
  missionScore?: number;
  recommendedFocus?: string;
  potentialGain?: string;
};

export default function MissionCard({
  missionScore = 86,
  recommendedFocus = "Strengthen LR Branch",
  potentialGain = "+12 Pairs",
}: MissionCardProps) {
  const score = Math.max(0, Math.min(100, missionScore));

  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">🎯 Mission Control</h3>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {score}/100
        </span>
      </div>

      <div className="mt-4">
        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Recommended Focus
          </p>
          <p className="font-semibold text-slate-900">
            {recommendedFocus}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Potential Benefit
          </p>
          <p className="font-semibold text-emerald-600">
            {potentialGain}
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
      >
        View Details
      </button>
    </section>
  );
}

