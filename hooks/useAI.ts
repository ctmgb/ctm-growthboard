

// FILE: hooks/useAI.ts

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export type AIActionType =
  | "Prospect"
  | "Registration"
  | "Activation"
  | "Leadership"
  | "Balance"
  | "Mission"
  | "BV"
  | "Follow-up";

export interface AIRecommendation {
  id: string;
  priority: number;
  title: string;
  description: string;
  expectedImpact: string;
  category: AIActionType;
  actionLabel: string;
}

const DEFAULT_RECOMMENDATIONS: AIRecommendation[] = [
  {
    id: "AI-001",
    priority: 1,
    title: "Strengthen LR Branch",
    description:
      "The Left-Right branch is lagging behind target pace. Building this branch will improve binary balance and accelerate pair completion.",
    expectedImpact: "+8 Matched Pairs",
    category: "Balance",
    actionLabel: "Build LR Branch",
  },
  {
    id: "AI-002",
    priority: 2,
    title: "Register Arun",
    description:
      "Arun is ready for onboarding. Completing registration will expand your frontline leadership.",
    expectedImpact: "+1 Active Leader",
    category: "Registration",
    actionLabel: "Register Prospect",
  },
  {
    id: "AI-003",
    priority: 3,
    title: "Activate Ravi",
    description:
      "Weekly activation will contribute fresh BV and improve matching potential.",
    expectedImpact: "+7,500 BV",
    category: "Activation",
    actionLabel: "Activate ID",
  },
  {
    id: "AI-004",
    priority: 4,
    title: "Follow Up with Meena",
    description:
      "Today's follow-up has a high probability of conversion based on CRM history.",
    expectedImpact: "+1 Conversion",
    category: "Follow-up",
    actionLabel: "Call Prospect",
  },
];

export interface UseAIResult {
  loading: boolean;
  refreshing: boolean;
  error: string | null;

  recommendations: AIRecommendation[];
  topRecommendation: AIRecommendation | null;

  refresh: () => Promise<void>;

  getByCategory: (
    category: AIActionType
  ) => AIRecommendation[];

  getHighestPriority: () => AIRecommendation | null;
}

export default function useAI(): UseAIResult {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [recommendations, setRecommendations] = useState<
    AIRecommendation[]
  >(DEFAULT_RECOMMENDATIONS);

  const loadRecommendations = useCallback(async () => {
    try {
      setError(null);

      /**
       * Production Integration:
       *
       * const response = await fetch("/api/ai");
       * const data = await response.json();
       * setRecommendations(data.recommendations);
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 300)
      );

      const sorted = [...DEFAULT_RECOMMENDATIONS].sort(
        (a, b) => a.priority - b.priority
      );

      setRecommendations(sorted);
    } catch (err) {
      console.error(err);
      setError("Failed to load AI recommendations.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadRecommendations();
  }, [loadRecommendations]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    await loadRecommendations();
  }, [loadRecommendations]);

  const getByCategory = useCallback(
    (category: AIActionType) =>
      recommendations.filter(
        (item) => item.category === category
      ),
    [recommendations]
  );

  const getHighestPriority = useCallback(() => {
    if (recommendations.length === 0) {
      return null;
    }

    return [...recommendations].sort(
      (a, b) => a.priority - b.priority
    )[0];
  }, [recommendations]);

  return useMemo(
    () => ({
      loading,
      refreshing,
      error,

      recommendations,

      topRecommendation: getHighestPriority(),

      refresh,

      getByCategory,

      getHighestPriority,
    }),
    [
      loading,
      refreshing,
      error,
      recommendations,
      refresh,
      getByCategory,
      getHighestPriority,
    ]
  );
}

