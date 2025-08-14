import Head from "next/head";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera, Users, Zap, Award, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Head>
        <title>About Us | Pixaify - AI Professional Headshots</title>
        <meta
          name="description"
          content="Learn about Pixaify's mission to make professional AI headshots accessible to everyone. Discover our story, values, and commitment to quality."
        />
        <meta name="keywords" content="AI headshots, professional photography, about pixaify, company story" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Pixaify</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing professional photography with AI technology, making stunning headshots accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Pixaify, we believe that everyone deserves a professional headshot that captures their unique essence. Our AI-powered platform democratizes professional photography, making it accessible, affordable, and incredibly convenient.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're not just creating headshots – we're empowering professionals, entrepreneurs, and individuals to present their best selves to the world with confidence.
              </p>
              <Link href="/login">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-medium">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/headshots/human1.jpeg" 
                  alt="Professional AI Headshot Example" 
                  className="rounded-xl shadow-lg"
                />
                <img 
                  src="/headshots/human2.jpeg" 
                  alt="Professional AI Headshot Example" 
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pixaify?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with a deep understanding of professional photography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Get professional headshots in minutes, not days. Our AI processes your photos instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                  <Award className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Studio Quality</h3>
              <p className="text-gray-600">
                Professional-grade results that rival traditional photography studios at a fraction of the cost.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                  <Camera className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Styles</h3>
              <p className="text-gray-600">
                Choose from various professional styles to match your industry and personal brand.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted by 5000+</h3>
              <p className="text-gray-600">
                Join thousands of professionals who trust Pixaify for their headshot needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating your perfect professional headshot is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Photos</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload 4-10 high-quality photos of yourself. Our AI learns your unique features and facial structure.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI creates multiple professional headshots in various styles and backgrounds.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Download & Use</h3>
              <p className="text-gray-600 leading-relaxed">
                Download your favorite headshots in high resolution and use them across all your professional platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that drive everything we do at Pixaify.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quality First</h3>
              <p className="text-blue-100">
                We never compromise on quality. Every headshot meets professional photography standards.
              </p>
            </div>

            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Accessibility</h3>
              <p className="text-blue-100">
                Professional headshots shouldn't be a luxury. We make them accessible to everyone.
              </p>
            </div>

            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-blue-100">
                We continuously improve our AI technology to deliver better results for our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Professional Image?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already upgraded their headshots with Pixaify's AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-medium">
                Get Started Now
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="px-8 py-3 text-lg font-medium">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
