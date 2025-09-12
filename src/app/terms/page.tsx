import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 12, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-xl p-8 border border-border mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                By accessing and using Beat2257, you accept and agree to be
                bound by the terms and provision of this agreement. Beat2257 is
                an AI-powered accounting case solver designed specifically for
                students.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Use License
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Permission is granted to temporarily use Beat2257 for personal,
                non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6 ml-4">
                <li>modify or copy the materials</li>
                <li>
                  use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  attempt to reverse engineer any software contained on Beat2257
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Educational Use
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Beat2257 is designed as an educational tool to help students
                learn accounting concepts and solve business cases. Users are
                expected to use the platform to enhance their learning
                experience while maintaining academic integrity according to
                their institution's policies.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. User Accounts
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. You are
                responsible for safeguarding the password and for all activities
                that occur under your account.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Prohibited Uses
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                You may not use our service:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6 ml-4">
                <li>
                  For any unlawful purpose or to solicit others to perform
                  unlawful acts
                </li>
                <li>
                  To violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights
                  or the intellectual property rights of others
                </li>
                <li>
                  To harass, abuse, insult, harm, defame, slander, disparage,
                  intimidate, or discriminate
                </li>
                <li>To submit false or misleading information</li>
                <li>
                  To upload or transmit viruses or any other type of malicious
                  code
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Content
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Our service allows you to post, link, store, share and otherwise
                make available certain information, text, graphics, or other
                material. You are responsible for the content that you post to
                the service, including its legality, reliability, and
                appropriateness.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Privacy Policy
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of the service, to
                understand our practices.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Termination
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                We may terminate or suspend your account immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Disclaimer
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                The information on this platform is provided on an 'as is'
                basis. To the fullest extent permitted by law, Beat2257 excludes
                all representations, warranties, conditions and terms whether
                express or implied.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                In no event shall Beat2257 or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use Beat2257.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Beat2257 reserves the right, at our sole discretion, to modify
                or replace these Terms at any time. If a revision is material,
                we will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Contact Information
              </h2>
              <p className="text-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us through our support channels or visit our Contact Us
                page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
