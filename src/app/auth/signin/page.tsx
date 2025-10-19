"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Header from "@/components/sections/header";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await signIn(email, password);
      // Redirect to checkout after successful sign in
      router.push("/checkout");
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto flex items-center justify-center px-6 py-16">
        <Card className="w-full max-w-md border border-gray-200 bg-white p-8 shadow-lg">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-[#111111]">Welcome Back</h1>
            <p className="mt-2 text-sm text-[#7A8DBA]">
              Sign in to continue to checkout
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-[#111111]"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={loading}
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-[#111111]"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={loading}
                className="w-full"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] active:translate-y-[4px] active:shadow-[0_2px_0_0_var(--color-primary-shadow)]"
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#7A8DBA]">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-semibold text-[#4341FF] hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
