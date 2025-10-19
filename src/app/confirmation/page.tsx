"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/sections/header";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const checkoutId = searchParams.get("checkout_id");
  const { user } = useAuth();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "processing">(
    "loading"
  );
  const [checkCount, setCheckCount] = useState(0);
  const maxChecks = 10; // Check for up to 10 times (about 30 seconds)

  useEffect(() => {
    if (!user || !checkoutId) return;

    const checkPurchaseStatus = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("has_active_purchase")
          .eq("id", user.id)
          .single();

        if (error) throw error;

        if (data?.has_active_purchase) {
          setStatus("success");
        } else if (checkCount < maxChecks) {
          // Still processing, check again in 3 seconds
          setStatus("processing");
          setCheckCount((prev) => prev + 1);
          setTimeout(checkPurchaseStatus, 3000);
        } else {
          // Max checks reached but still no purchase
          setStatus("processing");
        }
      } catch (err) {
        console.error("Error checking purchase status:", err);
        if (checkCount < maxChecks) {
          setTimeout(checkPurchaseStatus, 3000);
        }
      }
    };

    checkPurchaseStatus();
  }, [user, checkoutId, checkCount]);

  if (!user || !checkoutId) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto flex items-center justify-center px-6 py-16">
          <Card className="w-full max-w-2xl border border-gray-200 bg-white p-10 text-center shadow-lg">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                <AlertCircle className="h-8 w-8" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#111111]">
              Invalid Confirmation
            </h1>
            <p className="mb-8 text-lg text-[#7A8DBA]">
              This confirmation link is invalid or has expired.
            </p>
            <Button
              onClick={() => router.push("/pricing")}
              className="bg-primary text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)]"
            >
              Go to Pricing
            </Button>
          </Card>
        </main>
      </div>
    );
  }

  if (status === "success") {
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
              Welcome to Beat2257! 🎉
            </h1>
            <p className="mb-8 text-lg text-[#7A8DBA]">
              Your purchase was successful and your account has been activated.
              You now have access to unlimited case solving through December 31,
              2025.
            </p>
            <Button
              onClick={() =>
                (window.location.href =
                  process.env.NEXT_PUBLIC_APP_URL || "https://app.beat2257.com")
              }
              className="bg-primary text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)]"
            >
              Start Using Beat2257
            </Button>
          </Card>
        </main>
      </div>
    );
  }

  // Processing state
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto flex items-center justify-center px-6 py-16">
        <Card className="w-full max-w-2xl border border-gray-200 bg-white p-10 text-center shadow-lg">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#BCF3FF]/40 text-[#4341FF]">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-[#111111]">
            Processing Your Purchase...
          </h1>
          <p className="mb-8 text-lg text-[#7A8DBA]">
            We're activating your account. This usually takes just a few
            seconds.
          </p>
          <p className="text-sm text-[#7A8DBA]">
            Checkout ID: {checkoutId.substring(0, 20)}...
          </p>
        </Card>
      </main>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container mx-auto flex items-center justify-center px-6 py-16">
            <Card className="w-full max-w-2xl border border-gray-200 bg-white p-10 text-center shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#BCF3FF]/40 text-[#4341FF]">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-[#111111]">
                Loading...
              </h1>
              <p className="text-lg text-[#7A8DBA]">
                Please wait while we load your confirmation.
              </p>
            </Card>
          </main>
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
