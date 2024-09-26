import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Title */}
      <div className="max-w-2xl flex justify-center mx-auto mb-8 lg:mb-14">
        <h1
          className="text-6xl bg-gradient-to-r from-blue-800 to-green-400 bg-clip-text text-transparent 
        font-bold md:text-6xl md:leading-tight dark:text-white text-center"
        >
          Questions? Look here.
        </h1>
      </div>

      {/* End Title */}

      <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              Can I get more credits at anytime?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can get more credits whenever you want. No questions are
              asked while you do that and we would highly appreciate if you will
              give us some feedback.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              How does Pixaify's pricing work?
            </AccordionTrigger>
            <AccordionContent>
              Our one time payment plans are tiered according to the credits you
              buy. Understanding the task at hand and ironing out the wrinkles
              is key.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">
              How secure is Pixaify?
            </AccordionTrigger>
            <AccordionContent>
              Protecting the data you trust to Pixaify is our first priority.
              This part is really crucial in keeping the project in line to
              completion.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl">
              I have purchased the application. How do I get started?
            </AccordionTrigger>
            <AccordionContent>
              We have a thoroughly written documentation that will help you get
              started with the application. We have also included many other
              tips and tricks within the documentation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl">
              How do I increase the credits for any account?
            </AccordionTrigger>
            <AccordionContent>
              To increase the credits for any account, you can either purchase
              the credits by using one of the payment gateways attached or you
              can visit your database and manually increase the credits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl">
              Do I get access to everything in the demo version as shown?
            </AccordionTrigger>
            <AccordionContent>
              Yes, from our showcase gallery to documentation, you get access to
              everything in the demo version.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
