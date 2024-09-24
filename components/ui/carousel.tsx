"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";

const images = [
  {
    url: "/images/logo/logo-2.svg",
    alt: "Logo",
  },
  {
    url: "/images/logo/logo-3.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-4.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-7.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-8.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-9.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-10.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-11.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-12.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-13.svg",
    alt: "Logo",
  },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mt-[-70px]">
      <div className="flex items-center justify-center pb-4">
        <RiStarSFill size={20} color="#c2410c" />
        <RiStarSFill size={20} color="#c2410c" />
        <RiStarSFill size={20} color="#c2410c" />
        <RiStarSFill size={20} color="#c2410c" />
        <RiStarSFill size={20} color="#c2410c" />
      </div>
      <div className="items-center justify-center flex text-md font-md px-10 uppercase tracking-wider text-slate-400">
        Trusted by leading brands & professionals.
      </div>
      <div className="grid grid-cols-3 px-52 mt-[-2rem] md:flex">
        <AnimatePresence custom={currentImageIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.5,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.1 },
              }}
              className="flex justify-center items-center h-40 w-40"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.3 },
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 items-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
