import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const ActionButtons = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex items-center space-x-4">
      {/* Desktop Navigation - Non-logged in users */}
      {!user && (
        <>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link 
              href="/blog" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/#pricing" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/refund" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Refunds
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <Link href="/overview">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/overview">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 font-medium px-6"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                  <AlignJustify className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                      <span className="text-sm font-bold text-white">P</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Pixaify</span>
                  </div>
                </SheetHeader>
                
                <SheetDescription asChild>
                  <nav className="flex flex-col space-y-4">
                    <Link 
                      href="/" 
                      className="flex items-center py-3 text-lg font-medium text-gray-900 border-b border-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Home
                    </Link>
                    <Link 
                      href="/blog" 
                      className="flex items-center py-3 text-lg font-medium text-gray-900 border-b border-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/#pricing" 
                      className="flex items-center py-3 text-lg font-medium text-gray-900 border-b border-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Pricing
                    </Link>
                    <Link 
                      href="/refund" 
                      className="flex items-center py-3 text-lg font-medium text-gray-900 border-b border-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Refunds
                    </Link>
                    
                    {/* Mobile Auth Buttons */}
                    <div className="pt-6 space-y-3">
                      <Link href="/overview" className="block">
                        <Button 
                          variant="outline" 
                          className="w-full justify-center py-3 text-base font-medium"
                        >
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/overview" className="block">
                        <Button 
                          className="w-full justify-center py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </>
      )}

      {/* Logged-in users */}
      {user && (
        <>
          {/* Desktop Navigation for Logged-in Users */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link 
              href="/overview" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/get-credits" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Get Credits
            </Link>
          </div>

          {/* Mobile Menu for Logged-in Users */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                  <AlignJustify className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                      <span className="text-sm font-bold text-white">P</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Pixaify</span>
                  </div>
                </SheetHeader>
                
                <SheetDescription asChild>
                  <nav className="flex flex-col space-y-4">
                    <Link 
                      href="/overview" 
                      className="flex items-center py-3 text-lg font-medium text-gray-900 border-b border-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link 
                      href="/blog" 
                      className="flex items-center py-3 text-lg font-medium text-gray-900 border-b border-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/get-credits" 
                      className="flex items-center py-3 text-lg font-medium text-gray-900 border-b border-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Get Credits
                    </Link>
                    
                    {/* Logout Button */}
                    <div className="pt-6">
                      <form action="/auth/sign-out" method="post">
                        <Button
                          type="submit"
                          variant="outline"
                          className="w-full justify-center py-3 text-base font-medium text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                        >
                          Sign Out
                        </Button>
                      </form>
                    </div>
                  </nav>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </>
      )}
    </div>
  );
};

export default ActionButtons;
