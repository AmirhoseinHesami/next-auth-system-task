"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { DashboardContent, DashboardHeader } from "@/components/dashboard";
import { Loading } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  const { isLoading, isAuthenticated, user, checkAuthAndRedirect } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      checkAuthAndRedirect(pathname);
    }
  }, [isLoading, isAuthenticated, pathname, checkAuthAndRedirect]);

  if (isLoading) {
    return <Loading message="Loading dashboard..." />;
  }

  if (!isAuthenticated || !user) {
    return <Loading message="Redirecting to login..." />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <DashboardHeader user={user} />
      <DashboardContent user={user} />
    </div>
  );
}
