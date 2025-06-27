
import React from "react";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden flex justify-center items-center min-h-screen bg-gradient-to-br from-[#E0F7FA] via-[#FCE4EC] to-[#F3E5F5] pb-10">
      <section className="pt-16 mt-12 sm:mt-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-700 font-inter">
              Your Brain, Our Algorithm - Welcome to CasperAI!
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              You think it, We
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> trend </span>
              </span>
              it
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Viral Tweets */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">
                Viral Tweets
              </h3>
              <p className="mt-2 text-gray-600">
                Generate high-engagement tweets designed to go viral using our
                AI-driven insights.
              </p>
            </div>

            {/* Card 2: Meme Generator */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">
                Meme Generator
              </h3>
              <p className="mt-2 text-gray-600">
                Create memes that resonate with current trends, powered by
                generative humor AI.
              </p>
            </div>

            {/* Card 3: Character Generation */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">
                Character Generation
              </h3>
              <p className="mt-2 text-gray-600">
                Bring fictional personas to life with AI-crafted backstories,
                traits, and visuals.
              </p>
            </div>
          </div>
        </div>
        {/* <div id="tweet" className="px-6">
            <TweetGenerationSection />
        </div> */}
      </section>
    </div>
  );
};

export default HeroSection;
