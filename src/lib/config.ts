// API Configuration
export const API_CONFIG = {
  BASE_URL: "https://randomuser.me/api",
  ENDPOINTS: {
    USERS: "/?results=1&nat=us",
  },
} as const;

// Validation patterns for Iranian mobile numbers
export const IRANIAN_MOBILE_PATTERNS = {
  // 09xxxxxxxxx format
  LOCAL: /^09\d{9}$/,
  // +989xxxxxxxxx format
  INTERNATIONAL_PLUS: /^\+989\d{9}$/,
  // 00989xxxxxxxxx format
  INTERNATIONAL_ZEROS: /^00989\d{9}$/,
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  USER_DATA: "auth_user_data",
} as const;

// Routes
export const ROUTES = {
  LOGIN: "/",
  DASHBOARD: "/dashboard",
} as const;
