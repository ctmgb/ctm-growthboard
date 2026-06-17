
"use client";

export default function FloatingButton() {
  const handleClick = () => {
    alert(
      [
        "Quick Actions",
        "",
        "• ➕ Add Prospect",
        "• 👥 Register Member",
        "• 📞 Call Prospect",
        "• 💬 Schedule Follow-up",
        "• 🤖 View AI Task",
      ].join("\n")
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Open quick actions"
      className="fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
    >
      +
    </button>
  );
}

