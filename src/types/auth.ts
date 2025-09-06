// User data structure from randomuser.me API
export interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

// API response structure
export interface ApiResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

// Validation result
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Authentication state
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
