import { AvatarIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { Database } from "@/types/supabase";
import ClientSideCredits from "./realtime/ClientSideCredits";

export const dynamic = "force-dynamic";
const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === "true";
export const revalidate = 0;

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const {
    data: credits,
  } = await supabase.from("credits").select("*").eq("user_id", user?.id ?? '').single()

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Headshots AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
            >
              Blog
            </Link>
            
            {user && (
              <>
                <Link
                  href="/overview"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                >
                  Dashboard
                </Link>
                {stripeIsConfigured && (
                  <Link
                    href="/get-credits"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                  >
                    Get Credits
                  </Link>
                )}
              </>
            )}
            
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
            >
              About
            </Link>
          </div>

          {/* Right Side - Auth & User Menu */}
          <div className="flex items-center space-x-4">
            {/* Credits Display */}
            {user && stripeIsConfigured && (
              <div className="hidden md:flex items-center">
                <ClientSideCredits creditsRow={credits ? credits : null} />
              </div>
            )}

            {/* Auth Buttons */}
            {!user ? (
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-700 hover:text-gray-900 font-medium hidden md:inline-flex"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/login">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="relative h-9 w-9 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors"
                  >
                    <AvatarIcon className="h-5 w-5 text-orange-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 p-2" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal p-3">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm font-medium text-gray-900">My Account</p>
                      <p className="text-xs text-gray-500 truncate bg-gray-50 px-2 py-1 rounded">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/overview" className="flex items-center px-3 py-2">
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  {stripeIsConfigured && (
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link href="/get-credits" className="flex items-center px-3 py-2">
                        <span>Get Credits</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/pricing" className="flex items-center px-3 py-2">
                      <span>Pricing</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="p-0">
                    <form action="/auth/sign-out" method="post" className="w-full">
                      <Button
                        type="submit"
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start px-3 py-2 h-auto font-normal text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Sign Out
                      </Button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-9 w-9 p-0"
                  >
                    <HamburgerMenuIcon className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 p-2" align="end">
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/blog" className="flex items-center px-3 py-2">
                      Blog
                    </Link>
                  </DropdownMenuItem>
                  
                  {user && (
                    <>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href="/overview" className="flex items-center px-3 py-2">
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      {stripeIsConfigured && (
                        <DropdownMenuItem asChild className="cursor-pointer">
                          <Link href="/get-credits" className="flex items-center px-3 py-2">
                            Get Credits
                          </Link>
                        </DropdownMenuItem>
                      )}
                    </>
                  )}
                  
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/pricing" className="flex items-center px-3 py-2">
                      Pricing
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/about" className="flex items-center px-3 py-2">
                      About
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  
                  {!user ? (
                    <>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href="/login" className="flex items-center px-3 py-2">
                          Sign In
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href="/login" className="flex items-center px-3 py-2 font-medium text-orange-600">
                          Get Started
                        </Link>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem className="px-3 py-2 text-xs text-gray-500">
                        {user.email}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="p-0">
                        <form action="/auth/sign-out" method="post" className="w-full">
                          <Button
                            type="submit"
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start px-3 py-2 h-auto font-normal text-red-600 hover:text-red-700"
                          >
                            Sign Out
                          </Button>
                        </form>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
