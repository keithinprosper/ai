import Link from "next/link";
import { FaPaintBrush } from "react-icons/fa";

const FourthSection = () => {
  return (
    <div className="relative py-10 lg:py-28 md:py-20 my-20">
      {/* Floating images - Left Side */}
      <div className="absolute left-[180px] top-[50px] space-y-8">
        <div className="animate-float-left-up-down">
          <img
            src="/headshots/human1.jpeg"
            alt="Image 1"
            className="w-[125px] h-[150px] object-cover rounded-lg shadow-custom-shadow rotate-2"
            loading="lazy"
          />
        </div>
        <div className="animate-float-left-up-down delay-200">
          <img
            src="/headshots/human2.jpeg"
            alt="Image 2"
            className="w-[125px] h-[150px] object-cover rounded-lg shadow-custom-shadow ml-10"
            loading="lazy"
          />
        </div>
        <div className="animate-float-left-up-down delay-400">
          <img
            src="/headshots/human3.jpeg"
            alt="Image 3"
            className="w-[125px] h-[150px] object-cover rounded-lg shadow-custom-shadow rotate-2"
            loading="lazy"
          />
        </div>
      </div>

      {/* Floating images - Right Side */}
      <div className="absolute right-[180px] top-[50px] space-y-8">
        <div className="animate-float-right-up-down">
          <img
            src="/headshots/human4.jpeg"
            alt="Image 4"
            className="w-[125px] h-[150px] object-cover rounded-lg shadow-custom-shadow rotate-[-2deg]"
            loading="lazy"
          />
        </div>
        <div className="animate-float-right-up-down delay-200">
          <img
            src="/headshots/human5.jpg"
            alt="Image 5"
            className="w-[125px] h-[150px] object-cover rounded-lg shadow-custom-shadow ml-[-40px]"
            loading="lazy"
          />
        </div>
        <div className="animate-float-right-up-down delay-400">
          <img
            src="/headshots/human6.jpeg"
            alt="Image 6"
            className="w-[125px] h-[150px] object-cover rounded-lg shadow-custom-shadow rotate-[-2deg]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center">
        <div
          className="text-7xl justify-center text-center font-bold pb-4 text-gradient bg-gradient-to-l from-[#f95a48] to-[#ffbfb8]
          max-w-3xl bg-clip-text text-transparent"
        >
          Money-back Guarantee.
        </div>
      </div>
      <div className="mt-2 text-center justify-center items-center flex">
        <p className="text-2xl md:text-2xl md:px-44 font-md tracking-wider max-w-6xl">
          Try Pixaify with confidence. Not completely satisfied? Let us know
          within 7 days of purchase for a full refund.
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
    </div>
  );
};

export default FourthSection;
