"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { User } from "@/types/auth";

interface DashboardContentProps {
  user: User;
}

export function DashboardContent({ user }: DashboardContentProps) {
  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" role="main">
      <div className="px-4 py-6 sm:px-0">
        {/* Welcome Card */}
        <section
          className="bg-card overflow-hidden shadow-lg rounded-xl border"
          aria-labelledby="welcome-heading"
        >
          <div className="px-6 py-8 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
              <div className="relative">
                <Image
                  src={user.picture.large}
                  alt={`${fullName}'s profile picture`}
                  className="h-32 w-32 rounded-full ring-4 ring-primary/20"
                  width={128}
                  height={128}
                />
                <div
                  className="absolute -bottom-2 -right-2 h-8 w-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center"
                  aria-label="Verified account"
                  role="img"
                >
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2
                  id="welcome-heading"
                  className="text-3xl font-bold text-foreground mb-2"
                >
                  Welcome, {fullName}! 👋
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  You have successfully logged in to your account.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      Email Address
                    </p>
                    <p
                      className="font-medium text-foreground overflow-ellipsis overflow-hidden"
                      aria-label={`Email: ${user.email}`}
                    >
                      {user.email}
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      Profile ID
                    </p>
                    <p
                      className="font-medium text-foreground"
                      aria-label={`Profile ID: ${user.name.first.toLowerCase()}.${user.name.last.toLowerCase()}`}
                    >
                      {user.name.first.toLowerCase()}.
                      {user.name.last.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="mt-8" aria-labelledby="stats-heading">
          <h3 id="stats-heading" className="sr-only">
            Account Statistics
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="bg-card overflow-hidden shadow-lg rounded-xl border"
              role="article"
              aria-labelledby="account-status"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-6 h-6 text-primary-foreground"
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
                  <div className="ml-4 flex-1">
                    <p
                      id="account-status"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      Account Status
                    </p>
                    <p
                      className="text-2xl font-bold text-foreground"
                      aria-label="Account status: Active"
                    >
                      Active
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-card overflow-hidden shadow-lg rounded-xl border"
              role="article"
              aria-labelledby="login-status"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-6 h-6 text-white"
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
                  <div className="ml-4 flex-1">
                    <p
                      id="login-status"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      Login Status
                    </p>
                    <p
                      className="text-2xl font-bold text-foreground"
                      aria-label="Login status: Success"
                    >
                      Success
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-card overflow-hidden shadow-lg rounded-xl border"
              role="article"
              aria-labelledby="session-time"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-6 h-6 text-white"
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
                  <div className="ml-4 flex-1">
                    <p
                      id="session-time"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      Session Time
                    </p>
                    <p
                      className="text-2xl font-bold text-foreground"
                      aria-label="Session time: Now"
                    >
                      Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="mt-8" aria-labelledby="actions-heading">
          <h3 id="actions-heading" className="sr-only">
            Account Actions
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => window.location.reload()}
              className="h-12 px-8"
              aria-label="Refresh profile data"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh Profile
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
