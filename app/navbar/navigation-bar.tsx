import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles, CreditCard, LayoutDashboard, LogOut, User, FileText, DollarSign } from "lucide-react";

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  // Mock data - replace with your actual data
  const user = { email: "user@example.com", id: "123" }; // Set to null to test logged out state
  const credits = { credits_balance: 250 };
  const stripeIsConfigured = true;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100" 
        : "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo/Brand - Enhanced with animation */}
          <div className="flex items-center">
            <a href="/" className="group flex items-center space-x-3 transition-transform hover:scale-105">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Pixaify
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Modernized */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <a
              href="/blog"
              className="group relative rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:text-gray-900"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Blog</span>
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </a>
            
            {user && (
              <>
                <a
                  href="/overview"
                  className="group relative rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:text-gray-900"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </a>
                {stripeIsConfigured && (
                  <a
                    href="/get-credits"
                    className="group relative rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:text-gray-900"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Get Credits</span>
                    </span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </a>
                )}
              </>
            )}
            
            <a
              href="/pricing"
              className="group relative rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:text-gray-900"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>Pricing</span>
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </a>
          </div>

          {/* Right side - Auth & User Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Credits Display - Enhanced */}
            {user && stripeIsConfigured && credits && (
              <div className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-1.5 border border-amber-200/50">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-400">
                  <span className="text-xs font-bold text-white">C</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {credits.credits_balance.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500">credits</span>
              </div>
            )}

            {/* Auth Buttons */}
            {!user ? (
              <div className="flex items-center space-x-3">
                <a
                  href="/login"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100"
                >
                  Sign In
                </a>
                <a
                  href="/login"
                  className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </a>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 transition-all hover:from-gray-200 hover:to-gray-300 hover:shadow-lg"
                >
                  <User className="h-5 w-5 text-gray-700" />
                </button>
                
                {/* Dropdown Menu - Enhanced */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in slide-in-from-top-2">
                    <div className="p-4 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">Account</p>
                      <p className="mt-1 text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <div className="p-2">
                      <a
                        href="/overview"
                        className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Dashboard</span>
                      </a>
                      {stripeIsConfigured && (
                        <a
                          href="/get-credits"
                          className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                        >
                          <CreditCard className="h-4 w-4" />
                          <span>Get Credits</span>
                        </a>
                      )}
                      <a
                        href="/pricing"
                        className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                      >
                        <DollarSign className="h-4 w-4" />
                        <span>Pricing</span>
                      </a>
                    </div>
                    <div className="border-t border-gray-100 p-2">
                      <a
                        href="/auth/sign-out"
                        className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button - Enhanced */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Enhanced with smooth animations */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg animate-in slide-in-from-top-2">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <a
              href="/blog"
              className="flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              <FileText className="h-5 w-5" />
              <span>Blog</span>
            </a>
            
            {user && (
              <>
                <a
                  href="/overview"
                  className="flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </a>
                {stripeIsConfigured && (
                  <>
                    <a
                      href="/get-credits"
                      className="flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                    >
                      <CreditCard className="h-5 w-5" />
                      <span>Get Credits</span>
                    </a>
                    {credits && (
                      <div className="flex items-center space-x-2 rounded-lg bg-amber-50 px-3 py-2">
                        <span className="text-sm font-medium text-gray-700">Credits:</span>
                        <span className="font-bold text-amber-600">
                          {credits.credits_balance.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            
            <a
              href="/pricing"
              className="flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              <DollarSign className="h-5 w-5" />
              <span>Pricing</span>
            </a>
            
            <div className="border-t border-gray-200 pt-2">
              {!user ? (
                <>
                  <a
                    href="/login"
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Sign In
                  </a>
                  <a
                    href="/login"
                    className="mt-2 block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-center text-base font-medium text-white"
                  >
                    Get Started
                  </a>
                </>
              ) : (
                <>
                  <div className="px-3 py-2">
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <a
                    href="/auth/sign-out"
                    className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Sign Out</span>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ModernNavbar;
