

// app/onboarding/data.ts
// CTM GrowthBoard – Frozen 5-Screen Onboarding (Low Cognitive Load)

export interface OnboardingSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  cta: string;
  illustration: "top-id" | "leaders" | "duplicate" | "three-ids" | "coach";
}

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: 1,
    title: "Start Your Journey with Just ₹10,000",
    subtitle: "One Decision Can Change Your Future",
    description:
      "Purchase premium wellness products, activate your Top ID, and begin building a leadership-driven business.",
    bullets: [
      "💰 Invest ₹10,000",
      "📦 Receive premium wellness products",
      "👑 Activate your Top ID",
      "🚀 Start your CTM journey",
    ],
    cta: "Build 12 Leaders",
    illustration: "top-id",
  },

  {
    id: 2,
    title: "Build 12 Leaders",
    subtitle: "Success Starts with Just 12 People",
    description:
      "Personally develop 12 active leaders and create 6 balanced pairs through disciplined execution.",
    bullets: [
      "👥 Sponsor 12 active leaders",
      "⚖️ Build 6 balanced pairs",
      "💵 Earn approximately ₹5,400",
      "🤝 Focus on supporting your leaders",
    ],
    cta: "Help Them Duplicate",
    illustration: "leaders",
  },

  {
    id: 3,
    title: "Help Your 12 Leaders Duplicate",
    subtitle: "Leaders Create Leaders",
    description:
      "Teach each of your 12 leaders to build the same structure and grow together.",
    bullets: [
      "🌱 12 leaders each develop 12 more",
      "👨‍👩‍👧‍👦 Total team grows to 156 (12 + 144)",
      "📈 Potential Top ID earnings ≈ ₹64,800",
      "🔄 Duplication creates sustainable growth",
    ],
    cta: "Expand with 3 IDs",
    illustration: "duplicate",
  },

  {
    id: 4,
    title: "Activate Left & Right IDs",
    subtitle: "Strengthen Your Foundation",
    description:
      "As your business grows, activate your remaining Business IDs and expand your opportunities.",
    bullets: [
      "👑 Top ID remains active",
      "⬅️ Activate Left ID",
      "➡️ Activate Right ID",
      "🎯 Shift your focus from recruiting to coaching",
    ],
    cta: "Coach Leaders to Success",
    illustration: "three-ids",
  },

  {
    id: 5,
    title: "Coach Leaders. Build Freedom.",
    subtitle: "Your Success Grows When Your Leaders Succeed",
    description:
      "Help your 12 leaders win, build four balanced growth areas, and create a scalable organization.",
    bullets: [
      "🏆 Coach 12 leaders to achieve success",
      "📊 Build LL • LR • RL • RR with 234 targets each",
      "🌳 234 + 234 + 234 + 234 = 936 target structure",
      "💰 Each Business ID can earn up to ₹2.1 lakhs per week, subject to the plan rules and weekly payout cap",
    ],
    cta: "Create My CTM Account",
    illustration: "coach",
  },
];

