import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CustomCursor from "@/components/custom-cursor";

export const metadata = {
  title: "Pixaify",
  description: "Generate awesome headshots in minutes using AI",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CustomCursor />
        <NextTopLoader color="rgb(249 115 22)" height={5} showSpinner={false} />
        <Suspense
          fallback={
            <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
          }
        >
          <Navbar />
        </Suspense>
        <main className="flex-grow items-center py-16">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
