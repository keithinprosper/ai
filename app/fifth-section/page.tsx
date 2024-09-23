import Link from "next/link";
import { Button } from "@/components/ui/button";

const FifthSection = () => {
  return (
    <div className="md:pt-20 p-10">
      <div className="border-[1px] md:w-2/3 mx-auto p-10 rounded-xl">
        <div className="text-4xl font-bold mb-5">
          Start building your online AI headshots today.
        </div>
        <div>
          Curious about how Framecast AI can help your business? Get in touch
          with our team to learn more about our platform and how we can help you
          grow your business.
        </div>

        <Link href="/login">
          <Button className="px-6 py-3 md:w-1/4 mt-5 rounded-lg text-white text-lg bg-blue-600 hover:bg-blue-500">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FifthSection;
