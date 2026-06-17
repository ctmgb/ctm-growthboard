

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
        <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-xl font-bold">CTM GrowthBoard</h1>
            <p className="text-xs text-slate-300">Business Operating System</p>
          </div>
          <div className="text-2xl">🔔</div>
        </div>
      </header>

      <div className="mx-auto flex max-w-md flex-col gap-4 p-4">

        {/* AI Coach */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-xl">
          <div className="text-sm font-semibold opacity-90">
            🤖 AI COACH
          </div>

          <h2 className="mt-2 text-2xl font-bold">
            Build LR Branch Today
          </h2>

          <p className="mt-2 text-sm">
            Estimated Benefit: +21 matched pairs
          </p>

          <p className="text-sm">
            Projected Weekly Impact: ₹18,900
          </p>

          <button className="mt-4 rounded-xl bg-white px-4 py-2 font-semibold text-blue-700">
            TAKE ACTION
          </button>
        </section>

        {/* Weekly Progress */}
        <section className="rounded-3xl bg-white p-5 shadow">
          <div className="flex items-center justify-between">
            <span className="font-semibold">💰 Weekly Progress</span>
            <span className="font-bold text-green-600">51%</span>
          </div>

          <div className="mt-3 h-3 w-full rounded-full bg-slate-200">
            <div className="h-3 w-1/2 rounded-full bg-green-500"></div>
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <span>₹3,22,400</span>
            <span>₹6,30,000</span>
          </div>
        </section>

        {/* Pole Status */}
        <section className="rounded-3xl bg-white p-5 shadow">
          <h3 className="mb-4 text-lg font-bold">
            🌳 Pole Status
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>👑 Top Pole</span>
              <span className="font-semibold">165 / 234</span>
            </div>

            <div className="flex justify-between">
              <span>⬅️ Left Pole</span>
              <span className="font-semibold">82 / 234</span>
            </div>

            <div className="flex justify-between">
              <span>➡️ Right Pole</span>
              <span className="font-semibold">91 / 234</span>
            </div>
          </div>
        </section>

        {/* Today's Priorities */}
        <section className="rounded-3xl bg-white p-5 shadow">
          <h3 className="mb-4 text-lg font-bold">
            📋 Today's Priorities
          </h3>

          <ul className="space-y-2 text-sm">
            <li>✅ Call Meena</li>
            <li>✅ Register Arun</li>
            <li>✅ Activate Ravi</li>
            <li>✅ Mentor Leader #100842</li>
          </ul>
        </section>

        {/* Quick Actions */}
        <section className="rounded-3xl bg-white p-5 shadow">
          <h3 className="mb-4 text-lg font-bold">
            ⚡ Quick Actions
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl bg-blue-600 p-3 font-semibold text-white">
              ➕ Prospect
            </button>

            <button className="rounded-xl bg-emerald-600 p-3 font-semibold text-white">
              👥 Register
            </button>

            <button className="rounded-xl bg-orange-500 p-3 font-semibold text-white">
              📞 Call
            </button>

            <button className="rounded-xl bg-purple-600 p-3 font-semibold text-white">
              💬 WhatsApp
            </button>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white shadow-2xl">
        <div className="mx-auto flex max-w-md justify-around py-3 text-sm font-medium">
          <div>🏠<br />Home</div>
          <div>🌳<br />Network</div>
          <div>👥<br />CRM</div>
          <div>📊<br />Insights</div>
          <div>☰<br />More</div>
        </div>
      </nav>
    </main>
  );
}

