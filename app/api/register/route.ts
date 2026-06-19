

import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "";

export async function POST(request: NextRequest) {
  try {
    if (!APPS_SCRIPT_URL) {
      return NextResponse.json(
        {
          success: false,
          error: "NEXT_PUBLIC_API_URL is not configured.",
        },
        { status: 500 }
      );
    }

    const payload = await request.json();

    const params = new URLSearchParams({
      action: "registerMember",
      fullName: payload.fullName ?? "",
      mobile: payload.mobile ?? "",
      email: payload.email ?? "",
    });

    const response = await fetch(
      `${APPS_SCRIPT_URL}?${params.toString()}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: `Apps Script returned HTTP ${response.status}`,
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown server error.",
      },
      { status: 500 }
    );
  }
}

