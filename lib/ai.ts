

// FILE: lib/ai.ts

/**
 * ============================================================
 * CTM GrowthBoard
 * AI Decision Engine
 * ------------------------------------------------------------
 * Implements the frozen CTM daily intelligence model.
 *
 * This module is PURE and deterministic. It does not perform
 * network requests. It consumes dashboard/business state and
 * produces prioritized recommendations.
 * ============================================================
 */

import {
  calculateBalanceHealth,
  calculateMissionProgress,
} from "./calculations";

export type AIRecommendationType =
  | "follow_up"
  | "registration"
  | "activation"
  | "balance"
  | "leadership"
  | "mission"
  | "earnings"
  | "bv";

export interface AIContext {
  prospectsDueToday: number;
  prospectsReady: number;

  inactiveBusinessIds: number;

  leftBV: number;
  rightBV: number;

  completedPairs: number;

  directLeaders: number;
  totalLeaders: number;

  weeklyIncome: number;
  weeklyCeiling: number;
}

export interface AIRecommendation {
  id: string;

  priority: number;

  type: AIRecommendationType;

  title: string;

  description: string;

  expectedImpact: string;

  action: string;
}

/* ============================================================
   Individual Rule Builders
   ============================================================
 */

function buildFollowUpRecommendation(
  context: AIContext
): AIRecommendation | null {
  if (context.prospectsDueToday <= 0) {
    return null;
  }

  return {
    id: "FOLLOW_UP",
    priority: 1,
    type: "follow_up",
    title: "Complete Prospect Follow-ups",
    description:
      "Several prospects require immediate follow-up today.",
    expectedImpact: `Up to ${context.prospectsDueToday} potential conversions`,
    action: "Open CRM",
  };
}

function buildRegistrationRecommendation(
  context: AIContext
): AIRecommendation | null {
  if (context.prospectsReady <= 0) {
    return null;
  }

  return {
    id: "REGISTER",
    priority: 2,
    type: "registration",
    title: "Register Ready Prospects",
    description:
      "Ready prospects should be converted into active distributors.",
    expectedImpact: `+${context.prospectsReady} registrations`,
    action: "Register Members",
  };
}

function buildActivationRecommendation(
  context: AIContext
): AIRecommendation | null {
  if (context.inactiveBusinessIds <= 0) {
    return null;
  }

  return {
    id: "ACTIVATE",
    priority: 3,
    type: "activation",
    title: "Activate Business IDs",
    description:
      "Inactive Business IDs are not participating in BV calculations.",
    expectedImpact: `Activate ${context.inactiveBusinessIds} Business ID(s)`,
    action: "View Activations",
  };
}

function buildBalanceRecommendation(
  context: AIContext
): AIRecommendation | null {
  const health = calculateBalanceHealth(
    context.leftBV,
    context.rightBV
  );

  if (health === "healthy") {
    return null;
  }

  return {
    id: "BALANCE",
    priority: 4,
    type: "balance",
    title: "Improve Binary Balance",
    description:
      "One branch is significantly weaker than the other.",
    expectedImpact:
      "Increase matched BV and accelerate pair completion",
    action: "Strengthen Weak Branch",
  };
}

function buildLeadershipRecommendation(
  context: AIContext
): AIRecommendation | null {
  if (context.directLeaders < 10) {
    return {
      id: "LEADER_10",
      priority: 5,
      type: "leadership",
      title: "Develop 10 Frontline Leaders",
      description:
        "The first duplication milestone has not yet been achieved.",
      expectedImpact: "Reach the 10 Leader milestone",
      action: "Mentor Leaders",
    };
  }

  if (context.totalLeaders < 100) {
    return {
      id: "LEADER_100",
      priority: 5,
      type: "leadership",
      title: "Expand Toward 100 Leaders",
      description:
        "Continue duplication through your frontline organization.",
      expectedImpact: "Progress toward 100 leaders",
      action: "Grow Team",
    };
  }

  if (context.totalLeaders < 400) {
    return {
      id: "LEADER_400",
      priority: 5,
      type: "leadership",
      title: "Expand Toward 400 Leaders",
      description:
        "Scale duplication while maintaining organizational balance.",
      expectedImpact: "Progress toward Master Tribe Leader",
      action: "Scale Leadership",
    };
  }

  return null;
}

function buildMissionRecommendation(
  context: AIContext
): AIRecommendation | null {
  const progress = calculateMissionProgress(
    context.completedPairs
  );

  if (progress >= 100) {
    return null;
  }

  return {
    id: "MISSION",
    priority: 6,
    type: "mission",
    title: "Advance 234-Pair Mission",
    description:
      "Continue building balanced pairs toward the mission target.",
    expectedImpact: `${Math.round(progress)}% mission completion`,
    action: "Review Mission",
  };
}

function buildEarningsRecommendation(
  context: AIContext
): AIRecommendation | null {
  const percentage =
    (context.weeklyIncome /
      context.weeklyCeiling) *
    100;

  if (percentage >= 95) {
    return null;
  }

  return {
    id: "EARNINGS",
    priority: 7,
    type: "earnings",
    title: "Increase Weekly Income",
    description:
      "Focus on activities that improve matched BV and pair generation.",
    expectedImpact:
      "Move closer to the weekly ceiling",
    action: "View Earnings",
  };
}

/* ============================================================
   Public API
   ============================================================
 */

export function generateRecommendations(
  context: AIContext
): AIRecommendation[] {
  const recommendations = [
    buildFollowUpRecommendation(context),
    buildRegistrationRecommendation(context),
    buildActivationRecommendation(context),
    buildBalanceRecommendation(context),
    buildLeadershipRecommendation(context),
    buildMissionRecommendation(context),
    buildEarningsRecommendation(context),
  ].filter(
    (
      item
    ): item is AIRecommendation => item !== null
  );

  return recommendations.sort(
    (a, b) => a.priority - b.priority
  );
}

export function getHighestImpactAction(
  context: AIContext
): AIRecommendation | null {
  const recommendations =
    generateRecommendations(context);

  if (recommendations.length === 0) {
    return null;
  }

  return recommendations[0];
}

export function getAIHeadline(
  context: AIContext
): string {
  const top =
    getHighestImpactAction(context);

  if (!top) {
    return "All major priorities are on track.";
  }

  return top.title;
}


