"use client";

import { useAuth } from "./auth-provider";

interface AuthAwareCTAProps {
  className?: string;
  buttonClassName?: string;
  signedOutText?: string;
  signedInText?: string;
}

/**
 * Auth-aware CTA button that changes based on user authentication state
 * - When signed out: Shows "Sign Up" and links to app login
 * - When signed in: Shows "Continue To App" and links directly to app
 */
export function AuthAwareCTA({
  className = "group flex h-full w-fit items-center justify-center",
  buttonClassName = "inline-flex h-full w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-6 text-base font-bold text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 group-hover:translate-y-[2px] group-hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] group-active:translate-y-[4px] group-active:shadow-[0_2px_0_0_var(--color-primary-shadow)]",
  signedOutText = "Sign Up",
  signedInText = "Continue To App",
}: AuthAwareCTAProps) {
  const { user, loading } = useAuth();

  // While loading, show default state
  if (loading) {
    return (
      <a href="#" className={className}>
        <button className={buttonClassName} disabled>
          <div className="flex items-center justify-center gap-2">
            {signedOutText}
          </div>
        </button>
      </a>
    );
  }

  // Determine link and text based on auth state
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.beat2257.com";

  const href = user
    ? appUrl // If signed in, go directly to app
    : `${appUrl}/login`; // If not, go to login (paywall will handle checkout)

  const text = user ? signedInText : signedOutText;

  return (
    <a href={href} className={className}>
      <button className={buttonClassName}>
        <div className="flex items-center justify-center gap-2">{text}</div>
      </button>
    </a>
  );
}
