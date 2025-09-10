"use client";

import { useState } from "react";
import Link from "next/link";
import { LogIn, UserPlus, ChevronDown, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseButtonShadow =
    "shadow-[0_6px_0_0_var(--color-primary-shadow)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] active:translate-y-[4px] active:shadow-[0_2px_0_0_var(--color-primary-shadow)] transition-all duration-200";
  const neutralShadow =
    "shadow-[0_6px_0_0_#E4E6EB] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#E4E6EB] active:translate-y-[4px] active:shadow-[0_2px_0_0_#E4E6EB]";
  const commonBase =
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold rounded-lg disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none h-8 gap-1.5 px-3";
  const languageButtonClasses = `${commonBase} bg-muted border border-border text-foreground ${neutralShadow}`;
  const loginButtonClasses = `${commonBase} bg-card border border-border text-foreground ${neutralShadow}`;
  const signupButtonClasses = `${commonBase} bg-primary text-primary-foreground ${baseButtonShadow}`;

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
                <Link href="/login" className={loginButtonClasses}>
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </Link>
                <Link href="/signup" className={signupButtonClasses}>
                  <UserPlus className="h-5 w-5" />
                  <span>Sign Up</span>
                </Link>
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
              <button
                className={`${languageButtonClasses} w-full justify-start`}
              >
                <span className="text-base">🇺🇸 🇬🇧</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
              <Link
                href="/login"
                className={`${loginButtonClasses} w-full justify-start`}
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
              <Link
                href="/signup"
                className={`${signupButtonClasses} w-full justify-start`}
              >
                <UserPlus className="h-5 w-5" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
