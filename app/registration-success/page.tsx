

"use client";

import Link from "next/link";

export default function RegistrationSuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">

        {/* Progress */}
        <div className="mb-8">
          <div className="text-center text-sm font-medium text-gray-500">
            Onboarding Progress
          </div>

          <div className="mt-4 flex items-center justify-between text-xs">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                ✓
              </div>
              <span className="mt-2">Referral</span>
            </div>

            <div className="h-1 flex-1 bg-green-500 mx-2" />

            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                ✓
              </div>
              <span className="mt-2">Registration</span>
            </div>

            <div className="h-1 flex-1 bg-blue-200 mx-2" />

            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                3
              </div>
              <span className="mt-2">Business IDs</span>
            </div>

            <div className="h-1 flex-1 bg-gray-200 mx-2" />

            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-700">
                4
              </div>
              <span className="mt-2">Activation</span>
            </div>
          </div>
        </div>

        {/* Success */}
        <div className="text-center">
          <div className="text-6xl">🎉</div>

          <h1 className="mt-4 text-3xl font-bold text-green-700">
            Registration Successful
          </h1>

          <p className="mt-3 text-gray-600">
            Welcome to the CTM GrowthBoard ecosystem.
          </p>
        </div>

        {/* Status */}
        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
          <h2 className="text-lg font-semibold text-green-800">
            Completed Successfully
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>✅ PAN profile created</li>
            <li>✅ Sponsor relationship preserved</li>
            <li>✅ Referral recorded</li>
            <li>✅ Ready for Business ID allocation</li>
          </ul>
        </div>

        {/* Business IDs */}
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h2 className="text-lg font-semibold text-blue-800">
            Assigned Business IDs
          </h2>

          <div className="mt-4 space-y-3">

            <div className="flex items-center justify-between rounded-xl bg-white p-3 border">
              <span>👑 Top Pole (ID-1)</span>
              <span className="font-bold text-blue-700">
                100001
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white p-3 border">
              <span>⬅️ Left Pole (ID-2)</span>
              <span className="font-bold text-blue-700">
                100002
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white p-3 border">
              <span>➡️ Right Pole (ID-3)</span>
              <span className="font-bold text-blue-700">
                100003
              </span>
            </div>

          </div>
        </div>

        {/* Next Step */}
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="font-semibold text-amber-800">
            Next Step
          </h2>

          <p className="mt-2 text-sm text-gray-700">
            Activate your Business IDs with the weekly purchase,
            begin building your balanced network, and progress
            toward the independent 234-pair missions.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 block w-full rounded-2xl bg-blue-600 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-700"
        >
          Continue to Dashboard
        </Link>
      </div>
    </main>
  );
}


