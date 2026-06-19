

import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL!;

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "registerMember",

        // Personal Details
        fullName: payload.fullName,
        mobile: payload.mobile,
        email: payload.email,
        panNumber: payload.panNumber,

        // Address Details
        place: payload.place,
        district: payload.district,
        state: payload.state,
        pinCode: payload.pinCode,

        // Referral Details
        referralBusinessId:
          payload.referralBusinessId ?? "",
      }),
    });

    const result = await response.json();

    return NextResponse.json(result, {
      status: response.ok ? 200 : 500,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Registration failed.",
      },
      {
        status: 500,
      }
    );
  }
}

