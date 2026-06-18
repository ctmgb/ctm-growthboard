

// FILE: services/api.ts

"use client";

const API_BASE =
  process.env.NEXT_PUBLIC_GAS_API_URL ?? "";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

async function request<T>(
  action: string
): Promise<ApiResponse<T>> {
  const url =
    `${API_BASE}?action=${encodeURIComponent(action)}`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}`
    );
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

