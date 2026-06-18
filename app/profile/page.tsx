

// FILE: app/profile/page.tsx

"use client";

import PageContainer from "@/components/layout/PageContainer";
import {
  User,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Crown,
  ArrowLeftCircle,
  ArrowRightCircle,
  TrendingUp,
  Users,
  Target,
  Edit3,
} from "lucide-react";

export default function ProfilePage() {
  const businessIds = [
    {
      label: "👑 ID-1 (Top Pole)",
      id: "100842",
      color: "bg-amber-500",
      icon: <Crown className="h-5 w-5" />,
    },
    {
      label: "⬅️ ID-2 (Left Pole)",
      id: "100843",
      color: "bg-blue-500",
      icon: <ArrowLeftCircle className="h-5 w-5" />,
    },
    {
      label: "➡️ ID-3 (Right Pole)",
      id: "100844",
      color: "bg-purple-500",
      icon: <ArrowRightCircle className="h-5 w-5" />,
    },
  ];

  return (
    <PageContainer>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-28">
        {/* Header */}
        <section className="rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                <User className="h-10 w-10" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider opacity-80">
                  Distributor Profile
                </p>

                <h1 className="text-3xl font-bold">
                  Raphael Raj
                </h1>

                <p className="mt-1 text-sm opacity-80">
                  Master Tribe Leader
                </p>
              </div>
            </div>

            <button className="rounded-xl bg-white/20 p-3 transition hover:bg-white/30">
              <Edit3 className="h-5 w-5" />
            </button>
          </div>
        </section>

        {/* Personal Information */}
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="mb-5 text-xl font-bold">
            Personal Information
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
              <Phone className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-xs text-neutral-500">Mobile</p>
                <p className="font-semibold">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-xs text-neutral-500">Email</p>
                <p className="font-semibold">
                  raphael@example.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
              <MapPin className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-xs text-neutral-500">Location</p>
                <p className="font-semibold">
                  Chennai, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800">
              <CreditCard className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-xs text-neutral-500">PAN</p>
                <p className="font-semibold">
                  ABCDE1234F
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business IDs */}
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="mb-5 text-xl font-bold">
            Linked Business IDs
          </h2>

          <div className="space-y-4">
            {businessIds.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4 dark:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-semibold">
                      {item.label}
                    </p>

                    <p className="text-sm text-neutral-500">
                      Business ID #{item.id}
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Active
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Performance */}
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <TrendingUp className="mb-3 h-6 w-6 text-green-600" />

            <p className="text-sm text-neutral-500">
              Weekly Income
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              ₹3,22,400
            </h3>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <Users className="mb-3 h-6 w-6 text-blue-600" />

            <p className="text-sm text-neutral-500">
              Tribe Strength
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              118
            </h3>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <Target className="mb-3 h-6 w-6 text-purple-600" />

            <p className="text-sm text-neutral-500">
              Mission Score
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              86 / 100
            </h3>
          </div>
        </section>

        {/* AI Goal */}
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/20">
          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">
            🤖 AI Goal
          </h2>

          <p className="mt-3 text-sm text-blue-600 dark:text-blue-400">
            Your next milestone is to strengthen the weaker business branch,
            develop additional frontline leaders, and continue progressing
            toward completing the three independent 234-pair missions while
            maximizing weekly earning potential.
          </p>
        </section>
      </div>
    </PageContainer>
  );
}

