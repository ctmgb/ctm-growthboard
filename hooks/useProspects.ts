

// FILE: hooks/useProspects.ts

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export type ProspectStatus =
  | "New"
  | "Follow-up"
  | "Ready"
  | "Converted";

export interface Prospect {
  id: string;
  name: string;
  mobile: string;
  status: ProspectStatus;
  followUpDate: string;
  assignedTo: string;
  notes: string;
}

const DEFAULT_PROSPECTS: Prospect[] = [
  {
    id: "P1001",
    name: "Meena",
    mobile: "+91 9876543201",
    status: "Follow-up",
    followUpDate: "2026-06-19",
    assignedTo: "100842",
    notes: "Interested in joining. Call today.",
  },
  {
    id: "P1002",
    name: "Arun",
    mobile: "+91 9876543202",
    status: "Ready",
    followUpDate: "2026-06-19",
    assignedTo: "100842",
    notes: "Ready for registration.",
  },
  {
    id: "P1003",
    name: "Ravi",
    mobile: "+91 9876543203",
    status: "New",
    followUpDate: "2026-06-20",
    assignedTo: "100842",
    notes: "Added from referral campaign.",
  },
  {
    id: "P1004",
    name: "Lakshmi",
    mobile: "+91 9876543204",
    status: "Converted",
    followUpDate: "2026-06-15",
    assignedTo: "100842",
    notes: "Successfully registered.",
  },
];

export interface UseProspectsResult {
  loading: boolean;
  refreshing: boolean;
  error: string | null;

  prospects: Prospect[];

  total: number;
  newCount: number;
  followUpCount: number;
  readyCount: number;
  convertedCount: number;

  refresh: () => Promise<void>;

  getProspectById: (
    id: string
  ) => Prospect | undefined;

  getProspectsByStatus: (
    status: ProspectStatus
  ) => Prospect[];
}

export default function useProspects(): UseProspectsResult {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [prospects, setProspects] =
    useState<Prospect[]>(DEFAULT_PROSPECTS);

  const loadProspects = useCallback(async () => {
    try {
      setError(null);

      /**
       * Production:
       *
       * const response = await fetch("/api/prospects");
       * const data = await response.json();
       * setProspects(data);
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 250)
      );

      setProspects(DEFAULT_PROSPECTS);
    } catch (err) {
      console.error(err);
      setError("Unable to load prospects.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadProspects();
  }, [loadProspects]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    await loadProspects();
  }, [loadProspects]);

  const getProspectById = useCallback(
    (id: string) =>
      prospects.find((item) => item.id === id),
    [prospects]
  );

  const getProspectsByStatus = useCallback(
    (status: ProspectStatus) =>
      prospects.filter(
        (item) => item.status === status
      ),
    [prospects]
  );

  const value = useMemo(() => {
    const newCount = prospects.filter(
      (p) => p.status === "New"
    ).length;

    const followUpCount = prospects.filter(
      (p) => p.status === "Follow-up"
    ).length;

    const readyCount = prospects.filter(
      (p) => p.status === "Ready"
    ).length;

    const convertedCount = prospects.filter(
      (p) => p.status === "Converted"
    ).length;

    return {
      loading,
      refreshing,
      error,

      prospects,

      total: prospects.length,
      newCount,
      followUpCount,
      readyCount,
      convertedCount,

      refresh,

      getProspectById,
      getProspectsByStatus,
    };
  }, [
    loading,
    refreshing,
    error,
    prospects,
    refresh,
    getProspectById,
    getProspectsByStatus,
  ]);

  return value;
}

