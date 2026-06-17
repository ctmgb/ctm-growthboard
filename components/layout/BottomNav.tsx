

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/network", label: "Network", icon: "🌳" },
  { href: "/crm", label: "CRM", icon: "👥" },
  { href: "/insights", label: "Insights", icon: "📊" },
  { href: "/profile", label: "More", icon: "☰" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-md items-center justify-around py-2">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-xs ${
                active
                  ? "font-semibold text-blue-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

