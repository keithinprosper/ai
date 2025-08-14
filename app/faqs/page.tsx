import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Camera, MessageCircle, Mail, Clock, Shield, Sparkles, Users } from "lucide-react";
import Link from "next/link";

const Faqs = () => {
  return (
    <>
      {/* FAQ Section */}
      <div
        id="faqs"
        className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Got questions about AI headshots? We've got answers. Find everything you need to know about Pixaify below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Still have questions?</h3>
                <p className="text-gray-600 mb-8">
                  Our team is here to help you get the perfect AI headshots. Reach out anytime!
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Email Support</p>
                      <a href="mailto:support@pixaify.com" className="text-blue-600 hover:text-blue-700">
                        support@pixaify.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Response Time</p>
                      <p className="text-gray-600">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                <Link href="/contact-us">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-xl border border-gray-200 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 text-left py-6">
                    How does Pixaify's AI headshot generation work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    Our advanced AI analyzes 4-10 photos you upload to learn your unique facial features and structure. 
                    It then generates multiple professional headshots in various styles, backgrounds, and poses while 
                    maintaining your natural appearance and professional quality standards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-xl border border-gray-200 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 text-left py-6">
                    How much do AI headshots cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    Our pricing starts at just $24.99 for a complete package of professional AI headshots. 
                    We offer different credit packages based on your needs, with no subscription required - 
                    just one-time payments for lifetime access to your generated headshots.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-xl border border-gray-200 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 text-left py-6">
                    How secure and private are my photos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    Your privacy and data security are our top priorities. All photos are encrypted and stored securely. 
                    We never share your images with third parties, and you maintain full ownership of your photos and 
                    generated headshots. Your data is processed in compliance with industry security standards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-xl border border-gray-200 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 text-left py-6">
                    How long does it take to generate my headshots?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    Most headshot generations are completed within 15-30 minutes. You'll receive an email notification 
                    when your professional headshots are ready for download. Processing time may vary slightly during 
                    peak usage periods, but we strive to deliver your results as quickly as possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-xl border border-gray-200 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 text-left py-6">
                    What if I'm not satisfied with my headshots?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    We offer a 7-day money-back guarantee. If you're not completely satisfied with your AI headshots, 
                    contact our support team within 7 days of purchase for a full refund. We're committed to ensuring 
                    you get professional headshots that exceed your expectations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white rounded-xl border border-gray-200 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 text-left py-6">
                    Can I get more credits anytime?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    Absolutely! You can purchase additional credits at any time through your dashboard. 
                    There are no restrictions or waiting periods. Whether you need headshots for different occasions 
                    or want to try new styles, you can easily add more credits to your account.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-white rounded-xl border border-gray-200 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 text-left py-6">
                    What photo guidelines should I follow for best results?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    For optimal results: upload 4-10 high-quality photos, ensure good lighting, include variety in 
                    angles and expressions, keep backgrounds simple, make sure only one person is in each photo, 
                    avoid sunglasses or hats, and use square aspect ratios when possible (like 1024x1024 pixels).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-white rounded-xl border border-gray-200 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 text-left py-6">
                    Can I use my AI headshots commercially?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    Yes! Once generated, you have full commercial rights to use your AI headshots for LinkedIn profiles, 
                    company websites, marketing materials, business cards, and any other professional or commercial purposes. 
                    You own the rights to your generated headshots for lifetime use.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Section: Content */}
              <div className="text-white">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-8 w-8 mr-3" />
                  <span className="text-lg font-semibold">Ready to get started?</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Get your AI headshots today
                </h3>
                
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Stand out in every frame with personalized AI headshots that capture your professional best.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Camera className="w-5 h-5 mr-3 text-blue-200" />
                    <span className="text-blue-100">Premium quality starting at just $10</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-blue-200" />
                    <span className="text-blue-100">Trusted by 5000+ professionals</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-blue-200" />
                    <span className="text-blue-100">7-day money-back guarantee</span>
                  </div>
                </div>
                
                <Link href="/login">
                  <button className="inline-flex items-center justify-center bg-white text-blue-600 font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Get Your Headshots
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>

              {/* Right Section: Images */}
              <div className="flex justify-center items-center">
                <div className="relative w-80 h-80">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                    <img
                      src="/headshots/human5.jpg"
                      alt="Professional AI Headshot Example"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-36 h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                    <img
                      src="/headshots/human7.jpg"
                      alt="Professional AI Headshot Example"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-36 h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                    <img
                      src="/headshots/human8.jpeg"
                      alt="Professional AI Headshot Example"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
