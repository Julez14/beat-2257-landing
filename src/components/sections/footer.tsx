import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/julianlaxman",
    icon: <XIcon className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/julian-laxman",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/beat.2257",
    icon: <Instagram className="h-5 w-5" />,
  },
];

const footerLinks = {
  product: [{ name: "Chrome Extension", href: "#" }],
  company: [{ name: "Contact Us", href: "#" }],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  useCases: [{ name: "Cursor for Writing", href: "#" }],
};

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="lg:w-1/3">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-black text-primary font-sans">
                Beat2257
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Beat2257 is the only business case solver designed for students,
              by students.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid flex-grow grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="font-semibold text-sm text-foreground">Company</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sm text-foreground">Legal</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
