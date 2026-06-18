

// FILE: lib/validators.ts

/**
 * ============================================================
 * CTM GrowthBoard
 * Validation Utilities
 * ------------------------------------------------------------
 * Centralized validation functions for the frozen CTM
 * business rules.
 * ============================================================
 */

import {
  BUSINESS_IDS,
  BUSINESS_IDS_PER_PAN,
  MEMBER_STATUS,
  PROSPECT_STATUS,
} from "./constants";

/* ============================================================
   Generic Helpers
   ============================================================ */

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

function success(): ValidationResult {
  return {
    valid: true,
  };
}

function failure(message: string): ValidationResult {
  return {
    valid: false,
    message,
  };
}

/* ============================================================
   Name Validation
   ============================================================ */

export function validateName(
  name: string
): ValidationResult {
  const value = name.trim();

  if (!value) {
    return failure("Name is required.");
  }

  if (value.length < 2) {
    return failure(
      "Name must contain at least 2 characters."
    );
  }

  if (value.length > 100) {
    return failure(
      "Name exceeds maximum length."
    );
  }

  return success();
}

/* ============================================================
   Mobile Number
   ============================================================ */

export function validateMobile(
  mobile: string
): ValidationResult {
  const digits = mobile.replace(/\D/g, "");

  if (digits.length !== 10) {
    return failure(
      "Mobile number must contain exactly 10 digits."
    );
  }

  return success();
}

/* ============================================================
   Email
   ============================================================ */

export function validateEmail(
  email: string
): ValidationResult {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email.trim())) {
    return failure(
      "Invalid email address."
    );
  }

  return success();
}

/* ============================================================
   PAN Number
   ============================================================ */

export function validatePAN(
  pan: string
): ValidationResult {
  const regex =
    /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  if (!regex.test(pan.trim().toUpperCase())) {
    return failure(
      "Invalid PAN format."
    );
  }

  return success();
}

/* ============================================================
   PIN Code
   ============================================================ */

export function validatePINCode(
  pin: string
): ValidationResult {
  const regex = /^\d{6}$/;

  if (!regex.test(pin.trim())) {
    return failure(
      "PIN Code must contain exactly 6 digits."
    );
  }

  return success();
}

/* ============================================================
   Business ID
   ============================================================ */

export function validateBusinessId(
  id: string
): ValidationResult {
  const regex = /^\d{6}$/;

  if (!regex.test(id)) {
    return failure(
      "Business ID must be a 6-digit number."
    );
  }

  return success();
}

/* ============================================================
   Business ID Type
   ============================================================ */

export function validateBusinessIdType(
  type: string
): ValidationResult {
  if (
    BUSINESS_IDS.includes(
      type as (typeof BUSINESS_IDS)[number]
    )
  ) {
    return success();
  }

  return failure(
    "Invalid Business ID type."
  );
}

/* ============================================================
   Member Status
   ============================================================ */

export function validateMemberStatus(
  status: string
): ValidationResult {
  if (
    Object.values(MEMBER_STATUS).includes(
      status as (typeof MEMBER_STATUS)[keyof typeof MEMBER_STATUS]
    )
  ) {
    return success();
  }

  return failure(
    "Invalid member status."
  );
}

/* ============================================================
   Prospect Status
   ============================================================ */

export function validateProspectStatus(
  status: string
): ValidationResult {
  if (
    Object.values(PROSPECT_STATUS).includes(
      status as (typeof PROSPECT_STATUS)[keyof typeof PROSPECT_STATUS]
    )
  ) {
    return success();
  }

  return failure(
    "Invalid prospect status."
  );
}

/* ============================================================
   Three Business IDs per PAN Rule
   ============================================================ */

export function validateBusinessIdCount(
  count: number
): ValidationResult {
  if (count !== BUSINESS_IDS_PER_PAN) {
    return failure(
      `Each PAN must contain exactly ${BUSINESS_IDS_PER_PAN} Business IDs.`
    );
  }

  return success();
}

/* ============================================================
   Weekly Purchase
   ============================================================ */

export function validateWeeklyPurchase(
  amount: number
): ValidationResult {
  if (amount <= 0) {
    return failure(
      "Purchase amount must be greater than zero."
    );
  }

  return success();
}

/* ============================================================
   Registration Payload
   ============================================================ */

export interface RegistrationInput {
  name: string;
  mobile: string;
  email: string;
  panNumber: string;
  referralId: string;
  district: string;
  place: string;
  pinCode: string;
}

export function validateRegistration(
  input: RegistrationInput
): ValidationResult {
  const checks = [
    validateName(input.name),
    validateMobile(input.mobile),
    validateEmail(input.email),
    validatePAN(input.panNumber),
    validateBusinessId(input.referralId),
    validatePINCode(input.pinCode),
  ];

  const firstFailure = checks.find(
    (result) => !result.valid
  );

  if (firstFailure) {
    return firstFailure;
  }

  if (!input.place.trim()) {
    return failure(
      "Place is required."
    );
  }

  if (!input.district.trim()) {
    return failure(
      "District is required."
    );
  }

  return success();
}

/* ============================================================
   Prospect Payload
   ============================================================ */

export interface ProspectInput {
  name: string;
  mobile: string;
}

export function validateProspect(
  input: ProspectInput
): ValidationResult {
  const name = validateName(input.name);

  if (!name.valid) {
    return name;
  }

  const mobile = validateMobile(
    input.mobile
  );

  if (!mobile.valid) {
    return mobile;
  }

  return success();
}


