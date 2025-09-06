import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateIranianMobile } from "@/lib/validation";
import { fetchUserData } from "@/lib/api";
import { saveUserData } from "@/lib/auth";
import type { ValidationResult } from "@/types/auth";

interface LoginState {
  mobile: string;
  validation: ValidationResult;
  isLoading: boolean;
  error: string;
}

export function useLogin() {
  const [state, setState] = useState<LoginState>({
    mobile: "",
    validation: { isValid: false },
    isLoading: false,
    error: "",
  });
  const { replace } = useRouter();

  const updateMobile = (mobile: string) => {
    const validation = validateIranianMobile(mobile);
    setState((prev) => ({
      ...prev,
      mobile,
      validation,
      error: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation
    if (!state.validation.isValid) {
      setState((prev) => ({
        ...prev,
        error: state.validation.error || "Invalid mobile number",
      }));
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: "" }));

    try {
      // Fetch user data from API
      const response = await fetchUserData();
      const user = response.results[0];

      // Save user data to localStorage
      saveUserData(user);

      // Redirect to dashboard
      replace("/dashboard");
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error:
          err instanceof Error
            ? err.message
            : "Login failed. Please try again.",
        isLoading: false,
      }));
    }
  };

  return {
    ...state,
    updateMobile,
    handleSubmit,
  };
}
