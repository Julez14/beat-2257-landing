"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/sections/header";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [checkingPurchase, setCheckingPurchase] = useState(true);
  const [hasPurchase, setHasPurchase] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      // Redirect to sign up if not authenticated
      router.push("/auth/signup");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    async function checkExistingPurchase() {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("has_active_purchase, access_expires_at")
          .eq("id", user.id)
          .single();

        if (error) throw error;

        if (data?.has_active_purchase) {
          // Check if access has expired
          const expiresAt = data.access_expires_at
            ? new Date(data.access_expires_at)
            : null;
          const now = new Date();

          if (expiresAt && now <= expiresAt) {
            setHasPurchase(true);
          }
        }
      } catch (err) {
        console.error("Error checking purchase:", err);
      } finally {
        setCheckingPurchase(false);
      }
    }

    if (user) {
      checkExistingPurchase();
    }
  }, [user]);

  const handleCheckout = () => {
    // Use the Polar checkout API route
    const checkoutUrl = new URL("/api/checkout", window.location.origin);

    // Add product ID and prefill customer email
    if (process.env.NEXT_PUBLIC_POLAR_PRODUCT_ID) {
      checkoutUrl.searchParams.set(
        "product_id",
        process.env.NEXT_PUBLIC_POLAR_PRODUCT_ID
      );
    }
    if (user?.email) {
      checkoutUrl.searchParams.set("customer_email", user.email);
    }

    // Redirect to checkout API route which will create session and redirect to Polar
    window.location.href = checkoutUrl.toString();
  };

  if (authLoading || checkingPurchase) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto flex items-center justify-center px-6 py-16">
          <div className="flex items-center gap-3 text-[#7A8DBA]">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading...</span>
          </div>
        </main>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to signup
  }

  if (hasPurchase) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto flex items-center justify-center px-6 py-16">
          <Card className="w-full max-w-2xl border border-gray-200 bg-white p-10 text-center shadow-lg">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#BCF3FF]/40 text-[#4341FF]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#111111]">
              You're All Set!
            </h1>
            <p className="mb-8 text-lg text-[#7A8DBA]">
              You already have access to Beat2257. Start solving cases now!
            </p>
            <Button
              onClick={() =>
                (window.location.href =
                  process.env.NEXT_PUBLIC_APP_URL || "https://app.beat2257.com")
              }
              className="bg-primary text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] active:translate-y-[4px] active:shadow-[0_2px_0_0_var(--color-primary-shadow)]"
            >
              Go to App
            </Button>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#111111]">
              Complete Your Purchase
            </h1>
            <p className="text-lg text-[#7A8DBA]">
              You're signed in as <strong>{user.email}</strong>
            </p>
          </div>

          <Card className="border border-gray-200 bg-white p-8 shadow-lg">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-[#111111]">
                Beat2257 Fall 2025
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-[#111111]">$95</span>
                <span className="text-sm font-semibold uppercase tracking-widest text-[#7F91BD]">
                  Per Semester
                </span>
              </div>
            </div>

            <div className="mb-8 space-y-4 border-y border-gray-200 py-8">
              <h3 className="text-lg font-semibold text-[#111111]">
                What's Included
              </h3>
              <ul className="space-y-3">
                {[
                  "Unlimited Case Solving",
                  "Beautifully Crafted Super-Ts",
                  "Casey AI Assistant",
                  "Transaction Breakdowns",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#4341FF]" />
                    <span className="text-[#4B5D87]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 rounded-lg bg-[#BCF3FF]/20 p-4">
              <p className="text-sm text-[#4B5D87]">
                <strong>Important:</strong> Your purchase will be linked to{" "}
                <strong>{user.email}</strong>. Make sure this is the correct
                email address.
              </p>
            </div>

            <Button
              onClick={handleCheckout}
              className="w-full bg-primary text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] active:translate-y-[4px] active:shadow-[0_2px_0_0_var(--color-primary-shadow)]"
            >
              Proceed to Checkout
            </Button>

            <div className="mt-6 space-y-1 text-center text-sm text-[#7A8DBA]">
              <p>Instant access · Valid through December 31, 2025</p>
              <p>3-day money-back guarantee, no questions asked</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
