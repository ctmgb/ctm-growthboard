


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
    badge: "🚀 Welcome to CTM GrowthBoard",
    headline: "Build a Tribe. Follow a System. Scale Your Future.",
    subheadline:
      "CTM GrowthBoard is your AI-powered business operating system that helps you organize, execute, lead, and grow with clarity and confidence.",

    cards: [
      {
        icon: "🌱",
        title: "Start with One Step",
        description:
          "Every successful leader begins with a single decision to take consistent action.",
      },
      {
        icon: "🤝",
        title: "Build Through Relationships",
        description:
          "Grow by serving people, mentoring leaders, and creating lasting connections.",
      },
      {
        icon: "📈",
        title: "Follow a Proven System",
        description:
          "Replace guesswork with a structured roadmap designed for measurable progress.",
      },
    ],

    quote:
      "Build with purpose. Execute with discipline. Grow with confidence.",

    cta: "See Why Systems Win",
  },

  {
    id: 2,
    badge: "💡 Why People Struggle",
    headline: "Hard Work Alone Is Not Enough.",
    subheadline:
      "Many people stay busy but fail to build momentum because they lack structure, priorities, and consistent execution.",

    cards: [
      {
        icon: "❌",
        title: "Scattered Activities",
        description:
          "Without a clear system, daily efforts often produce inconsistent results.",
      },
      {
        icon: "🎯",
        title: "Missing Priorities",
        description:
          "Knowing the next best action is often more valuable than working longer hours.",
      },
      {
        icon: "🤖",
        title: "CTM Brings Clarity",
        description:
          "AI guidance and organized workflows help transform effort into meaningful progress.",
      },
    ],

    quote:
      "Success is not accidental—it is the result of disciplined execution.",

    cta: "Understand the Success Formula",
  },

  {
    id: 3,
    badge: "🎯 CTM Success Formula",
    headline: "Simple Inputs. Measurable Progress.",
    subheadline:
      "CTM converts consistent daily inputs into visible business growth and leadership development.",

    cards: [
      {
        icon: "⏰",
        title: "Invest Time & Effort",
        description:
          "Dedicate focused time and execute important activities consistently.",
      },
      {
        icon: "👥",
        title: "Build People",
        description:
          "Prospects, customers, distributors, and leaders are the foundation of long-term growth.",
      },
      {
        icon: "📚",
        title: "Keep Learning",
        description:
          "Continuous improvement strengthens leadership, communication, and execution.",
      },
    ],

    quote:
      "Consistent inputs create sustainable outcomes.",

    cta: "Discover Your Three Business IDs",
  },

  {
    id: 4,
    badge: "👑 Three Business IDs",
    headline: "One Registration. Three Independent Business IDs.",
    subheadline:
      "Your journey begins with a structured foundation designed to support balanced and scalable growth.",

    cards: [
      {
        icon: "👑",
        title: "ID-1 (Top Pole)",
        description:
          "Your primary Business ID forms the foundation of your organization.",
      },
      {
        icon: "⬅️",
        title: "ID-2 (Left Pole)",
        description:
          "An independent Business ID supporting structured expansion.",
      },
      {
        icon: "➡️",
        title: "ID-3 (Right Pole)",
        description:
          "A third Business ID that grows independently within your overall strategy.",
      },
    ],

    quote:
      "One vision. Three business centers. Unlimited opportunity to lead responsibly.",

    cta: "See Your First Week",
  },

  {
    id: 5,
    badge: "🗓️ Your First Week",
    headline: "Getting Started Is Simple.",
    subheadline:
      "Complete registration, activate your business, and begin building with confidence.",

    cards: [
      {
        icon: "📝",
        title: "Register",
        description:
          "Complete your profile and join the CTM ecosystem.",
      },
      {
        icon: "🆔",
        title: "Receive Your IDs",
        description:
          "Your Business IDs are generated as part of the onboarding process.",
      },
      {
        icon: "🚀",
        title: "Begin Building",
        description:
          "Activate and start developing your network using the CTM system.",
      },
    ],

    quote:
      "The first step is often the most important one.",

    cta: "Learn the Daily Workflow",
  },

  {
    id: 6,
    badge: "🔄 Daily Growth Engine",
    headline: "Small Daily Actions Create Big Results.",
    subheadline:
      "Consistency compounds. Repeat the core activities every day to build lasting momentum.",

    cards: [
      {
        icon: "➕",
        title: "Add Prospects",
        description:
          "Grow your pipeline by connecting with new people regularly.",
      },
      {
        icon: "📞",
        title: "Follow Up",
        description:
          "Maintain relationships through disciplined communication.",
      },
      {
        icon: "🤝",
        title: "Support & Mentor",
        description:
          "Help new members succeed and strengthen your leadership culture.",
      },
    ],

    quote:
      "Daily discipline creates extraordinary long-term results.",

    cta: "See How Leadership Grows",
  },

  {
    id: 7,
    badge: "🌳 Leadership Duplication",
    headline: "Grow from 10 to 100 to 400 Leaders.",
    subheadline:
      "Sustainable growth comes from developing leaders who help others become leaders.",

    cards: [
      {
        icon: "🥉",
        title: "Develop 10 Leaders",
        description:
          "Build a strong frontline through coaching and support.",
      },
      {
        icon: "🥈",
        title: "Expand to 100",
        description:
          "Encourage duplication and shared leadership across your organization.",
      },
      {
        icon: "🥇",
        title: "Scale to 400",
        description:
          "Create an independent, self-sustaining leadership network.",
      },
    ],

    quote:
      "Leadership grows when leaders help others grow.",

    cta: "Understand Balanced Growth",
  },

  {
    id: 8,
    badge: "⚖️ Balanced Growth",
    headline: "Balance Builds Stability.",
    subheadline:
      "Healthy organizations strengthen both sides consistently instead of allowing long-term imbalance.",

    cards: [
      {
        icon: "⚖️",
        title: "Monitor Balance",
        description:
          "Review organizational health regularly.",
      },
      {
        icon: "🌿",
        title: "Strengthen Weak Areas",
        description:
          "Proactively support branches that need attention.",
      },
      {
        icon: "📊",
        title: "Track Progress",
        description:
          "Use dashboards and insights to make informed decisions.",
      },
    ],

    quote:
      "Sustainable growth depends on balance and discipline.",

    cta: "Explore Your Missions",
  },

  {
    id: 9,
    badge: "🎯 Independent Missions",
    headline: "Every Business ID Has Its Own Journey.",
    subheadline:
      "Track the progress of each Business ID independently while building one unified organization.",

    cards: [
      {
        icon: "👑",
        title: "Top Pole Mission",
        description:
          "Monitor and strengthen your primary Business ID.",
      },
      {
        icon: "⬅️",
        title: "Left Pole Mission",
        description:
          "Track independent progress and balanced development.",
      },
      {
        icon: "➡️",
        title: "Right Pole Mission",
        description:
          "Maintain visibility and momentum across all Business IDs.",
      },
    ],

    quote:
      "Clear milestones make long-term progress easier to achieve.",

    cta: "Meet Your AI Coach",
  },

  {
    id: 10,
    badge: "🤖 AI Coach",
    headline: "Know Exactly What To Do Next.",
    subheadline:
      "CTM highlights your highest-impact actions so you can focus on execution instead of guesswork.",

    cards: [
      {
        icon: "📋",
        title: "Today's Priorities",
        description:
          "Receive a focused list of meaningful tasks.",
      },
      {
        icon: "🔔",
        title: "Helpful Reminders",
        description:
          "Stay on top of follow-ups and important opportunities.",
      },
      {
        icon: "📈",
        title: "Actionable Insights",
        description:
          "Understand where your attention creates the greatest value.",
      },
    ],

    quote:
      "Clarity improves execution.",

    cta: "Celebrate Your Progress",
  },

  {
    id: 11,
    badge: "🏆 Achievements",
    headline: "Every Milestone Matters.",
    subheadline:
      "Celebrate progress as you develop leaders, improve execution, and build momentum.",

    cards: [
      {
        icon: "⭐",
        title: "First Wins",
        description:
          "Recognize important early accomplishments.",
      },
      {
        icon: "🥇",
        title: "Leadership Milestones",
        description:
          "Track meaningful progress as your organization grows.",
      },
      {
        icon: "🎖️",
        title: "Stay Motivated",
        description:
          "Visible achievements encourage consistent execution.",
      },
    ],

    quote:
      "Progress deserves recognition.",

    cta: "Who Can Succeed?",
  },

  {
    id: 12,
    badge: "🙌 Who CTM Is For",
    headline: "Built for People Ready to Execute.",
    subheadline:
      "Whether you are a professional, entrepreneur, student, or aspiring leader, disciplined action creates opportunity.",

    cards: [
      {
        icon: "👨‍💼",
        title: "Working Professionals",
        description:
          "Build consistently alongside your existing commitments.",
      },
      {
        icon: "🚀",
        title: "Entrepreneurs",
        description:
          "Use structure and measurement to organize growth.",
      },
      {
        icon: "🎓",
        title: "Lifelong Learners",
        description:
          "Develop leadership through continuous improvement.",
      },
    ],

    quote:
      "Success begins with the willingness to learn and act.",

    cta: "View the Complete Journey",
  },

  {
    id: 13,
    badge: "🛣️ Your Growth Journey",
    headline: "See the Roadmap from Start to Scale.",
    subheadline:
      "Progress step by step through registration, execution, leadership development, and long-term growth.",

    cards: [
      {
        icon: "📝",
        title: "Join",
        description:
          "Complete registration and begin your journey.",
      },
      {
        icon: "🌱",
        title: "Build",
        description:
          "Develop prospects, leaders, and balanced organizations.",
      },
      {
        icon: "📈",
        title: "Scale",
        description:
          "Grow through disciplined execution and duplication.",
      },
    ],

    quote:
      "A clear roadmap makes progress easier to achieve.",

    cta: "Begin Today",
  },

  {
    id: 14,
    badge: "🚀 Start Your Journey",
    headline: "Your Next Step Starts Now.",
    subheadline:
      "You understand the system, the daily workflow, and the path to long-term growth. It's time to create your account and begin.",

    cards: [
      {
        icon: "✅",
        title: "You Know the Formula",
        description:
          "Understand the principles behind consistent execution.",
      },
      {
        icon: "✅",
        title: "You Know the Journey",
        description:
          "See how daily actions contribute to meaningful progress.",
      },
      {
        icon: "🎉",
        title: "You're Ready",
        description:
          "Create your CTM account and start building with confidence.",
      },
    ],

    quote:
      "The best time to begin is now.",

    cta: "🚀 Create My CTM Account",
  },
];


