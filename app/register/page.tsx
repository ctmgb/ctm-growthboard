

"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function RegisterForm() {
  const searchParams = useSearchParams();

  const referralId = searchParams.get("ref") ?? "";

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    pan: "",
    place: "",
    district: "",
    pinCode: "",
  });

  function updateField(
    key: keyof typeof form,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    window.location.href =
      "/registration-success";
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="text-5xl">📝</div>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Registration
          </h1>

          <p className="mt-2 text-gray-600">
            Complete your CTM onboarding.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-4">
          <div className="text-sm text-gray-500">
            Referral Business ID
          </div>

          <div className="mt-1 text-xl font-bold text-blue-700">
            {referralId || "Not Provided"}
          </div>
        </div>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <input
            required
            value={form.name}
            onChange={(e) =>
              updateField("name", e.target.value)
            }
            placeholder="Full Name"
            className="w-full rounded-xl border p-3"
          />

          <input
            required
            value={form.mobile}
            onChange={(e) =>
              updateField("mobile", e.target.value)
            }
            placeholder="Mobile Number"
            className="w-full rounded-xl border p-3"
          />

          <input
            required
            type="email"
            value={form.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            placeholder="Email Address"
            className="w-full rounded-xl border p-3"
          />

          <input
            required
            value={form.pan}
            onChange={(e) =>
              updateField(
                "pan",
                e.target.value.toUpperCase()
              )
            }
            placeholder="PAN Number"
            className="w-full rounded-xl border p-3 uppercase"
          />

          <input
            required
            value={form.place}
            onChange={(e) =>
              updateField("place", e.target.value)
            }
            placeholder="Place"
            className="w-full rounded-xl border p-3"
          />

          <input
            required
            value={form.district}
            onChange={(e) =>
              updateField(
                "district",
                e.target.value
              )
            }
            placeholder="District"
            className="w-full rounded-xl border p-3"
          />

          <input
            required
            value={form.pinCode}
            onChange={(e) =>
              updateField(
                "pinCode",
                e.target.value
              )
            }
            placeholder="PIN Code"
            className="w-full rounded-xl border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Register & Continue
          </button>
        </form>

        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-gray-700">
          <p className="font-semibold text-green-800">
            After registration
          </p>

          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>PAN profile will be created.</li>
            <li>
              Three Business IDs will be generated
              automatically.
            </li>
            <li>
              Your sponsor relationship will be
              preserved.
            </li>
            <li>
              The CTM Placement Engine will assign
              your position.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          Loading registration...
        </main>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}

