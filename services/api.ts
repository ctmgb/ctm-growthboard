

"use client";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface RegisterMemberPayload {
  fullName: string;
  mobile: string;
  email: string;
}

async function getRequest<T>(
  action: string
): Promise<ApiResponse<T>> {
  if (!API_BASE) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not configured."
    );
  }

  const url = `${API_BASE}?action=${encodeURIComponent(
    action
  )}`;

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
  // -------------------------------------------------
  // Health
  // -------------------------------------------------

  ping() {
    return getRequest("ping");
  },

  // -------------------------------------------------
  // Dashboard
  // -------------------------------------------------

  getDashboard() {
    return getRequest("dashboard");
  },

  // -------------------------------------------------
  // Members
  // -------------------------------------------------

  getMembers() {
    return getRequest("members");
  },

  getMember(memberId: string) {
    return getRequest(
      `member&id=${encodeURIComponent(memberId)}`
    );
  },

  // -------------------------------------------------
  // Registration
  // -------------------------------------------------

  async registerMember(
    payload: RegisterMemberPayload
  ): Promise<ApiResponse> {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  },

  // -------------------------------------------------
  // Prospects
  // -------------------------------------------------

  getProspects() {
    return getRequest("prospects");
  },

  // -------------------------------------------------
  // Tasks
  // -------------------------------------------------

  getTasks() {
    return getRequest("tasks");
  },

  // -------------------------------------------------
  // Notifications
  // -------------------------------------------------

  getNotifications() {
    return getRequest("notifications");
  },

  // -------------------------------------------------
  // Leaderboard
  // -------------------------------------------------

  getLeaderboard() {
    return getRequest("leaderboard");
  },
};

export default api;

