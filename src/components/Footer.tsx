import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-coal border-t border-iron py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
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

        {/* Contact + legal */}
        <div className="text-center md:text-right">
          <p className="text-mist font-display text-[10px] uppercase tracking-[0.18em] mb-2">
            Contact
          </p>
          <a
            href="mailto:jimmydobrash@gmail.com"
            className="text-silver font-body text-sm hover:text-diamond transition-colors duration-200"
          >
            jimmydobrash@gmail.com
          </a>
          <p className="text-iron text-[10px] font-body mt-5 tracking-wide">
            &copy; {year} DoDiDe LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
