

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { onboardingSlides } from "./data";
import OnboardingSlide from "./components/onboarding-slide";

export default function OnboardingPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  const total = onboardingSlides.length;
  const slide = onboardingSlides[index];

  function handleNext() {
    if (index === total - 1) {
      router.push("/register");
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

