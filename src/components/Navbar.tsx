import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavbarProps = {
  scrolled: boolean;
};

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/20 backdrop-blur border-b border-slate-800"
          : "bg-slate-950/20 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex space-x-1 items-center group cursor-pointer">
            <img
              src="/logo.png"
              alt="CodeFlow"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              CodeFlow AI
            </span>
          </div>

          {/* Nav Links */}
          <div className="md:flex items-center space-x-6 lg:space-x-8 hidden">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
          <button
            className="md:hidden text-gray-300 p-2 items-center hover:text-white cursor-pointer"
            onClick={() => setmobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 ">
            <a
              href="#features"
              onClick={() => setmobileMenuIsOpen(false)}
              className="text-gray-300 hover:text-white text-sm lg:text-base block"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setmobileMenuIsOpen(false)}
              className="text-gray-300 hover:text-white text-sm lg:text-base block"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setmobileMenuIsOpen(false)}
              className="text-gray-300 hover:text-white text-sm lg:text-base block"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
