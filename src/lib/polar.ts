import { Polar } from "@polar-sh/sdk";

/**
 * Polar API client configuration
 * Uses the access token from environment variables
 */
export const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: process.env.NODE_ENV === "production" ? "production" : "sandbox",
});

/**
 * Get the base URL for the application
 */
export function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_LANDING_URL || "http://localhost:3001";
}
