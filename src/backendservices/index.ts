import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const generateTextTweet = async (
  content: string,
  toneExamples: string[]
) => {
  try {
    const res = await axios.post(`${BASE_URL}/tweet-only`, {
      content,
      tone_examples: toneExamples,
    });

    return res.data;
  } catch (error: any) {
    console.error("Error generating text tweet:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const generateUploadTweet = async (
  content: string,
  toneExamples: string[],
  photo: File
) => {
  try {
    const formData = new FormData();
    formData.append("content", content);
    toneExamples.forEach((example, index) =>
      formData.append(`tone_examples[${index}]`, example)
    );
    formData.append("photo", photo);

    const res = await axios.post(`${BASE_URL}/tweet-with-upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error: any) {
    console.error("Error generating tweet with photo:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const generateAiCharacterTweet = async (
  content: string,
  artStyle: string,
  characterDescription: string,
  toneExamples: string[]
) => {
  try {
    const res = await axios.post(`${BASE_URL}/tweet-with-ai-character`, {
      content,
      art_style: artStyle,
      character_description: characterDescription,
      tone_examples: toneExamples,
    });

    return res.data;
  } catch (error: any) {
    console.error("Error generating AI character tweet:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};
