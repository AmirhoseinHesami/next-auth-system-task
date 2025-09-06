"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { clearUserData, getAuthState } from "@/lib/auth";
import type { User } from "@/types/auth";
import Image from "next/image";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    // Check authentication state
    const authState = getAuthState();

    if (!authState.isAuthenticated) {
      // Redirect to login if not authenticated
      push("/");
      return;
    }

    setUser(authState.user);
    setIsLoading(false);
  }, [push]);

  const handleLogout = () => {
    clearUserData();
    push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Image
                src={user.picture.medium}
                alt={`${fullName}'s profile`}
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Dashboard
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Welcome back, {user.name.first}!
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleLogout}
              className="ml-4"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Card */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Image
                  src={user.picture.large}
                  alt={`${fullName}'s profile`}
                  className="h-24 w-24 rounded-full"
                  width={96}
                  height={96}
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Welcome, {fullName}! 👋
                  </h2>
                  <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    You have successfully logged in to your account.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Email:</span> {user.email}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Profile ID:</span>{" "}
                      {user.name.first.toLowerCase()}.
                      {user.name.last.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        Account Status
                      </dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        Active
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        Login Status
                      </dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        Success
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        Session Time
                      </dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        Now
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.reload()}
            >
              Refresh Profile
            </Button>
            <Button variant="secondary" size="lg" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
