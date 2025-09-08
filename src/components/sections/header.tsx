"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogIn, UserPlus, ChevronDown, Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languageButtonClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none h-8 px-3 py-2 bg-gray-50 border border-gray-200 text-gray-800 shadow-[0_6px_0_0_rgb(229,231,235)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_rgb(229,231,235)] active:translate-y-[4px] active:shadow-[0_2px_0_0_rgb(229,231,235)]";
  const loginButtonClasses = "inline-flex items-center justify-center whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none bg-gray-50 font-bold border border-gray-200 text-gray-800 rounded-lg shadow-[0_6px_0_0_rgb(229,231,235)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_rgb(229,231,235)] active:translate-y-[4px] active:shadow-[0_2px_0_0_rgb(229,231,235)] transition-all duration-200 h-8 gap-1.5 px-3";
  const signupButtonClasses = "inline-flex items-center justify-center whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none bg-sky-600 font-bold text-white rounded-lg shadow-[0_6px_0_0_rgb(3,105,161)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_rgb(3,105,161)] active:translate-y-[4px] active:shadow-[0_2px_0_0_rgb(3,105,161)] transition-all duration-200 h-8 gap-1.5 px-3";

  return (
    <header className="relative">
      <nav className="relative top-4 z-50 backdrop-blur-xl bg-white/90 border border-gray-200/50 mx-4 rounded-2xl transition-all duration-300 shadow-lg shadow-sky-600/5">
        <div className="px-3 sm:px-4 lg:px-6">
          <div className="relative flex h-16 sm:h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 sm:static">
                <Link href="/" className="flex-shrink-0">
                  <Image
                    alt="VibeLearn"
                    width={120}
                    height={32}
                    className="h-8 w-auto"
                    src="/_next/image?url=%2Fimages%2Fbrand%2Fvibelearn.png&w=256&q=75"
                    priority
                  />
                </Link>
              </div>
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
                <button className={languageButtonClasses}>
                  <span className="text-base">🇺🇸 🇬🇧</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </button>
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
                className="relative inline-flex items-center justify-center rounded-lg p-2 text-sky-700 hover:bg-sky-50/50 transition-all"
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
              <button className={`${languageButtonClasses} w-full justify-start`}>
                <span className="text-base">🇺🇸 🇬🇧</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
              <Link href="/login" className={`${loginButtonClasses} w-full justify-start`}>
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
              <Link href="/signup" className={`${signupButtonClasses} w-full justify-start`}>
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