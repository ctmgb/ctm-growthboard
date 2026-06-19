

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
  action: string
): Promise<ApiResponse<T>> {
  if (!API_BASE) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not configured."
    );
  }

  const separator = action.includes("&") ? "&" : "";
  const url = `${API_BASE}?action=${action}${separator}`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

const api = {
  ping() {
    return request("ping");
  },

  getDashboard() {
    return request("dashboard");
  },

  getMembers() {
    return request("members");
  },

  getMember(memberId: string) {
    return request(
      `member&id=${encodeURIComponent(memberId)}`
    );
  },

  getProspects() {
    return request("prospects");
  },

  getTasks() {
    return request("tasks");
  },

  getNotifications() {
    return request("notifications");
  },

  getLeaderboard() {
    return request("leaderboard");
  },
};

export default api;

