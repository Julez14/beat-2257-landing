import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 12, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-xl p-8 border border-border mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                At Beat2257, we are committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our AI accounting case
                solver platform.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Personal Information
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                We may collect personal information that you provide directly to
                us, including:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6 ml-4">
                <li>Name and contact information (email address)</li>
                <li>Account credentials (username and password)</li>
                <li>Educational institution information</li>
                <li>Academic level and course information</li>
                <li>
                  Payment information (processed securely through third-party
                  providers)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Usage Information
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                We automatically collect certain information about your use of
                our platform:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6 ml-4">
                <li>Case solutions and study sessions</li>
                <li>Platform usage patterns and preferences</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6 ml-4">
                <li>Provide and maintain our educational services</li>
                <li>Personalize your learning experience</li>
                <li>Process payments and manage your account</li>
                <li>Communicate with you about your account and services</li>
                <li>Improve our platform and develop new features</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties except as described in this Privacy
                Policy. We may share your information in the following
                circumstances:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Service Providers
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                We may share your information with trusted third-party service
                providers who assist us in operating our platform, conducting
                our business, or serving our users, provided they agree to keep
                this information confidential.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Legal Requirements
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                We may disclose your information if required by law or in
                response to valid requests by public authorities (e.g., a court
                or government agency).
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Data Security
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Data Retention
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law. When we
                no longer need your information, we will securely delete or
                anonymize it.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                We use cookies and similar tracking technologies to enhance your
                experience on our platform. You can control cookie settings
                through your browser preferences, though disabling cookies may
                affect platform functionality.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Your information may be transferred to and processed in
                countries other than your own. We ensure that such transfers
                comply with applicable data protection laws and provide
                appropriate safeguards.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. We encourage you
                to review this Privacy Policy periodically.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Contact Us
              </h2>
              <p className="text-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us through our support
                channels or visit our Contact Us page. We are committed to
                resolving any privacy concerns you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
