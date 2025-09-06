import { IRANIAN_MOBILE_PATTERNS } from "./config";
import type { ValidationResult } from "@/types/auth";

/**
 * Validates Iranian mobile number format
 * Accepts: 09xxxxxxxxx, +989xxxxxxxxx, 00989xxxxxxxxx
 */
export function validateIranianMobile(mobile: string): ValidationResult {
  // Remove any whitespace
  const cleanMobile = mobile.trim();

  // Check if empty
  if (!cleanMobile) {
    return {
      isValid: false,
      error: "Mobile number is required",
    };
  }

  // Check against all valid patterns
  const isValid = Object.values(IRANIAN_MOBILE_PATTERNS).some((pattern) =>
    pattern.test(cleanMobile)
  );

  if (!isValid) {
    return {
      isValid: false,
      error:
        "Please enter a valid Iranian mobile number (09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx)",
    };
  }

  return { isValid: true };
}
