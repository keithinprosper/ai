import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import FirstSection from "./first-section/page";
import Carousel from "../components/ui/carousel";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import FourthSection from "./fourth-section/page";
import PricingSection from "./pricing/page";
import Faqs from "./faqs/page";
import StripePricingTable from "@/components/stripe/StripeTable";

export const dynamic = "force-dynamic";

export default async function Index() {
  const cookiesStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookiesStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <div>
      <FirstSection />
      <Carousel />
      <SecondSection />
      <ThirdSection />
      <PricingSection />
      <FourthSection />
      <Faqs />
    </div>
  );
}
