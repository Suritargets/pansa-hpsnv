export default function TopBar() {
  return (
    <div className="bg-brand-yellow py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-800">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <span>
            <strong>Phone:</strong> (+597) 6802051 / (+597) 6802052 &nbsp;
            <strong>Mobile:</strong> (+597) 7698047 / (+597) 7698050
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium">info@hpsnv.com</span>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
