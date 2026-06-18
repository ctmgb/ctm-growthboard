

// FILE: components/network/MemberCard.tsx

"use client";

import React from "react";
import {
  User,
  Phone,
  Crown,
  ArrowLeftCircle,
  ArrowRightCircle,
  TrendingUp,
  Users,
  Activity,
  ChevronRight,
} from "lucide-react";

export interface MemberCardProps {
  memberId?: string;
  name?: string;
  mobile?: string;
  businessType?: "ID-1" | "ID-2" | "ID-3";
  status?: "Active" | "Inactive";
  sponsorId?: string;
  placementParentId?: string;
  tribeSize?: number;
  weeklyPairs?: number;
  weeklyIncome?: number;
  onClick?: () => void;
}

export default function MemberCard({
  memberId = "100842",
  name = "Ravi Kumar",
  mobile = "+91 98765 43210",
  businessType = "ID-1",
  status = "Active",
  sponsorId = "100001",
  placementParentId = "100515",
  tribeSize = 126,
  weeklyPairs = 84,
  weeklyIncome = 75600,
  onClick,
}: MemberCardProps) {
  const businessIcon =
    businessType === "ID-1" ? (
      <Crown className="h-5 w-5 text-amber-500" />
    ) : businessType === "ID-2" ? (
      <ArrowLeftCircle className="h-5 w-5 text-blue-500" />
    ) : (
      <ArrowRightCircle className="h-5 w-5 text-purple-500" />
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-3xl border border-neutral-200 bg-white p-5 text-left shadow-sm transition-all hover:shadow-md active:scale-[0.99] dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
            <User className="h-6 w-6" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              {name}
            </h3>

            <p className="text-sm text-neutral-500">
              Member #{memberId}
            </p>
          </div>
        </div>

        <ChevronRight className="h-5 w-5 text-neutral-400" />
      </div>

      {/* Status */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-sm font-semibold dark:bg-neutral-800">
          {businessIcon}
          {businessType}
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === "Active"
              ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
              : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Contact */}
      <div className="mt-5 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
        <Phone className="h-4 w-4" />
        {mobile}
      </div>

      {/* Sponsor / Placement */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-neutral-50 p-3 dark:bg-neutral-800">
          <p className="text-xs uppercase text-neutral-500">
            Sponsor
          </p>

          <p className="mt-1 font-bold">
            #{sponsorId}
          </p>
        </div>

        <div className="rounded-2xl bg-neutral-50 p-3 dark:bg-neutral-800">
          <p className="text-xs uppercase text-neutral-500">
            Placement
          </p>

          <p className="mt-1 font-bold">
            #{placementParentId}
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-neutral-200 p-3 text-center dark:border-neutral-700">
          <Users className="mx-auto mb-2 h-5 w-5 text-blue-500" />

          <p className="text-xl font-bold">
            {tribeSize}
          </p>

          <p className="text-xs text-neutral-500">
            Tribe
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-3 text-center dark:border-neutral-700">
          <Activity className="mx-auto mb-2 h-5 w-5 text-green-500" />

          <p className="text-xl font-bold">
            {weeklyPairs}
          </p>

          <p className="text-xs text-neutral-500">
            Pairs
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-3 text-center dark:border-neutral-700">
          <TrendingUp className="mx-auto mb-2 h-5 w-5 text-amber-500" />

          <p className="text-xl font-bold">
            ₹{weeklyIncome.toLocaleString("en-IN")}
          </p>

          <p className="text-xs text-neutral-500">
            Weekly
          </p>
        </div>
      </div>
    </button>
  );
}

