

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import api from "@/services/api";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    panNumber: "",
    place: "",
    district: "",
    state: "",
    pinCode: "",
    referralBusinessId: "",
  });

  const [loading, setLoading] = useState(false);

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.registerMember({
        fullName: form.fullName.trim(),
        mobile: form.mobile.trim(),
        email: form.email.trim().toLowerCase(),
        panNumber: form.panNumber.trim().toUpperCase(),
        place: form.place.trim(),
        district: form.district.trim(),
        state: form.state.trim(),
        pinCode: form.pinCode.trim(),
        referralBusinessId: form.referralBusinessId.trim(),
      });

      if (!response.success) {
        alert(
          response.error ??
            response.message ??
            "Registration failed."
        );
        return;
      }

      router.push("/registration-success");
    } catch (error) {
      console.error(error);

      alert(
        "Unable to complete registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">

          <div className="mb-8 text-center">
            <div className="text-5xl">🚀</div>

            <h1 className="mt-4 text-4xl font-black">
              Start My CTM Journey
            </h1>

            <p className="mt-4 text-slate-300">
              Complete your registration to activate your
              CTM GrowthBoard account and generate your
              permanent Member ID and three Business IDs.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              required
              type="text"
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) =>
                updateField("fullName", e.target.value)
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
            />

            <input
              required
              type="tel"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) =>
                updateField("mobile", e.target.value)
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
            />

            <input
              required
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
            />

            <input
              required
              type="text"
              placeholder="PAN Number"
              value={form.panNumber}
              onChange={(e) =>
                updateField(
                  "panNumber",
                  e.target.value.toUpperCase()
                )
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 uppercase outline-none focus:border-blue-500"
            />

            <input
              required
              type="text"
              placeholder="Place / Village / Town"
              value={form.place}
              onChange={(e) =>
                updateField("place", e.target.value)
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
            />

            <input
              required
              type="text"
              placeholder="District"
              value={form.district}
              onChange={(e) =>
                updateField("district", e.target.value)
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
            />

            <input
              required
              type="text"
              placeholder="State"
              value={form.state}
              onChange={(e) =>
                updateField("state", e.target.value)
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
            />

            <input
              required
              type="text"
              placeholder="PIN Code"
              value={form.pinCode}
              onChange={(e) =>
                updateField("pinCode", e.target.value)
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
            />

            <input
              required
              type="text"
              placeholder="Referral Business ID"
              value={form.referralBusinessId}
              onChange={(e) =>
                updateField(
                  "referralBusinessId",
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Creating Account..."
                : "🚀 Complete Registration"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Your registration will automatically generate
            your Member ID, Referral Code, three Business IDs,
            and Genealogy records.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-center text-xs text-slate-500">
            🔒 Secure • 📊 Measurable • 🤖 AI-Assisted • 👥 Leadership-Focused • 📱 Mobile-First
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/onboarding"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              ← Back to Executive Briefing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

