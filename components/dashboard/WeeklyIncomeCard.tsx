
type WeeklyIncomeCardProps = {
  id1?: number;
  id2?: number;
  id3?: number;
};

export default function WeeklyIncomeCard({
  id1 = 148500,
  id2 = 82700,
  id3 = 91200,
}: WeeklyIncomeCardProps) {
  const total = id1 + id2 + id3;

  return (
    <section className="ctm-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">💰 Weekly Earnings</h3>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          Live
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex justify-between">
          <span>👑 ID-1</span>
          <span className="font-semibold">
            ₹{id1.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>⬅️ ID-2</span>
          <span className="font-semibold">
            ₹{id2.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>➡️ ID-3</span>
          <span className="font-semibold">
            ₹{id3.toLocaleString()}
          </span>
        </div>

        <hr className="border-slate-200" />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>
    </section>
  );
}

