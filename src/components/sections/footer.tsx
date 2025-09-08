import Image from 'next/image';
import Link from 'next/link';
import { Globe, ChevronDown, Facebook, Linkedin, Instagram } from 'lucide-react';

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
  { name: 'X', href: '#', icon: <XIcon className="h-5 w-5" /> },
  { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { name: 'Instagram', href: '#', icon: <Instagram className="h-5 w-5" /> },
];

const footerLinks = {
  product: [{ name: 'Chrome Extension', href: '#' }],
  company: [{ name: 'Contact Us', href: '#' }],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  useCases: [{ name: 'Cursor for Writing', href: '#' }],
};

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          <div className="lg:w-1/3">
            <Link href="/">
              <Image
                src="https://vibelearn.com/_next/image?url=%2Fimages%2Fbrand%2Fvibelearn.png&w=256&q=75"
                alt="VibeLearn"
                width={120}
                height={32}
                className="h-8 w-auto"
                unoptimized
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Vibe is the only AI Productivity Tool that meets you where you already are. Google Docs, PDFs, or anywhere on the Web.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid flex-grow grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="font-semibold text-sm text-foreground">Product</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="font-semibold text-sm text-foreground">Company</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button className="flex items-center text-sm text-muted-foreground hover:text-primary w-full text-left transition-colors">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>English</span>
                    <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold text-sm text-foreground">Use Cases</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.useCases.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-muted hover:bg-gray-200 transition-colors px-3 py-1.5 text-sm font-medium text-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              All Systems Operational
            </a>
        </div>
      </div>
    </footer>
  );
}