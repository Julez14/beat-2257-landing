"use client";

import { useState } from "react";
import Link from "next/link";
import { LogIn, UserPlus, ChevronDown, Menu } from "lucide-react";
import { useAuth } from "../auth-provider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  const baseButtonShadow =
    "shadow-[0_6px_0_0_var(--color-primary-shadow)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] active:translate-y-[4px] active:shadow-[0_2px_0_0_var(--color-primary-shadow)] transition-all duration-200";
  const neutralShadow =
    "shadow-[0_6px_0_0_#E4E6EB] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#E4E6EB] active:translate-y-[4px] active:shadow-[0_2px_0_0_#E4E6EB]";
  const commonBase =
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold rounded-lg disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none h-8 gap-1.5 px-3";
  const languageButtonClasses = `${commonBase} bg-muted border border-border text-foreground ${neutralShadow}`;
  const loginButtonClasses = `${commonBase} bg-card border border-border text-foreground ${neutralShadow}`;
  const signupButtonClasses = `${commonBase} bg-primary text-primary-foreground ${baseButtonShadow}`;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.beat2257.com";
  const landingUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_LANDING_URL || "https://beat2257.com";
  const loginUrl = `${appUrl}/login?redirect=${encodeURIComponent(
    landingUrl + "/checkout"
  )}`;

  return (
    <header className="relative">
      <nav className="relative top-4 z-50 backdrop-blur-sm bg-transparent border border-white/20 mx-4 rounded-2xl transition-all duration-300">
        <div className="px-3 sm:px-4 lg:px-6">
          <div className="relative flex h-16 sm:h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 sm:static">
                <Link href="/" className="flex-shrink-0">
                  <span className="text-2xl font-black text-primary font-sans">
                    Beat2257
                  </span>
                </Link>
              </div>
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
                {!loading && (
                  <>
                    {user ? (
                      // When signed in: show email and "Continue To App"
                      <>
                        <span className="text-sm text-muted-foreground">
                          {user.email}
                        </span>
                        <a href={appUrl} className={signupButtonClasses}>
                          <span>Continue To App</span>
                        </a>
                      </>
                    ) : (
                      // When signed out: show Login and Sign Up buttons
                      <>
                        <a href={loginUrl} className={loginButtonClasses}>
                          <LogIn className="h-5 w-5" />
                          <span>Login</span>
                        </a>
                        <a href={loginUrl} className={signupButtonClasses}>
                          <UserPlus className="h-5 w-5" />
                          <span>Sign Up</span>
                        </a>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="flex xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative inline-flex items-center justify-center rounded-lg p-2 text-foreground/70 hover:bg-accent/50 transition-all"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="xl:hidden" id="mobile-menu">
            <div className="space-y-2 px-3 sm:px-4 lg:px-6 pb-4 pt-2">
              {!loading && (
                <>
                  {user ? (
                    // When signed in: show email and Continue To App
                    <>
                      <div className="px-3 py-2 text-sm text-muted-foreground">
                        {user.email}
                      </div>
                      <a
                        href={appUrl}
                        className={`${signupButtonClasses} w-full justify-start`}
                      >
                        <span>Continue To App</span>
                      </a>
                    </>
                  ) : (
                    // When signed out: show Login and Sign Up
                    <>
                      <a
                        href={loginUrl}
                        className={`${loginButtonClasses} w-full justify-start`}
                      >
                        <LogIn className="h-5 w-5" />
                        <span>Login</span>
                      </a>
                      <a
                        href={loginUrl}
                        className={`${signupButtonClasses} w-full justify-start`}
                      >
                        <UserPlus className="h-5 w-5" />
                        <span>Sign Up</span>
                      </a>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
