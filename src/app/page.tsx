"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { validateIranianMobile } from "@/lib/validation";
import { fetchUserData } from "@/lib/api";
import { saveUserData, getAuthState, redirectToDashboard } from "@/lib/auth";
import type { ValidationResult } from "@/types/auth";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [validation, setValidation] = useState<ValidationResult>({
    isValid: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Check if user is already authenticated
  useEffect(() => {
    const authState = getAuthState();
    if (authState.isAuthenticated) {
      redirectToDashboard();
    }
  }, []);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobile(value);
    setError("");

    // Validate on change
    const validationResult = validateIranianMobile(value);
    setValidation(validationResult);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation
    const validationResult = validateIranianMobile(mobile);
    if (!validationResult.isValid) {
      setError(validationResult.error || "Invalid mobile number");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Fetch user data from API
      const response = await fetchUserData();
      const user = response.results[0];

      // Save user data to localStorage
      saveUserData(user);

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Enter your Iranian mobile number to continue
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              label="Mobile Number"
              placeholder="09xxxxxxxxx"
              value={mobile}
              onChange={handleMobileChange}
              error={validation.isValid ? undefined : validation.error}
              helperText="Enter your Iranian mobile number (09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx)"
              required
              autoComplete="tel"
              aria-describedby="mobile-format"
            />
          </div>

          {error && (
            <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
              <div className="text-sm text-red-700 dark:text-red-400">
                {error}
              </div>
            </div>
          )}

          <div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isLoading}
              disabled={!validation.isValid || isLoading}
              className="w-full"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Valid formats: 09xxxxxxxxx, +989xxxxxxxxx, 00989xxxxxxxxx
          </p>
        </div>
      </div>
    </div>
  );
}
