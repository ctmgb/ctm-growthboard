

// FILE: lib/config.ts

/**
 * ============================================================
 * CTM GrowthBoard
 * Global Runtime Configuration
 * ------------------------------------------------------------
 * Frontend : Next.js 16
 * Backend  : Google Apps Script Web App
 * Database : Google Sheets
 * ============================================================
 */

export const CTM_CONFIG = {
  app: {
    name: "CTM GrowthBoard",
    version: "1.0.0",
    environment:
      process.env.NEXT_PUBLIC_APP_ENV ?? "production",
  },

  api: {
    baseUrl:
      process.env.NEXT_PUBLIC_GAS_API_URL ?? "",

    timeout: 30000,

    headers: {
      "Content-Type": "application/json",
    },
  },

  limits: {
    businessIdsPerPAN: 3,

    weeklyCeilingPerBusinessId: 210000,

    combinedWeeklyCeiling: 630000,

    pairTargetPerBusinessId: 234,

    pairBV: 7500,

    weeklyActivationAmount: 10000,

    activationBV: 7500,
  },

  leadership: {
    level1: 10,
    level2: 100,
    level3: 400,
  },

  businessIds: {
    top: "ID-1",
    left: "ID-2",
    right: "ID-3",
  },

  sheets: {
    settings: "Settings",
    members: "Members",
    businessIds: "Business IDs",
    genealogy: "Genealogy",
    prospects: "Prospects",
    weeklyActivations: "Weekly Activations",
    bvLedger: "BV Ledger",
    pairLedger: "Pair Ledger",
    leadership: "Leadership",
    missionProgress: "Mission Progress",
    earnings: "Earnings",
    dailyAITasks: "Daily AI Tasks",
    notifications: "Notifications",
    leaderboard: "Leaderboard",
    auditLog: "Audit Log",
    referrals: "Referrals",
    apiLog: "API Log",
    aiRecommendationHistory:
      "AI Recommendation History",
    dashboardCache: "Dashboard Cache",
  },
} as const;

export default CTM_CONFIG;


