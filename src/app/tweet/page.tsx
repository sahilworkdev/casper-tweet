import { TweetFormsSection } from "@/components/tweetForms/forms";
import TweetGenerationSection from "@/components/tweetGenerationSection";
import React from "react";

const Tweet = () => {
  return (
    <div className="overflow-x-hidden flex justify-center items-center min-h-screen bg-gradient-to-br from-[#E0F7FA] via-[#FCE4EC] to-[#F3E5F5] pb-10 w-full">
      <section className="pt-12 sm:pt-16 max-w-7xl mx-auto px-4 w-full mt-16">
        {/* <TweetGenerationSection /> */}
        <TweetFormsSection />
      </section>
    </div>
  );
};

export default Tweet;
