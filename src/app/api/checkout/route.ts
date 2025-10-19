import { Checkout } from "@polar-sh/nextjs";

/**
 * Polar Checkout API Route
 * Generates a checkout session and redirects the user to Polar
 *
 * Usage: Navigate to /api/checkout?email=user@example.com&product_id=prod_xxx
 */
export const GET = Checkout({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  successUrl: `${
    process.env.NEXT_PUBLIC_LANDING_URL || "http://localhost:3001"
  }/confirmation?checkout_id={CHECKOUT_ID}`,
  server: process.env.NODE_ENV === "production" ? "production" : "sandbox",
});
