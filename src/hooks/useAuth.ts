import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuthState } from "@/lib/auth";
import type { AuthState } from "@/types/auth";

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const { replace } = useRouter();

  useEffect(() => {
    const state = getAuthState();
    setAuthState(state);
    setIsLoading(false);
  }, []);

  const checkAuthAndRedirect = (pathname: string) => {
    if (!authState.isAuthenticated && pathname === "/dashboard") {
      replace("/");
    } else if (authState.isAuthenticated && pathname === "/") {
      replace("/dashboard");
    }
  };

  return {
    ...authState,
    isLoading,
    checkAuthAndRedirect,
  };
}
