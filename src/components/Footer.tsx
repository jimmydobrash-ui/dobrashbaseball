import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-coal border-t border-iron py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/logo.png"
                alt="Dobrash Diamond Development logo"
                width={36}
                height={36}
                className="object-contain flex-shrink-0"
              />
              <span className="font-display font-bold text-white uppercase tracking-[0.12em] text-sm">
                Dobrash Diamond Development
              </span>
            </div>
            <p className="text-mist font-body text-xs italic pl-[48px]">
              Elite Development Delivered Remotely.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-mist font-display text-[10px] uppercase tracking-[0.18em] mb-2">
              Contact
            </p>
            <a
              href="mailto:dobrashbaseball@gmail.com"
              className="text-silver font-body text-sm hover:text-diamond transition-colors duration-200"
            >
              dobrashbaseball@gmail.com
            </a>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-10 pt-6 border-t border-iron flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-iron text-[10px] font-body tracking-wide order-2 sm:order-1">
            &copy; {year} DoDiDe LLC. All rights reserved.
          </p>
          <nav
            aria-label="Legal"
            className="flex gap-6 order-1 sm:order-2"
          >
            <Link
              href="/privacy"
              className="text-mist font-display text-[10px] uppercase tracking-[0.18em] hover:text-diamond transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-mist font-display text-[10px] uppercase tracking-[0.18em] hover:text-diamond transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/waiver"
              className="text-mist font-display text-[10px] uppercase tracking-[0.18em] hover:text-diamond transition-colors duration-200"
            >
              Liability Waiver
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
