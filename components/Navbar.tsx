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
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Headshots AI</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/blog" className="text-gray-700 hover:text-orange-600">
              Blog
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-orange-600">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600">
              About
            </Link>
            
            {!user ? (
              <Link href="/login">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  Get Started
                </Button>
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                {stripeIsConfigured && (
                  <ClientSideCredits creditsRow={credits ? credits : null} />
                )}
                <Link href="/overview" className="text-gray-700 hover:text-orange-600">
                  Dashboard
                </Link>
                <form action="/auth/sign-out" method="post" className="inline">
                  <Button variant="ghost" type="submit" className="text-red-600 hover:text-red-700">
                    Sign Out
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
