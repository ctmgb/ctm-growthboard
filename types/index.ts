

// FILE: types/index.ts

/**
 * ============================================================
 * CTM GrowthBoard
 * Shared Type Definitions
 * ------------------------------------------------------------
 * Canonical TypeScript interfaces shared across the frontend,
 * hooks, services and Google Apps Script integration.
 *
 * These types follow the frozen CTM specification.
 * ============================================================
 */

/* ============================================================
   Common
   ============================================================ */

export type Status = "Active" | "Inactive";

export type BusinessIdType =
  | "ID-1"
  | "ID-2"
  | "ID-3";

/* ============================================================
   Member
   ============================================================ */

export interface Member {
  memberId: string;

  businessId: BusinessIdType;

  panNumber: string;

  name: string;

  mobile: string;

  email?: string;

  sponsorId: string;

  placementParentId: string | null;

  status: Status;

  tribeStrength: number;

  weeklyPairs: number;

  weeklyIncome: number;
}

/* ============================================================
   Prospect
   ============================================================ */

export type ProspectStatus =
  | "New"
  | "Follow-up"
  | "Ready"
  | "Converted";

export interface Prospect {
  id: string;

  name: string;

  mobile: string;

  email?: string;

  status: ProspectStatus;

  followUpDate: string;

  notes?: string;

  assignedTo: string;
}

/* ============================================================
   Genealogy
   ============================================================ */

export interface GenealogyNode {
  memberId: string;

  businessId: BusinessIdType;

  sponsorId: string;

  placementParentId: string | null;

  leftChildId: string | null;

  rightChildId: string | null;

  level: number;
}

/* ============================================================
   Dashboard
   ============================================================ */

export interface DashboardMetrics {
  missionScore: number;

  executiveScore: number;

  weeklyIncome: number;

  weeklyCeiling: number;

  ceilingPercent: number;

  topPairs: number;

  leftPairs: number;

  rightPairs: number;

  topTarget: number;

  leftTarget: number;

  rightTarget: number;

  directLeaders: number;

  totalLeaders: number;

  tribeStrength: number;

  prospects: number;

  aiRecommendation: string;
}

/* ============================================================
   Leadership
   ============================================================ */

export interface LeadershipMetrics {
  currentRank: string;

  directLeaders: number;

  totalLeaders: number;

  leadershipScore: number;

  progressPercent: number;
}

/* ============================================================
   Mission
   ============================================================ */

export interface MissionProgress {
  businessId: BusinessIdType;

  completedPairs: number;

  targetPairs: number;

  completionPercent: number;

  remainingPairs: number;
}

/* ============================================================
   Earnings
   ============================================================ */

export interface EarningsSummary {
  businessId: BusinessIdType;

  weeklyIncome: number;

  weeklyCeiling: number;

  ceilingPercent: number;
}

/* ============================================================
   AI
   ============================================================ */

export type AIRecommendationCategory =
  | "Prospect"
  | "Registration"
  | "Activation"
  | "Leadership"
  | "Mission"
  | "Balance"
  | "BV"
  | "Follow-up"
  | "Earnings";

export interface AIRecommendation {
  id: string;

  priority: number;

  category: AIRecommendationCategory;

  title: string;

  description: string;

  expectedImpact: string;

  actionLabel: string;
}

/* ============================================================
   Notifications
   ============================================================ */

export interface NotificationItem {
  id: string;

  title: string;

  message: string;

  createdAt: string;

  read: boolean;
}

/* ============================================================
   API
   ============================================================ */

export interface ApiResponse<T> {
  success: boolean;

  message?: string;

  data: T;
}

/* ============================================================
   Executive Score
   ============================================================ */

export interface ExecutiveScore {
  mission: number;

  leadership: number;

  balance: number;

  earnings: number;

  overall: number;
}

/* ============================================================
   Weekly Progress
   ============================================================ */

export interface WeeklyProgress {
  week: string;

  registrations: number;

  activations: number;

  pairs: number;

  income: number;
}

/* ============================================================
   Pole Status
   ============================================================ */

export interface PoleStatus {
  top: MissionProgress;

  left: MissionProgress;

  right: MissionProgress;
}

/* ============================================================
   Placement
   ============================================================ */

export interface PlacementNode {
  memberId: string;

  parentId: string | null;

  side: "LEFT" | "RIGHT" | "ROOT";

  level: number;
}

/* ============================================================
   Authentication
   ============================================================ */

export interface AuthUser {
  memberId: string;

  name: string;

  panNumber: string;

  role: "USER" | "ADMIN";

  businessIds: BusinessIdType[];
}


