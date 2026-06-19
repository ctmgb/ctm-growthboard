

// FILE: services/api.ts

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
    throw new Error(
      `HTTP ${response.status}`
    );
  }

  return response.json();
}

async function postRequest<T>(
  body: Record<string, unknown>
): Promise<ApiResponse<T>> {
  if (!API_BASE) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not configured."
    );
  }

  const response = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}`
    );
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

  registerMember(
    payload: RegisterMemberPayload
  ) {
    return postRequest({
      action: "registerMember",
      ...payload,
    });
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

