

type HeaderProps = {
  title?: string;
  subtitle?: string;
  userName?: string;
};

export default function Header({
  title = "CTM GrowthBoard",
  subtitle = "AI Business Operating System",
  userName = "Raphael",
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
        <div>
          <h1 className="text-lg font-bold text-slate-900">{title}</h1>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-full p-2 transition hover:bg-slate-100"
          >
            🔔
          </button>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1">
            <span className="text-lg">👤</span>
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-900">
                {userName}
              </div>
              <div className="text-[10px] text-emerald-600">
                ● Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

