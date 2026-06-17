
type AICoachProps = {
  title?: string;
  recommendation?: string;
  benefit?: string;
  impact?: string;
};

export default function AICoach({
  title = "🤖 AI Coach",
  recommendation = "Build the LR Branch today",
  benefit = "+21 matched pairs",
  impact = "+₹18,900 projected weekly impact",
}: AICoachProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
        {title}
      </p>

      <h2 className="mt-2 text-2xl font-bold">
        {recommendation}
      </h2>

      <div className="mt-4 space-y-1 text-sm">
        <p>🎯 Estimated Benefit: {benefit}</p>
        <p>💰 Expected Impact: {impact}</p>
      </div>

      <button
        type="button"
        className="mt-5 rounded-xl bg-white px-5 py-2 font-semibold text-blue-700 transition hover:scale-[1.02]"
      >
        TAKE ACTION
      </button>
    </section>
  );
}

