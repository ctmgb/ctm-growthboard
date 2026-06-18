

// FILE: hooks/useMembers.ts

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export type BusinessIdType = "ID-1" | "ID-2" | "ID-3";

export interface Member {
  memberId: string;
  panNumber: string;
  name: string;
  mobile: string;

  businessId: BusinessIdType;

  sponsorId: string;
  placementParentId: string;

  status: "Active" | "Inactive";

  tribeStrength: number;
  weeklyPairs: number;
  weeklyIncome: number;
}

const DEFAULT_MEMBERS: Member[] = [
  {
    memberId: "100842",
    panNumber: "ABCDE1234F",
    name: "Raphael Raj",
    mobile: "+91 9876543210",

    businessId: "ID-1",

    sponsorId: "100001",
    placementParentId: "100515",

    status: "Active",

    tribeStrength: 118,
    weeklyPairs: 165,
    weeklyIncome: 148500,
  },
  {
    memberId: "100843",
    panNumber: "ABCDE1234F",
    name: "Raphael Raj",
    mobile: "+91 9876543210",

    businessId: "ID-2",

    sponsorId: "100001",
    placementParentId: "100516",

    status: "Active",

    tribeStrength: 64,
    weeklyPairs: 82,
    weeklyIncome: 82700,
  },
  {
    memberId: "100844",
    panNumber: "ABCDE1234F",
    name: "Raphael Raj",
    mobile: "+91 9876543210",

    businessId: "ID-3",

    sponsorId: "100001",
    placementParentId: "100517",

    status: "Active",

    tribeStrength: 71,
    weeklyPairs: 91,
    weeklyIncome: 91200,
  },
];

export interface UseMembersResult {
  loading: boolean;
  refreshing: boolean;
  error: string | null;

  members: Member;

  allMembers: Member[];

  refresh: () => Promise<void>;

  getMemberById: (
    memberId: string
  ) => Member | undefined;

  getMembersByPAN: (
    panNumber: string
  ) => Member[];
}

export default function useMembers(): UseMembersResult {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] =
    useState(false);
  const [error, setError] =
    useState<string | null>(null);

  const [allMembers, setAllMembers] =
    useState<Member[]>(DEFAULT_MEMBERS);

  const loadMembers = useCallback(async () => {
    try {
      setError(null);

      /**
       * Production implementation:
       *
       * const response = await fetch("/api/members");
       * const data = await response.json();
       * setAllMembers(data);
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 250)
      );

      setAllMembers(DEFAULT_MEMBERS);
    } catch (e) {
      console.error(e);
      setError("Failed to load members.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadMembers();
  }, [loadMembers]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    await loadMembers();
  }, [loadMembers]);

  const getMemberById = useCallback(
    (memberId: string) =>
      allMembers.find(
        (member) => member.memberId === memberId
      ),
    [allMembers]
  );

  const getMembersByPAN = useCallback(
    (panNumber: string) =>
      allMembers.filter(
        (member) => member.panNumber === panNumber
      ),
    [allMembers]
  );

  const value = useMemo(
    () => ({
      loading,
      refreshing,
      error,

      members: allMembers[0],

      allMembers,

      refresh,

      getMemberById,

      getMembersByPAN,
    }),
    [
      loading,
      refreshing,
      error,
      allMembers,
      refresh,
      getMemberById,
      getMembersByPAN,
    ]
  );

  return value;
}


