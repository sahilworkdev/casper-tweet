"use client";

import type React from "react";

import { useState } from "react";

type PhotoOption = "upload" | "generate" | "none";

const TweetGenerationSection = () => {
  const [thought, setThought] = useState("");
  const [photoOption, setPhotoOption] = useState<PhotoOption>("none");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [artStyle, setArtStyle] = useState("realistic");
  const [apiResult, setApiResult] = useState<any>(null);
  const [loadingSteps, setLoadingSteps] = useState<string[]>([]);

  const artStyles = [
    {
      value: "realistic",
      label: "Realistic",
      description: "Photorealistic human portraits",
    },
    { value: "cartoon", label: "Cartoon", description: "Fun animated style" },
    { value: "anime", label: "Anime", description: "Japanese animation style" },
    { value: "pixel", label: "Pixel Art", description: "Retro 8-bit style" },
    {
      value: "oil-painting",
      label: "Oil Painting",
      description: "Classic artistic style",
    },
    {
      value: "watercolor",
      label: "Watercolor",
      description: "Soft painted effect",
    },

    {
      value: "cyberpunk",
      label: "Cyberpunk",
      description: "Futuristic neon style",
    },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleGenerateTweet = async () => {
    setIsGenerating(true);
    setLoadingSteps(["Identifying engagement triggers..."]);

    const steps = [
      "Calculating humor coefficients...",
      "Optimizing for max virality...",
      "Finding the perfect rhythm...",
      "Checking for tweetability...",
      "Crafting the perfect tweet...",
    ];

    let stepIndex = 0;
    const intervalId = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setLoadingSteps((prev) => [...prev, steps[stepIndex]]);
      }
    }, 5000);

    const formData = new FormData();
    formData.append("tweet_prompt", thought);
    formData.append("art_style", artStyle);

    if (photoOption === "generate") {
      formData.append("character_description", generatedPrompt);
    } else if (photoOption === "upload" && uploadedFile) {
      formData.append("character_description", "");
      formData.append("character_image", uploadedFile);
    } else {
      formData.append("character_description", "");
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/create-content`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Failed to generate tweet content");

      const result = await response.json();
      setApiResult(result);
    } catch (error) {
      console.error("Error generating tweet:", error);
    } finally {
      clearInterval(intervalId);
      setIsGenerating(false);
    }
  };

  const renderPhotoSection = () => {
    switch (photoOption) {
      case "upload":
        return (
          <div className="space-y-4 w-full" id="tweet">
            <label className="block text-sm font-medium text-gray-700">
              Upload Character Photo
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG or GIF (MAX. 5MB)
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
            {uploadedFile && (
              <div className="flex items-center space-x-2 text-sm text-green-600">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>File uploaded: {uploadedFile.name}</span>
              </div>
            )}
          </div>
        );

      case "generate":
        return (
          <div className="space-y-4">
            <label
              htmlFor="character-prompt"
              className="block text-sm font-medium text-gray-700"
            >
              Describe Your Character
            </label>
            <textarea
              id="character-prompt"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="e.g., A friendly robot with blue eyes, wearing a red hat..."
              value={generatedPrompt}
              onChange={(e) => setGeneratedPrompt(e.target.value)}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {isGenerating && !apiResult && (
        <div className="flex flex-col gap-2 mt-4">
          {loadingSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-center max-w-md mx-auto gap-2 p-3 rounded-md bg-gray-100 text-sm text-gray-700 shadow-sm border border-gray-200 animate-fade-in"
            >
              <svg
                className="w-4 h-4 text-blue-500 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              <span>{step}</span>
            </div>
          ))}
        </div>
      )}

      {!isGenerating && apiResult && (
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl mx-auto">
          <div className="flex items-start gap-4 mb-4">
            {/* Profile Picture */}
            <img
              src={apiResult.cloudinary_url}
              alt="User Profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* Name and Username */}
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Casper AI
              </h3>
              <p className="text-sm text-gray-500">@casper_ai_tweet</p>
            </div>
          </div>

          {/* Tweet Text */}
          <p className="text-gray-900 text-base whitespace-pre-line mb-4">
            {apiResult?.tweet}
          </p>

          {/* Optional Image */}
          {apiResult?.cloudinary_url && (
            <div>
              <img
                src={apiResult.cloudinary_url}
                alt="Generated Character"
                className="w-full rounded-lg border border-gray-200 object-cover"
              />
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-6">
            <button
              onClick={() => {
                setApiResult(null);
                setThought("");
                setGeneratedPrompt("");
                setUploadedFile(null);
                setPhotoOption("none");
              }}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Generate Another
            </button>
          </div>
        </div>
      )}
      {!isGenerating && !apiResult && (
        <div className=" bg-white rounded-2xl shadow-xl p-8  w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Generate Your Viral Tweet
            </h2>
            <p className="text-gray-600">
              Share your thoughts and let our AI craft the perfect tweet for
              maximum engagement
            </p>
          </div>

          <div className="space-y-8">
            {/* Thought Input */}
            <div>
              <label
                htmlFor="thought"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                What&apos;s on your mind?
              </label>
              <textarea
                id="thought"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Share your thoughts, ideas, or opinions..."
                value={thought}
                onChange={(e) => setThought(e.target.value)}
              />
              <div className="mt-1 text-sm text-gray-500">
                {thought.length}/280 characters
              </div>
            </div>
            <div>
              <label
                htmlFor="art-style"
                className="block text-sm font-medium text-gray-700"
              >
                Art Style
              </label>
              <select
                id="art-style"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={artStyle}
                onChange={(e) => setArtStyle(e.target.value)}
              >
                {artStyles.map((style) => (
                  <option key={style.value} value={style.value}>
                    {style.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                {
                  artStyles.find((style) => style.value === artStyle)
                    ?.description
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Character Photo Options
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="relative">
                  <input
                    type="radio"
                    name="photoOption"
                    value="none"
                    checked={photoOption === "none"}
                    onChange={(e) =>
                      setPhotoOption(e.target.value as PhotoOption)
                    }
                    className="sr-only"
                  />
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      photoOption === "none"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900">No Photo</h3>
                      <p className="text-sm text-gray-500">Text only tweet</p>
                    </div>
                  </div>
                </label>

                <label className="relative">
                  <input
                    type="radio"
                    name="photoOption"
                    value="upload"
                    checked={photoOption === "upload"}
                    onChange={(e) =>
                      setPhotoOption(e.target.value as PhotoOption)
                    }
                    className="sr-only"
                  />
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      photoOption === "upload"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900">
                        Upload Photo
                      </h3>
                      <p className="text-sm text-gray-500">
                        Use your own image
                      </p>
                    </div>
                  </div>
                </label>

                <label className="relative">
                  <input
                    type="radio"
                    name="photoOption"
                    value="generate"
                    checked={photoOption === "generate"}
                    onChange={(e) =>
                      setPhotoOption(e.target.value as PhotoOption)
                    }
                    className="sr-only"
                  />
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      photoOption === "generate"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900">
                        Generate Photo
                      </h3>
                      <p className="text-sm text-gray-500">
                        AI-created character
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Conditional Photo Section */}
            {photoOption !== "none" && (
              <div className="bg-gray-50 rounded-lg p-6">
                {renderPhotoSection()}
              </div>
            )}

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={handleGenerateTweet}
                disabled={!thought.trim() || isGenerating}
                className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <div className="flex items-center space-x-2">
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Generating Tweet...</span>
                  </div>
                ) : (
                  "Generate Viral Tweet"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TweetGenerationSection;
