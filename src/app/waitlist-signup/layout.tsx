import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Beat2257 Waitlist - Join the Future of AI Case Solving",
  description:
    "Sign up for early access to Beat2257, the AI business case solver that helps you excel in class and never miss contribution marks again.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function WaitlistSignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
