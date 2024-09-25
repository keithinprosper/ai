"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    name: "Customizable",
    description:
      "Unleash your creative vision! Choose from a vast library of designer-crafted templates as a starting point for your AI-generated headshot.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: "Fast & Effortless",
    description:
      "Skip the photoshoot! Generate stunning, high-quality headshots in seconds, right from your browser.",
    image: "/images/icon-fast.png",
    alt: "Fast & Effortless",
  },
  {
    name: "Seamless Integrations",
    description:
      "Integrate Framecast AI seamlessly into your existing workflow. Effortlessly generate headshots.",
    image: "/images/icon-journey.png",
    alt: "Seamless Integrations",
  },
  {
    name: "Full Stack Solution",
    description:
      "Framecast AI goes beyond headshot generation. Our comprehensive platform offers a suite of features to elevate your professional image.",
    image: "/images/icon-layer.png",
    alt: "Full Stack Solutions",
  },
  {
    name: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/images/icon-location.png",
    alt: "Loyalty",
  },
  {
    name: "Support",
    image: "/images/icon-support-1.png",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Support",
  },
];

const SecondSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative flex flex-col items-center">
          {/* Circle with gradient and number */}
          <div className="bg-gradient-to-l from-orange-500 to-orange-300 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold z-10">
            1
          </div>
          {/* Gradient stroke line with fade out at the end */}
          <div className="w-1 h-10 rounded-lg bg-gradient-to-b from-orange-600 to-transparent mt-[-2px]"></div>
        </div>

        <div className="text-6xl font-bold text-center mt-2">
          Upload your photos
        </div>

        <div className="items-center justify-center flex text-xl font-md px-10 tracking-wider text-slate-700 mt-4 max-w-4xl text-center">
          Submit 4 or more high-quality selfies. Ensure they are front-facing,
          with only one person, no hats or accessories.
        </div>

        <div className="flex justify-center items-center mt-8">
          <div className="flex flex-col items-center">
            {/* Row with images on left, center, and right */}
            <div className="flex justify-between w-full max-w-7xl">
              {/* Left side */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex gap-6 mb-1">
                  {/* Three images up */}
                  <Image
                    src="/avatars/7.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 1"
                  />
                  <Image
                    src="/avatars/1.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 2"
                  />
                  <Image
                    src="/avatars/8.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 3"
                  />
                </div>
                <div className="flex gap-6 mt-6">
                  {/* Three images down */}
                  <Image
                    src="/avatars/4.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 4"
                  />
                  <Image
                    src="/avatars/9.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 5"
                  />
                  <Image
                    src="/avatars/3.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 6"
                  />
                </div>
              </div>

              {/* Center image */}
              <div className="relative mx-8 w-[220px] h-[480px]">
                {/* Image */}
                <Image
                  src="/avatars/phone.svg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl drop-shadow-xl"
                  alt="Center image"
                  loading="eager"
                />

                {/* Video positioned on top of the image */}
                <video
                  src="/avatars/tutorial.mp4"
                  autoPlay
                  loop
                  muted
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[200px] h-[430px] rounded-3xl"
                />
              </div>

              {/* Right side */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex gap-6 mb-1">
                  {/* Three images up */}
                  <Image
                    src="/avatars/5.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 7"
                  />
                  <Image
                    src="/avatars/10.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 8"
                  />
                  <Image
                    src="/avatars/6.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg bg-white "
                    alt="image 9"
                  />
                </div>
                <div className="flex gap-6 mt-6">
                  {/* Three images down */}
                  <Image
                    src="/avatars/12.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 10"
                  />
                  <Image
                    src="/avatars/2.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 11"
                  />
                  <Image
                    src="/avatars/11.png"
                    width={105}
                    height={105}
                    className="rounded-2xl drop-shadow-lg"
                    alt="image 12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
