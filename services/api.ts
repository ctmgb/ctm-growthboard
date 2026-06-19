

"use client";

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
  referralBusinessId?: string;
}

const api = {
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
};

export default api;

