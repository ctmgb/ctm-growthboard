

// FILE: services/api.ts

"use client";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

async function request<T>(
  action: string,
  payload?: unknown
): Promise<ApiResponse<T>> {
  if (!API_BASE) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not configured."
    );
  }

  const url = `${API_BASE}?action=${action}`;

  const response = await fetch(url, {
    method: payload ? "POST" : "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload
      ? JSON.stringify(payload)
      : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

const api = {
  // --------------------------------------------------
  // Health
  // --------------------------------------------------

  ping() {
    return request("ping");
  },

  // --------------------------------------------------
  // Dashboard
  // --------------------------------------------------

  getDashboard() {
    return request("dashboard");
  },

  // --------------------------------------------------
  // Members
  // --------------------------------------------------

  getMembers() {
    return request("members");
  },

  getMember(memberId: string) {
    return request(
      `member&id=${encodeURIComponent(memberId)}`
    );
  },

  createMember(payload: unknown) {
    return request("createMember", payload);
  },

  updateMember(payload: unknown) {
    return request("updateMember", payload);
  },

  // --------------------------------------------------
  // Prospects
  // --------------------------------------------------

  getProspects() {
    return request("prospects");
  },

  createProspect(payload: unknown) {
    return request("createProspect", payload);
  },

  convertProspect(payload: unknown) {
    return request("convertProspect", payload);
  },

  // --------------------------------------------------
  // Network
  // --------------------------------------------------

  getGenealogy(memberId: string) {
    return request(
      `genealogy&id=${encodeURIComponent(memberId)}`
    );
  },

  getPlacement(memberId: string) {
    return request(
      `placement&id=${encodeURIComponent(memberId)}`
    );
  },

  // --------------------------------------------------
  // Leadership
  // --------------------------------------------------

  getLeadership(memberId: string) {
    return request(
      `leadership&id=${encodeURIComponent(memberId)}`
    );
  },

  // --------------------------------------------------
  // Mission
  // --------------------------------------------------

  getMission(memberId: string) {
    return request(
      `mission&id=${encodeURIComponent(memberId)}`
    );
  },

  // --------------------------------------------------
  // Earnings
  // --------------------------------------------------

  getEarnings(memberId: string) {
    return request(
      `earnings&id=${encodeURIComponent(memberId)}`
    );
  },

  // --------------------------------------------------
  // AI
  // --------------------------------------------------

  getAIRecommendations(memberId: string) {
    return request(
      `aiRecommendations&id=${encodeURIComponent(
        memberId
      )}`
    );
  },

  // --------------------------------------------------
  // Notifications
  // --------------------------------------------------

  getNotifications(memberId?: string) {
    if (memberId) {
      return request(
        `notifications&id=${encodeURIComponent(
          memberId
        )}`
      );
    }

    return request("notifications");
  },

  // --------------------------------------------------
  // Leaderboard
  // --------------------------------------------------

  getLeaderboard() {
    return request("leaderboard");
  },
};

export default api;

