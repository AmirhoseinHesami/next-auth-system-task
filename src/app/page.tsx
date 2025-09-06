"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LoginForm } from "@/components/forms/login-form";
import { Loading } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const { isLoading, isAuthenticated, checkAuthAndRedirect } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      checkAuthAndRedirect(pathname);
    }
  }, [isLoading, isAuthenticated, pathname, checkAuthAndRedirect]);

  if (isLoading) {
    return <Loading message="Checking authentication..." />;
  }

  if (isAuthenticated) {
    return <Loading message="Redirecting to dashboard..." />;
  }

  return <LoginForm />;
}
