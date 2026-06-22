

"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { onboardingSlides } from "./data";
import OnboardingSlide from "./components/onboarding-slide";

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const referralBusinessId = searchParams.get("ref")?.trim() ?? "";

  const [index, setIndex] = useState(0);

  const total = onboardingSlides.length;
  const slide = onboardingSlides[index];

  function handleNext() {
    if (index === total - 1) {
      router.push(
        referralBusinessId
          ? `/register?ref=${encodeURIComponent(referralBusinessId)}`
          : "/register"
      );
      return;
    }

    setIndex((prev) => prev + 1);
  }

  function handleBack() {
    setIndex((prev) => Math.max(prev - 1, 0));
  }

  return (
    <OnboardingSlide
      slide={slide}
      current={index + 1}
      total={total}
      onBack={index > 0 ? handleBack : undefined}
      onNext={handleNext}
      isLast={index === total - 1}
    />
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingContent />
    </Suspense>
  );
}

