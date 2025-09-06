import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  label,
  error,
  helperText,
  ...props
}: React.ComponentProps<"input"> & {
  label?: string;
  error?: string;
  helperText?: string;
}) {
  const hasError = !!error;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "hover:border-ring/60 hover:shadow-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:shadow-md",
          hasError
            ? "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-destructive hover:border-destructive/70 focus-visible:border-destructive focus-visible:ring-destructive/50"
            : "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        aria-invalid={hasError}
        aria-describedby={
          hasError
            ? `${props.id}-error`
            : helperText
            ? `${props.id}-helper`
            : undefined
        }
        {...props}
      />
      {hasError && (
        <p
          id={`${props.id}-error`}
          className="mt-2 text-sm text-destructive"
          role="alert"
        >
          {error}
        </p>
      )}
      {helperText && !hasError && (
        <p
          id={`${props.id}-helper`}
          className="mt-2 text-sm text-muted-foreground"
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

export { Input };
