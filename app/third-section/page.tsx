import Testimonial from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import { FaPaintBrush } from "react-icons/fa";

const ThirdSection = () => {
  return (
    <div className="bg-orange-100 py-8 sm:py-12 md:py-20">
      <div className="flex justify-center items-center px-4 sm:px-6 md:px-8">
        <h2
          className="text-4xl sm:text-5xl md:text-7xl text-center font-bold pb-4 text-gradient bg-gradient-to-r from-orange-700
        to-red-400 bg-clip-text text-transparent max-w-3xl"
        >
          5000+ AI headshots generated.
        </h2>
      </div>
      <div className="text-center justify-center items-center flex px-4 sm:px-6 md:px-8">
        <p className="text-xl sm:text-2xl font-medium tracking-wider max-w-6xl md:px-44">
          Read what people are saying about their new headshots.
        </p>
      </div>
      <div className="flex justify-center pt-6 sm:pt-8">
        <Link href="/login">
          <button
            className="flex gap-3 items-center text-center bg-orange-700 hover:bg-orange-800 font-medium text-white px-4 sm:px-6 py-2 rounded-lg text-base sm:text-lg 
              transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            Get Your Headshots
            <FaPaintBrush />
          </button>
        </Link>
      </div>
      <div className="sm:mt-12 md:mt-[-70px]">
        <Testimonial />
      </div>
    </div>
  );
};

export default ThirdSection;
