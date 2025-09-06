import { STORAGE_KEYS, ROUTES } from "./config";
import type { User, AuthState } from "@/types/auth";

/**
 * Saves user data to localStorage
 */
export function saveUserData(user: User): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
  } catch (error) {
    console.error("Error saving user data:", error);
  }
}

/**
 * Retrieves user data from localStorage
 */
export function getUserData(): User | null {
  try {
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return null;
  }
}

/**
 * Clears user data from localStorage
 */
export function clearUserData(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  } catch (error) {
    console.error("Error clearing user data:", error);
  }
}

/**
 * Gets current authentication state
 */
export function getAuthState(): AuthState {
  const user = getUserData();
  return {
    user,
    isAuthenticated: !!user,
  };
}
