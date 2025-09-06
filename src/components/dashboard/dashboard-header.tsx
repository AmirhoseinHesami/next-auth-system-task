"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import type { User } from "@/types/auth";
import { clearUserData } from "@/lib/auth";
import { useRouter } from "next/navigation";

interface DashboardHeaderProps {
  user: User;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const { replace } = useRouter();

  const handleLogout = () => {
    clearUserData();
    replace("/");
  };

  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <header
      className="bg-card shadow-sm border-b sticky top-0 z-10"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src={user.picture.medium}
                alt={`${fullName}'s profile picture`}
                className="h-12 w-12 rounded-full ring-2 ring-primary/20"
                width={48}
                height={48}
              />
              <div
                className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-background"
                aria-label="Online status"
                role="img"
              ></div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome back,{" "}
                <span className="font-medium text-primary">
                  {user.name.first}
                </span>
                !
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="ml-4"
            aria-label="Logout from account"
          >
            <svg
              className="h-4 w-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
