

// FILE: app/onboarding/data.ts

export interface OnboardingCard {
  icon: string;
  title: string;
  description: string;
}

export interface OnboardingSlide {
  id: number;
  badge: string;
  headline: string;
  subheadline: string;
  cards: OnboardingCard[];
  quote: string;
  cta: string;
}

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: 1,
    badge: "✨ Welcome to CTM GrowthBoard",
    headline: "Build with Clarity. Lead with Confidence.",
    subheadline:
      "Transform daily effort into measurable progress with an AI-powered business operating system designed for disciplined execution and organized growth.",

    cards: [
      {
        icon: "🎯",
        title: "Know What Matters Today",
        description:
          "Receive clear priorities that help you focus on the activities with the greatest impact.",
      },
      {
        icon: "👥",
        title: "Stay Organized",
        description:
          "Keep prospects, registrations, follow-ups, and leadership activities in one place.",
      },
      {
        icon: "📊",
        title: "Measure Progress",
        description:
          "View meaningful dashboards that help you understand where you are and what to improve next.",
      },
    ],

    quote:
      "Success is built through consistent, well-directed action repeated over time.",

    cta: "Continue",
  },

  {
    id: 2,
    badge: "⏰ Your Commitment",
    headline: "Simple Daily Actions Create Extraordinary Results.",
    subheadline:
      "CTM is designed to support disciplined execution. Your consistency is the foundation of long-term progress.",

    cards: [
      {
        icon: "⌛",
        title: "Time Commitment",
        description:
          "Complete onboarding once, then dedicate regular time to planning, prospecting, follow-up, and mentoring based on your goals.",
      },
      {
        icon: "💼",
        title: "Your Responsibilities",
        description:
          "Build relationships, maintain accurate records, follow up consistently, and lead your team with integrity.",
      },
      {
        icon: "💡",
        title: "Financial Transparency",
        description:
          "Any applicable fees, purchases, or ongoing commitments should be clearly disclosed before participation.",
      },
    ],

    quote:
      "Consistency matters more than intensity.",

    cta: "Continue",
  },

  {
    id: 3,
    badge: "🤖 Intelligent Assistance",
    headline: "Focus on People. Let CTM Handle the Complexity.",
    subheadline:
      "Spend less time organizing information and more time building relationships and executing meaningful work.",

    cards: [
      {
        icon: "🤖",
        title: "AI Guidance",
        description:
          "Receive intelligent recommendations that help prioritize your next actions.",
      },
      {
        icon: "📋",
        title: "Smart CRM",
        description:
          "Track prospects and follow-ups through an organized workflow.",
      },
      {
        icon: "🔔",
        title: "Helpful Reminders",
        description:
          "Stay informed about important tasks and opportunities without relying on memory.",
      },
    ],

    quote:
      "Clarity enables better decisions.",

    cta: "Continue",
  },

  {
    id: 4,
    badge: "📈 Visibility",
    headline: "Open the App and Know Exactly Where You Stand.",
    subheadline:
      "CTM converts activity into dashboards and insights that make progress easy to understand.",

    cards: [
      {
        icon: "📊",
        title: "Executive Dashboard",
        description:
          "Review current priorities and key performance indicators at a glance.",
      },
      {
        icon: "🎯",
        title: "Mission Tracking",
        description:
          "Monitor objectives, milestones, and execution progress.",
      },
      {
        icon: "🥇",
        title: "Leadership Insights",
        description:
          "Understand team development and growth through structured metrics.",
      },
    ],

    quote:
      "You cannot improve what you cannot measure.",

    cta: "Continue",
  },

  {
    id: 5,
    badge: "🔒 Integrity & Trust",
    headline: "Designed for Transparency and Accountability.",
    subheadline:
      "CTM emphasizes organized records, measurable progress, and responsible leadership.",

    cards: [
      {
        icon: "✅",
        title: "Transparent Tracking",
        description:
          "Important activities and progress remain visible and measurable.",
      },
      {
        icon: "🤝",
        title: "Leadership Responsibility",
        description:
          "Support your team through ethical conduct and disciplined execution.",
      },
      {
        icon: "📱",
        title: "Accessible Anywhere",
        description:
          "Use CTM from your mobile device to stay connected wherever you are.",
      },
    ],

    quote:
      "Trust grows when expectations and actions remain aligned.",

    cta: "Continue",
  },

  {
    id: 6,
    badge: "🚀 You're Ready",
    headline: "Everything You Need to Begin Is Now in Place.",
    subheadline:
      "You understand your role, your responsibilities, and how CTM supports organized execution and measurable progress.",

    cards: [
      {
        icon: "✔",
        title: "You Know Your Role",
        description:
          "You understand the daily activities expected from a Tribe Leader.",
      },
      {
        icon: "✔",
        title: "You Know What CTM Provides",
        description:
          "AI guidance, dashboards, organized workflows, and progress tracking.",
      },
      {
        icon: "✔",
        title: "You're Ready to Begin",
        description:
          "Complete registration and start using your personalized GrowthBoard.",
      },
    ],

    quote:
      "The best time to build disciplined habits is today.",

    cta: "🚀 Create My Account",
  },
];

