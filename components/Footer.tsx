import Image from "next/image";
import Link from "next/link";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

const hpsnvLinks = [
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Application Registration", href: "/application-registration" },
  { label: "Contact", href: "/contact" },
];

const holdingLinks = [
  { label: "About", href: "https://pansa-holding.vercel.app/about-us" },
  { label: "How We Work", href: "https://pansa-holding.vercel.app/how-we-work" },
  { label: "Sustainability", href: "https://pansa-holding.vercel.app/sustainability" },
  { label: "Events", href: "https://pansa-holding.vercel.app/events" },
  { label: "Contact", href: "https://pansa-holding.vercel.app/contact" },
];

const machineShopLinks = [
  { label: "About", href: "https://wordpress-788002-4027960.cloudwaysapps.com/about-us/" },
  { label: "How We Work", href: "https://wordpress-788002-4027960.cloudwaysapps.com/how-we-work/" },
  { label: "Services & Products", href: "https://wordpress-788002-4027960.cloudwaysapps.com/services-products/" },
  { label: "Contact", href: "https://wordpress-788002-4027960.cloudwaysapps.com/contact-us/" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-light-gray border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand & Contact */}
        <div className="lg:col-span-2">
          <Link href="/">
            <Image
              src={`${BASE}/PansaSons-logo-300x233.jpg`}
              alt="CCC H. Pansa & Sons N.V."
              width={100}
              height={78}
              className="mb-5 object-contain"
            />
          </Link>
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-1 text-sm uppercase tracking-wide">Office</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Martin Luther King Highway km 23<br />Para – Suriname (South America)
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-1 text-sm uppercase tracking-wide">Support</h4>
            <a href="mailto:info@hpsnv.com" className="text-brand-green text-sm hover:underline">
              info@hpsnv.com
            </a>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-1 text-sm uppercase tracking-wide">More Information</h4>
            <p className="text-gray-500 text-sm">
              Phone: (+597) 6802051 / (+597) 6802052<br />
              Mobile: (+597) 7698047 / (+597) 7698050
            </p>
          </div>
        </div>

        {/* CCC H. Pansa & Sons */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
            CCC H. Pansa &amp; Sons N.V.
          </h4>
          <ul className="space-y-2">
            {hpsnvLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-gray-500 text-sm hover:text-brand-green transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pansa Holding */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
            Pansa Group of Companies N.V.
          </h4>
          <ul className="space-y-2">
            {holdingLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-gray-500 text-sm hover:text-brand-green transition-colors" target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Pansa Machine Shop */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
            Pansa Machine Shop N.V.
          </h4>
          <ul className="space-y-2">
            {machineShopLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-gray-500 text-sm hover:text-brand-green transition-colors" target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2019–2023 Pansa Group of Companies N.V. All rights reserved.</p>
          <p>Design by Suritargets</p>
        </div>
      </div>
    </footer>
  );
}
