import { ArrowRight } from "lucide-react";

export default function Hero2() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Generate
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Viral Tweets
                </span>
                <br />
               with Casper/X
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Transform your social media presence with AI-generated tweets
                that engage, inspire, and drive results. Create content that
                resonates with your audience in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Creating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-600 hover:border-blue-400 px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">10K+</div>
                <div className="text-gray-400">Tweets Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">95%</div>
                <div className="text-gray-400">Engagement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">2K+</div>
                <div className="text-gray-400">Happy Users</div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">
                    Tweet Analytics Dashboard
                  </h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-500/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">
                        1.2K
                      </div>
                      <div className="text-sm text-gray-400">Impressions</div>
                    </div>
                    <div className="bg-green-500/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">
                        89
                      </div>
                      <div className="text-sm text-gray-400">Engagements</div>
                    </div>
                    <div className="bg-purple-500/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">
                        23
                      </div>
                      <div className="text-sm text-gray-400">Retweets</div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      <div>
                        <div className="font-semibold">@casperx_ai</div>
                        <div className="text-sm text-gray-400">2 hours ago</div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">
                      "Just launched my new AI-powered project! 🚀 The future of
                      content creation is here. #AI #Innovation #TechTrends"
                    </p>
                    <div className="flex space-x-6 text-gray-400">
                      <span>❤️ 45</span>
                      <span>🔄 23</span>
                      <span>💬 12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
