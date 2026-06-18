

// FILE: app/admin/page.tsx

"use client";

import PageContainer from "@/components/layout/PageContainer";
import {
  ShieldCheck,
  Users,
  UserPlus,
  GitBranch,
  BarChart3,
  Settings,
  Database,
  Bell,
  Activity,
  Trophy,
  Search,
  ArrowRight,
} from "lucide-react";

export default function AdminPage() {
  const adminCards = [
    {
      title: "Members Registry",
      description: "Search, view and manage distributors by ID, PAN or mobile.",
      icon: <Users className="h-6 w-6" />,
      accent: "bg-blue-500",
      count: "1,284",
    },
    {
      title: "Prospect Management",
      description: "Track CRM pipeline and pending conversions.",
      icon: <UserPlus className="h-6 w-6" />,
      accent: "bg-green-500",
      count: "186",
    },
    {
      title: "Placement Engine",
      description: "Review logical placements and genealogy integrity.",
      icon: <GitBranch className="h-6 w-6" />,
      accent: "bg-purple-500",
      count: "12",
    },
    {
      title: "Analytics",
      description: "View registrations, BV, earnings and growth metrics.",
      icon: <BarChart3 className="h-6 w-6" />,
      accent: "bg-orange-500",
      count: "Live",
    },
    {
      title: "Notifications",
      description: "Manage alerts and system announcements.",
      icon: <Bell className="h-6 w-6" />,
      accent: "bg-red-500",
      count: "8",
    },
    {
      title: "System Settings",
      description: "Global configuration and application controls.",
      icon: <Settings className="h-6 w-6" />,
      accent: "bg-slate-600",
      count: "Ready",
    },
  ];

  return (
    <PageContainer>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-28">
        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-r from-slate-800 to-slate-950 p-6 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8" />

            <div>
              <p className="text-sm uppercase tracking-wider opacity-80">
                Administrator Console
              </p>

              <h1 className="text-3xl font-bold">
                CTM Control Center
              </h1>
            </div>
          </div>

          <p className="mt-4 text-sm opacity-90">
            Centralized management interface for members, genealogy,
            CRM, analytics, AI operations and platform administration.
          </p>
        </section>

        {/* Search */}
        <section className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 dark:border-neutral-700">
            <Search className="h-5 w-5 text-neutral-500" />

            <input
              type="text"
              placeholder="Search by Member ID, PAN or Mobile Number..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <Users className="mb-3 h-6 w-6 text-blue-600" />

            <p className="text-sm text-neutral-500">
              Total Members
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              1,284
            </h2>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <UserPlus className="mb-3 h-6 w-6 text-green-600" />

            <p className="text-sm text-neutral-500">
              Prospects
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              186
            </h2>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <Activity className="mb-3 h-6 w-6 text-purple-600" />

            <p className="text-sm text-neutral-500">
              Active IDs
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              92%
            </h2>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <Database className="mb-3 h-6 w-6 text-amber-600" />

            <p className="text-sm text-neutral-500">
              API Status
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              Online
            </h2>
          </div>
        </section>

        {/* Admin Modules */}
        <section className="grid gap-5 md:grid-cols-2">
          {adminCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${card.accent}`}
                >
                  {card.icon}
                </div>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold dark:bg-neutral-800">
                  {card.count}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-bold">
                {card.title}
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                {card.description}
              </p>

              <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                Open Module
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </section>

        {/* Leaderboard Snapshot */}
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center gap-3">
            <Trophy className="h-7 w-7 text-amber-500" />

            <h2 className="text-2xl font-bold">
              Executive Snapshot
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
              <span>Top Recruiter</span>
              <strong>#100842</strong>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
              <span>Top Weekly Earner</span>
              <strong>₹2,04,800</strong>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
              <span>Fastest Growing Tribe</span>
              <strong>+28 Members</strong>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
              <span>System Health</span>
              <strong className="text-green-600">
                Excellent
              </strong>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
          <h2 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
            🤖 AI Administrative Recommendation
          </h2>

          <p className="mt-3 text-sm text-emerald-700 dark:text-emerald-400">
            Review pending prospect conversions and inactive Business IDs
            first. These actions are projected to produce the highest
            improvement in overall network growth, leadership progression,
            and weekly BV generation.
          </p>
        </section>
      </div>
    </PageContainer>
  );
}


