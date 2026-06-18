

// FILE: hooks/useDashboard.ts

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

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

  prospects: number;
  activeMembers: number;
  tribeStrength: number;

  directLeaders: number;
  totalLeaders: number;

  aiRecommendation: string;
}

const DEFAULT_DATA: DashboardMetrics = {
  missionScore: 86,
  executiveScore: 82,

  weeklyIncome: 322400,
  weeklyCeiling: 630000,
  ceilingPercent: 51,

  topPairs: 165,
  leftPairs: 82,
  rightPairs: 91,

  topTarget: 234,
  leftTarget: 234,
  rightTarget: 234,

  prospects: 18,
  activeMembers: 126,
  tribeStrength: 118,

  directLeaders: 10,
  totalLeaders: 118,

  aiRecommendation:
    "Strengthen the LR branch to maximize pair completion and weekly income.",
};

export interface UseDashboardResult {
  loading: boolean;
  error: string | null;
  refreshing: boolean;
  metrics: DashboardMetrics;
  refresh: () => Promise<void>;
}

export default function useDashboard(): UseDashboardResult {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [metrics, setMetrics] =
    useState<DashboardMetrics>(DEFAULT_DATA);

  const loadDashboard = useCallback(async () => {
    try {
      setError(null);

      /**
       * Replace with production API:
       *
       * const response = await fetch("/api/dashboard");
       * const json = await response.json();
       * setMetrics(json);
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 300)
      );

      setMetrics(DEFAULT_DATA);
    } catch (err) {
      console.error(err);
      setError("Unable to load dashboard.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    await loadDashboard();
  }, [loadDashboard]);

  const value = useMemo(
    () => ({
      loading,
      error,
      refreshing,
      metrics,
      refresh,
    }),
    [loading, error, refreshing, metrics, refresh]
  );

  return value;
}

