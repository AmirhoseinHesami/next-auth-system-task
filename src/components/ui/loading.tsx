interface LoadingProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export function Loading({ message = "Loading...", size = "md" }: LoadingProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div
          className={`animate-spin rounded-full border-b-2 border-primary mx-auto ${sizeClasses[size]}`}
        ></div>
        <p className="mt-4 text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
