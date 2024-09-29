import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <div className="flex-grow pb-6">
      <Head>
        <title>About Us | Pixaify</title>
        <meta
          name="description"
          content="About Us for Pixaify, the AI headshot generator platform."
        />
      </Head>
      <main className="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto text-justify">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-orange-600 tracking-wide lg:mb-14">
          About Us
        </h1>

        <section className="mb-6">
          <p className="mb-4">
            At Pixaify, we believe that everyone deserves a professional
            headshot that captures their unique essence. Our AI-powered headshot
            generator makes it easy to create stunning, high-quality images
            without the hassle of traditional photo shoots. With just a few
            clicks, you can explore countless styles, backgrounds, and
            expressions to find the perfect headshot for your personal or
            professional needs. Say goodbye to awkward poses and expensive
            photographers - Pixaify puts the power of professional headshots
            right at your fingertips.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
