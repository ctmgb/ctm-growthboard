

// FILE: components/network/PlacementView.tsx

"use client";

import React from "react";
import {
  Crown,
  ArrowLeftCircle,
  ArrowRightCircle,
  ShieldCheck,
  MapPin,
  Users,
  GitBranch,
} from "lucide-react";

type HealthStatus = "healthy" | "warning" | "critical";

interface BranchData {
  label: string;
  title: string;
  members: number;
  health: HealthStatus;
}

interface PlacementViewProps {
  sponsorId?: string;
  placementParentId?: string;
  topId?: string;
  leftId?: string;
  rightId?: string;
  branches?: BranchData[];
}

const defaultBranches: BranchData[] = [
  {
    label: "LL",
    title: "Left-Left",
    members: 52,
    health: "healthy",
  },
  {
    label: "LR",
    title: "Left-Right",
    members: 37,
    health: "warning",
  },
  {
    label: "RL",
    title: "Right-Left",
    members: 48,
    health: "healthy",
  },
  {
    label: "RR",
    title: "Right-Right",
    members: 29,
    health: "critical",
  },
];

function getHealthStyle(status: HealthStatus) {
  switch (status) {
    case "healthy":
      return {
        text: "Healthy",
        dot: "bg-green-500",
        badge:
          "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300",
      };

    case "warning":
      return {
        text: "Needs Attention",
        dot: "bg-amber-500",
        badge:
          "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300",
      };

    default:
      return {
        text: "Critical",
        dot: "bg-red-500",
        badge:
          "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300",
      };
  }
}

export default function PlacementView({
  sponsorId = "100001",
  placementParentId = "100515",
  topId = "100842",
  leftId = "100843",
  rightId = "100844",
  branches = defaultBranches,
}: PlacementViewProps) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
            Placement Overview
          </h2>
          <p className="text-sm text-neutral-500">
            Automatic CTM logical placement with immutable genealogy.
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
          Read Only
        </span>
      </div>

      {/* Sponsor / Placement */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-700">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Users className="h-4 w-4" />
            Sponsor ID
          </div>

          <div className="mt-2 text-2xl font-bold">
            #{sponsorId}
          </div>

          <p className="mt-1 text-xs text-neutral-500">
            Permanent referral relationship.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-700">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <MapPin className="h-4 w-4" />
            Placement Parent
          </div>

          <div className="mt-2 text-2xl font-bold">
            #{placementParentId}
          </div>

          <p className="mt-1 text-xs text-neutral-500">
            Assigned automatically by the Placement Engine.
          </p>
        </div>
      </div>

      {/* Business IDs */}
      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          <GitBranch className="h-4 w-4" />
          Three Business IDs
        </div>

        <div className="flex flex-col items-center">
          {/* Top Pole */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-yellow-100 p-4 dark:bg-yellow-900/20">
              <Crown className="h-8 w-8 text-yellow-600" />
            </div>

            <div className="mt-2 text-sm font-semibold">
              👑 ID-1 (Top Pole)
            </div>

            <div className="text-xl font-bold">
              {topId}
            </div>
          </div>

          <div className="my-5 h-8 w-px bg-neutral-300 dark:bg-neutral-700" />

          {/* Left / Right */}
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="rounded-2xl border border-neutral-200 p-4 text-center dark:border-neutral-700">
              <ArrowLeftCircle className="mx-auto mb-2 h-8 w-8 text-blue-600" />

              <div className="text-sm font-semibold">
                ⬅️ ID-2
              </div>

              <div className="text-xl font-bold">
                {leftId}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-4 text-center dark:border-neutral-700">
              <ArrowRightCircle className="mx-auto mb-2 h-8 w-8 text-purple-600" />

              <div className="text-sm font-semibold">
                ➡️ ID-3
              </div>

              <div className="text-xl font-bold">
                {rightId}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Branch Health */}
      <div className="mt-8">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-500">
          Branch Health
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {branches.map((branch) => {
            const style = getHealthStyle(branch.health);

            return (
              <div
                key={branch.label}
                className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-700"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">
                    {branch.label}
                  </span>

                  <span
                    className={`flex items-center gap-2 rounded-full px-2 py-1 text-xs font-semibold ${style.badge}`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${style.dot}`}
                    />
                    {style.text}
                  </span>
                </div>

                <div className="mt-2 text-sm text-neutral-500">
                  {branch.title}
                </div>

                <div className="mt-4 text-3xl font-bold">
                  {branch.members}
                </div>

                <div className="text-xs text-neutral-500">
                  Active Members
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Integrity Card */}
      <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/10">
        <div className="flex gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 text-green-600" />

          <div>
            <h4 className="font-semibold text-green-700 dark:text-green-300">
              Genealogy Integrity Protected
            </h4>

            <p className="mt-1 text-sm text-green-700 dark:text-green-400">
              Sponsor relationships are permanent. Placement is handled only by
              the CTM Placement Engine and existing genealogy positions cannot
              be modified or reassigned.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

