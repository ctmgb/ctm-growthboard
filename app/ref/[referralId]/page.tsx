

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function ReferralLandingPage() {
  const params = useParams();

  const referralId =
    typeof params.referralId === "string"
      ? params.referralId
      : Array.isArray(params.referralId)
      ? params.referralId[0]
      : "";

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-xl border border-gray-200 p-8">
        <div className="text-center">
          <div className="text-5xl mb-4">🌿</div>

          <h1 className="text-3xl font-bold text-gray-900">
            CTM GrowthBoard
          </h1>

          <p className="mt-3 text-gray-600">
            You have been invited to join through an official CTM referral.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-200 p-5">
          <p className="text-sm text-gray-500">
            Referral Business ID
          </p>

          <p className="mt-1 text-2xl font-bold text-blue-700">
            {referralId}
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-5">
          <h2 className="font-semibold text-green-800">
            What happens next?
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Complete your registration.</li>
            <li>Your PAN profile will be created.</li>
            <li>Three Business IDs will be generated automatically.</li>
            <li>Your sponsor relationship will be permanently preserved.</li>
            <li>The CTM Placement Engine will assign your position.</li>
          </ul>
        </div>

        <Link
          href={`/register?ref=${encodeURIComponent(referralId)}`}
          className="mt-8 block w-full rounded-2xl bg-blue-600 py-4 text-center text-lg font-semibold text-white hover:bg-blue-700 transition"
        >
          Join Now
        </Link>

        <p className="mt-6 text-center text-xs text-gray-500">
          By continuing, you agree to follow the CTM referral and placement rules.
        </p>
      </div>
    </main>
  );
}

