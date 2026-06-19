

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
  panNumber: string;
  place: string;
  district: string;
  state: string;
  pinCode: string;
  referralBusinessId: string;
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

    const result: ApiResponse = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error ??
          result.message ??
          `HTTP ${response.status}`
      );
    }

    return result;
  },
};

export default api;

