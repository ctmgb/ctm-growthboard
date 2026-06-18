

// FILE: lib/calculations.ts

/**
 * ============================================================
 * CTM GrowthBoard
 * Business Calculations
 * ------------------------------------------------------------
 * Centralized calculation utilities implementing the frozen
 * CTM algorithm.
 *
 * DO NOT change these formulas without explicitly changing
 * the locked business rules.
 * ============================================================
 */

import {
  ACTIVATION_BV,
  BINARY_COMMISSION_RATE,
  DIRECT_LEADER_TARGET,
  EXPANSION_LEADER_TARGET,
  HEALTH_AMBER_THRESHOLD,
  HEALTH_GREEN_THRESHOLD,
  PAIR_COMMISSION,
  TARGET_PAIRS_PER_ID,
  TEAM_LEADER_TARGET,
  WEEKLY_CEILING_PER_ID,
  WEEKLY_CEILING_PER_PAN,
} from "./constants";

/* ============================================================
   BV & Pair Calculations
   ============================================================ */

/**
 * Returns matched BV (minimum of left/right BV).
 */
export function calculateMatchedBV(
  leftBV: number,
  rightBV: number
): number {
  return Math.min(
    Math.max(leftBV, 0),
    Math.max(rightBV, 0)
  );
}

/**
 * Binary commission before weekly ceiling.
 */
export function calculateBinaryCommission(
  matchedBV: number
): number {
  return matchedBV * BINARY_COMMISSION_RATE;
}

/**
 * Weekly payout after applying ₹2.10 lakh ceiling.
 */
export function calculateWeeklyPayout(
  matchedBV: number
): number {
  return Math.min(
    calculateBinaryCommission(matchedBV),
    WEEKLY_CEILING_PER_ID
  );
}

/**
 * Number of complete 7,500 BV pairs.
 */
export function calculatePairs(
  leftBV: number,
  rightBV: number
): number {
  return Math.floor(
    calculateMatchedBV(leftBV, rightBV) / ACTIVATION_BV
  );
}

/**
 * Pair earnings using ₹900 per pair.
 */
export function calculatePairIncome(
  pairCount: number
): number {
  return pairCount * PAIR_COMMISSION;
}

/* ============================================================
   Mission Progress
   ============================================================ */

export function calculateMissionProgress(
  completedPairs: number
): number {
  return Math.min(
    (completedPairs / TARGET_PAIRS_PER_ID) * 100,
    100
  );
}

export function calculateRemainingPairs(
  completedPairs: number
): number {
  return Math.max(
    TARGET_PAIRS_PER_ID - completedPairs,
    0
  );
}

/* ============================================================
   Weekly Ceiling
   ============================================================ */

export function calculateCeilingPercentage(
  income: number,
  ceiling: number = WEEKLY_CEILING_PER_ID
): number {
  if (ceiling <= 0) {
    return 0;
  }

  return Math.min((income / ceiling) * 100, 100);
}

export function calculateCombinedWeeklyIncome(
  id1: number,
  id2: number,
  id3: number
): number {
  return id1 + id2 + id3;
}

export function calculateCombinedCeilingProgress(
  id1: number,
  id2: number,
  id3: number
): number {
  return Math.min(
    ((id1 + id2 + id3) /
      WEEKLY_CEILING_PER_PAN) *
      100,
    100
  );
}

/* ============================================================
   Balance Health
   ============================================================ */

export type BalanceHealth =
  | "healthy"
  | "warning"
  | "critical";

export function calculateBalanceHealth(
  leftBV: number,
  rightBV: number
): BalanceHealth {
  const larger = Math.max(leftBV, rightBV);

  if (larger === 0) {
    return "healthy";
  }

  const ratio =
    Math.min(leftBV, rightBV) / larger;

  if (ratio >= HEALTH_GREEN_THRESHOLD) {
    return "healthy";
  }

  if (ratio >= HEALTH_AMBER_THRESHOLD) {
    return "warning";
  }

  return "critical";
}

/* ============================================================
   Leadership
   ============================================================ */

export function determineLeadershipRank(
  directLeaders: number,
  totalLeaders: number
): string {
  if (totalLeaders >= EXPANSION_LEADER_TARGET) {
    return "🥇 Level 1 Master Tribe Leader";
  }

  if (totalLeaders >= TEAM_LEADER_TARGET) {
    return "🥈 Level 2 Multiplier";
  }

  if (directLeaders >= DIRECT_LEADER_TARGET) {
    return "🥉 Level 3 Builder";
  }

  return "Emerging Leader";
}

export function calculateLeadershipProgress(
  totalLeaders: number
): number {
  return Math.min(
    (totalLeaders / EXPANSION_LEADER_TARGET) *
      100,
    100
  );
}

/* ============================================================
   Dashboard Scores
   ============================================================ */

export function calculateMissionScore(
  topPairs: number,
  leftPairs: number,
  rightPairs: number
): number {
  const averageProgress =
    (calculateMissionProgress(topPairs) +
      calculateMissionProgress(leftPairs) +
      calculateMissionProgress(rightPairs)) /
    3;

  return Math.round(averageProgress);
}

export function calculateExecutiveScore(
  missionScore: number,
  ceilingPercent: number,
  leadershipPercent: number,
  balancePercent: number
): number {
  const score =
    missionScore * 0.35 +
    ceilingPercent * 0.25 +
    leadershipPercent * 0.25 +
    balancePercent * 0.15;

  return Math.round(
    Math.max(0, Math.min(score, 100))
  );
}

