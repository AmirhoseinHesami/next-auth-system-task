"use client";

import { Input, Button } from "@/components/ui";
import { useLogin } from "@/hooks/useLogin";

export function LoginForm() {
  const { mobile, validation, isLoading, error, updateMobile, handleSubmit } =
    useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
            <svg
              className="h-6 w-6 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your Iranian mobile number to continue
          </p>
        </div>

        {/* Form */}
        <div className="bg-card rounded-xl shadow-lg border p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                label="Mobile Number"
                placeholder="09xxxxxxxxx"
                value={mobile}
                onChange={(e) => updateMobile(e.target.value)}
                error={validation.isValid ? undefined : validation.error}
                helperText="Enter your Iranian mobile number (09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx)"
                required
                autoComplete="tel"
                className="text-center text-lg"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-4">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-destructive mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm text-destructive font-medium">
                    {error}
                  </div>
                </div>
              </div>
            )}

            <div>
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isLoading}
                disabled={!validation.isValid || isLoading}
                className="w-full h-12 text-base font-semibold"
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
