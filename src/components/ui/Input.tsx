"use client";

import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    const hasError = !!error;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 border rounded-lg transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
            dark:bg-gray-800 dark:border-gray-600 dark:text-white
            dark:focus:ring-blue-400 dark:disabled:bg-gray-700
            ${
              hasError
                ? "border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:ring-red-400"
                : "border-gray-300 dark:border-gray-600"
            }
            ${className}
          `}
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
            className="mt-2 text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
        {helperText && !hasError && (
          <p
            id={`${props.id}-helper`}
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
