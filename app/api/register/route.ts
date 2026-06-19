

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

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        action: "registerMember",
        ...payload,
      }),
      cache: "no-store",
    });

    const text = await response.text();

    let data: unknown;

    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid response received from Apps Script.",
          raw: text,
        },
        { status: 502 }
      );
    }

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

