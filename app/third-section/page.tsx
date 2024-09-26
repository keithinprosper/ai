import Testimonial from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import { FaPaintBrush } from "react-icons/fa";

const ThirdSection = () => {
  return (
    <div className="bg-orange-100 py-20">
      <div className="flex justify-center items-center">
        <div
          className="text-7xl flex justify-center text-center font-bold pb-4 text-gradient bg-gradient-to-r from-orange-700
        max-w-3xl to-red-400 bg-clip-text text-transparent"
        >
          5000+ AI headshots generated.
        </div>
      </div>
      <div className="text-center justify-center items-center flex">
        <p className="text-2xl md:text-2xl md:px-44 font-md tracking-wider max-w-6xl">
          Read what people are saying about their new headshots.
        </p>
      </div>
      <div className="flex gap-4 justify-center pt-8">
        <Link href="/login">
          <button
            className="flex gap-3 items-center text-center bg-orange-700 hover:bg-orange-800 font-medium text-white px-6 py-2 rounded-lg text-lg 
              transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            Get Your Headshots
            {<FaPaintBrush />}
          </button>
        </Link>
      </div>
      <div className="mt-[-70px]">
        <Testimonial />
      </div>
    </div>
  );
};

export default ThirdSection;
