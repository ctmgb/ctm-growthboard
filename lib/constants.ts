

// FILE: lib/constants.ts

/**
 * ============================================================
 * CTM GrowthBoard
 * Global Constants
 * ------------------------------------------------------------
 * Locked business constants based on the frozen CTM Algorithm.
 * These values MUST NOT be modified without an approved
 * algorithm change.
 * ============================================================
 */

/* ============================================================
   Application
   ============================================================ */

export const APP_NAME = "CTM GrowthBoard";
export const APP_VERSION = "1.0.0";

/* ============================================================
   CTM Locked Business Rules
   ============================================================ */

export const BUSINESS_IDS_PER_PAN = 3;

export const BUSINESS_ID_TOP = "ID-1";
export const BUSINESS_ID_LEFT = "ID-2";
export const BUSINESS_ID_RIGHT = "ID-3";

export const BUSINESS_IDS = [
  BUSINESS_ID_TOP,
  BUSINESS_ID_LEFT,
  BUSINESS_ID_RIGHT,
] as const;

/* ============================================================
   Financial Constants
   ============================================================ */

export const WEEKLY_PURCHASE_AMOUNT = 10_000;

export const ACTIVATION_BV = 7_500;

export const BV_PER_PAIR = 7_500;

export const PAIR_COMMISSION = 900;

export const BINARY_COMMISSION_RATE = 0.12;

/* ============================================================
   Weekly Ceiling
   ============================================================ */

export const WEEKLY_CEILING_PER_ID = 210_000;

export const WEEKLY_CEILING_PER_PAN = 630_000;

/* ============================================================
   Mission
   ============================================================ */

export const TARGET_PAIRS_PER_ID = 234;

export const TARGET_MATCHED_BV_PER_ID = 1_750_000;

/* ============================================================
   Leadership Model
   ============================================================ */

export const DIRECT_LEADER_TARGET = 10;

export const TEAM_LEADER_TARGET = 100;

export const EXPANSION_LEADER_TARGET = 400;

/* ============================================================
   Balance Health
   ============================================================ */

export const HEALTH_GREEN_THRESHOLD = 0.9;

export const HEALTH_AMBER_THRESHOLD = 0.7;

/* ============================================================
   Status Values
   ============================================================ */

export const MEMBER_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

export const PROSPECT_STATUS = {
  NEW: "New",
  FOLLOW_UP: "Follow-up",
  READY: "Ready",
  CONVERTED: "Converted",
} as const;

/* ============================================================
   Leadership Ranks
   ============================================================ */

export const LEADERSHIP_RANK = {
  BUILDER: "🥉 Level 3 Builder",
  MULTIPLIER: "🥈 Level 2 Multiplier",
  MASTER: "🥇 Level 1 Master Tribe Leader",
} as const;

/* ============================================================
   Mission Labels
   ============================================================ */

export const MISSION_LABELS = {
  TOP: "Top Pole",
  LEFT: "Left Pole",
  RIGHT: "Right Pole",
} as const;

/* ============================================================
   Branch Labels
   ============================================================ */

export const BRANCHES = {
  LL: "Left-Left",
  LR: "Left-Right",
  RL: "Right-Left",
  RR: "Right-Right",
} as const;

/* ============================================================
   Dashboard Colors
   ============================================================ */

export const COLORS = {
  SUCCESS: "#16A34A",
  WARNING: "#F59E0B",
  DANGER: "#DC2626",
  PRIMARY: "#2563EB",
  SECONDARY: "#7C3AED",
} as const;

/* ============================================================
   Navigation
   ============================================================ */

export const PRIMARY_NAVIGATION = [
  "Home",
  "Network",
  "CRM",
  "Insights",
  "More",
] as const;

export const MORE_MENU = [
  "Mission",
  "Leadership",
  "Earnings",
  "Profile",
  "Admin",
] as const;

/* ============================================================
   AI Recommendation Categories
   ============================================================ */

export const AI_CATEGORIES = [
  "Prospect",
  "Registration",
  "Activation",
  "Balance",
  "Mission",
  "Leadership",
  "BV",
  "Follow-up",
] as const;

/* ============================================================
   Sheet Names (Frozen)
   ============================================================ */

export const SHEET_NAMES = {
  SETTINGS: "Settings",
  MEMBERS: "Members",
  BUSINESS_IDS: "Business IDs",
  GENEALOGY: "Genealogy",
  PROSPECTS: "Prospects",
  WEEKLY_ACTIVATIONS: "Weekly Activations",
  BV_LEDGER: "BV Ledger",
  PAIR_LEDGER: "Pair Ledger",
  LEADERSHIP: "Leadership",
  MISSION_PROGRESS: "Mission Progress",
  EARNINGS: "Earnings",
  DAILY_AI_TASKS: "Daily AI Tasks",
  NOTIFICATIONS: "Notifications",
  LEADERBOARD: "Leaderboard",
  AUDIT_LOG: "Audit Log",
  REFERRALS: "Referrals",
  API_LOG: "API Log",
  AI_RECOMMENDATION_HISTORY: "AI Recommendation History",
  DASHBOARD_CACHE: "Dashboard Cache",
} as const;


