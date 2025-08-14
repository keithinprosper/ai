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
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-sm font-bold text-white">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Pixaify</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/blog"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              
              {user && (
                <>
                  <Link
                    href="/overview"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  >
                    Dashboard
                  </Link>
                  {stripeIsConfigured && (
                    <Link
                      href="/get-credits"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                      Get Credits
                    </Link>
                  )}
                </>
              )}
              
              <Link
                href="/pricing"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Right side - Auth & User Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {/* Credits Display */}
              {user && stripeIsConfigured && (
                <div className="flex items-center space-x-2">
                  <ClientSideCredits creditsRow={credits ? credits : null} />
                </div>
              )}

              {/* Auth Buttons */}
              {!user ? (
                <div className="flex items-center space-x-2">
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0">
                      Get Started
                    </Button>
                  </Link>
                </div>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                      <AvatarIcon className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Account</p>
                        <p className="text-xs leading-none text-muted-foreground truncate">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/overview" className="cursor-pointer">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    {stripeIsConfigured && (
                      <DropdownMenuItem asChild>
                        <Link href="/get-credits" className="cursor-pointer">
                          Get Credits
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild>
                      <Link href="/pricing" className="cursor-pointer">
                        Pricing
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <form action="/auth/sign-out" method="post" className="w-full">
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start p-0 h-auto font-normal"
                        >
                          Sign Out
                        </Button>
                      </form>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8">
                  <HamburgerMenuIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem asChild>
                  <Link href="/blog" className="cursor-pointer">
                    Blog
                  </Link>
                </DropdownMenuItem>
                
                {user && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/overview" className="cursor-pointer">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    {stripeIsConfigured && (
                      <DropdownMenuItem asChild>
                        <Link href="/get-credits" className="cursor-pointer">
                          Get Credits
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </>
                )}
                
                <DropdownMenuItem asChild>
                  <Link href="/pricing" className="cursor-pointer">
                    Pricing
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                {!user ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/login" className="cursor-pointer">
                        Sign In
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/login" className="cursor-pointer font-medium">
                        Get Started
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem className="text-sm text-gray-500">
                      {user.email}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <form action="/auth/sign-out" method="post" className="w-full">
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start p-0 h-auto font-normal"
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
    </nav>
  );
}
