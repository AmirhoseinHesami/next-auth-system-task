import { API_CONFIG } from "./config";
import type { ApiResponse } from "@/types/auth";

/**
 * Fetches user data from randomuser.me API
 */
export async function fetchUserData(): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data. Please try again.");
  }
}
