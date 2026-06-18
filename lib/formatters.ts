

// FILE: lib/formatters.ts

/**
 * ============================================================
 * CTM GrowthBoard
 * Formatting Utilities
 * ------------------------------------------------------------
 * Shared presentation helpers used throughout the application.
 * Pure formatting only — no business logic.
 * ============================================================
 */

/* ============================================================
   Currency
   ============================================================ */

export function formatCurrency(
  value: number,
  includeSymbol = true
): string {
  const formatted = Math.round(value).toLocaleString(
    "en-IN"
  );

  return includeSymbol
    ? `₹${formatted}`
    : formatted;
}

/* ============================================================
   Percentage
   ============================================================ */

export function formatPercentage(
  value: number,
  decimals = 0
): string {
  return `${value.toFixed(decimals)}%`;
}

/* ============================================================
   Business ID
   ============================================================ */

export function formatBusinessId(
  businessId: string | number
): string {
  const value = String(businessId).trim();

  if (!value) {
    return "-";
  }

  return `#${value}`;
}

/* ============================================================
   PAN Number
   ============================================================ */

export function maskPAN(
  pan: string
): string {
  const value = pan.toUpperCase().trim();

  if (value.length !== 10) {
    return value;
  }

  return `${value.substring(0, 5)}****${value.substring(
    9
  )}`;
}

export function formatPAN(
  pan: string
): string {
  return pan.toUpperCase().trim();
}

/* ============================================================
   Mobile Number
   ============================================================ */

export function formatMobile(
  mobile: string
): string {
  const digits = mobile.replace(/\D/g, "");

  if (digits.length !== 10) {
    return mobile;
  }

  return `+91 ${digits.substring(
    0,
    5
  )} ${digits.substring(5)}`;
}

/* ============================================================
   Pair Progress
   ============================================================ */

export function formatPairProgress(
  currentPairs: number,
  targetPairs: number
): string {
  return `${currentPairs} / ${targetPairs}`;
}

/* ============================================================
   Progress Label
   ============================================================ */

export function formatProgressLabel(
  current: number,
  target: number
): string {
  const percent =
    target > 0
      ? Math.round((current / target) * 100)
      : 0;

  return `${current}/${target} (${percent}%)`;
}

/* ============================================================
   Date
   ============================================================ */

export function formatDate(
  value: string | Date
): string {
  const date =
    value instanceof Date
      ? value
      : new Date(value);

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatDateTime(
  value: string | Date
): string {
  const date =
    value instanceof Date
      ? value
      : new Date(value);

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

/* ============================================================
   Relative Time
   ============================================================ */

export function formatRelativeDays(
  targetDate: string | Date
): string {
  const target =
    targetDate instanceof Date
      ? targetDate
      : new Date(targetDate);

  const today = new Date();

  const diff =
    target.getTime() - today.getTime();

  const days = Math.round(
    diff / (1000 * 60 * 60 * 24)
  );

  if (days === 0) {
    return "Today";
  }

  if (days === 1) {
    return "Tomorrow";
  }

  if (days === -1) {
    return "Yesterday";
  }

  if (days > 1) {
    return `In ${days} days`;
  }

  return `${Math.abs(days)} days ago`;
}

/* ============================================================
   Leadership
   ============================================================ */

export function formatLeadership(
  direct: number,
  total: number
): string {
  return `${direct} → ${total}`;
}

/* ============================================================
   Weekly Ceiling
   ============================================================ */

export function formatWeeklyCeiling(
  current: number,
  ceiling: number
): string {
  return `${formatCurrency(
    current
  )} / ${formatCurrency(ceiling)}`;
}

/* ============================================================
   AI Priority
   ============================================================ */

export function formatPriority(
  priority: number
): string {
  switch (priority) {
    case 1:
      return "Critical";

    case 2:
      return "High";

    case 3:
      return "Medium";

    case 4:
      return "Normal";

    default:
      return "Low";
  }
}

/* ============================================================
   Branch Health
   ============================================================ */

export function formatBranchHealth(
  health:
    | "healthy"
    | "warning"
    | "critical"
): string {
  switch (health) {
    case "healthy":
      return "Healthy";

    case "warning":
      return "Needs Attention";

    case "critical":
      return "Critical";

    default:
      return "Unknown";
  }
}

/* ============================================================
   Name Initials
   ============================================================ */

export function getInitials(
  name: string
): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

/* ============================================================
   Null-safe Display
   ============================================================ */

export function displayValue<T>(
  value: T | null | undefined,
  fallback = "-"
): string {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  return String(value);
}


