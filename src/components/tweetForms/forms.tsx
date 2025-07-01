"use client";

import type React from "react";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Upload, Sparkles } from "lucide-react";
import { TextTweetForm } from "./TextTweetForm";
import { UploadTweetForm } from "./UploadTweetForm";
import { AiCharacterTweetForm } from "./AiCharacterTweetForm";
import {
  generateAiCharacterTweet,
  generateTextTweet,
  generateUploadTweet,
} from "@/backendservices";

export function TweetFormsSection() {
  // TEXT
  const [textResult, setTextResult] = useState<any | null>(null);
  const [textLoading, setTextLoading] = useState(false);
  const [textError, setTextError] = useState<string | null>(null);

  // UPLOAD
  const [uploadResult, setUploadResult] = useState<any | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // AI
  const [aiResult, setAiResult] = useState<any | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const [textTweetForm, setTextTweetForm] = useState({
    prompt: "",
    exampleTweets: [""],
  });

  const [uploadTweetForm, setUploadTweetForm] = useState({
    prompt: "",
    exampleTweets: [""],
    photo: null as File | null,
  });

  const [aiCharacterForm, setAiCharacterForm] = useState({
    prompt: "",
    artStyle: "",
    characterPrompt: "",
    exampleTweets: [""],
  });

  const handleSubmit = async (formType: "text" | "upload" | "ai") => {
    try {
      if (formType === "text") {
        setTextLoading(true);
        setTextError(null);
        setTextResult(null);

        const result = await generateTextTweet(
          textTweetForm.prompt,
          textTweetForm.exampleTweets
        );

        setTextResult(result);
      } else if (formType === "upload") {
        if (!uploadTweetForm.photo) {
          setUploadError("Please upload a photo.");
          return;
        }

        setUploadLoading(true);
        setUploadError(null);
        setUploadResult(null);

        const result = await generateUploadTweet(
          uploadTweetForm.prompt,
          uploadTweetForm.exampleTweets,
          uploadTweetForm.photo
        );

        setUploadResult(result);
      } else if (formType === "ai") {
        setAiLoading(true);
        setAiError(null);
        setAiResult(null);

        const result = await generateAiCharacterTweet(
          aiCharacterForm.prompt,
          aiCharacterForm.artStyle,
          aiCharacterForm.characterPrompt,
          aiCharacterForm.exampleTweets
        );

        setAiResult(result);
      }
    } catch (err: any) {
      const message =
        err?.message || err?.error || "Something went wrong. Please try again.";

      if (formType === "text") setTextError(message);
      else if (formType === "upload") setUploadError(message);
      else if (formType === "ai") setAiError(message);
    } finally {
      if (formType === "text") setTextLoading(false);
      if (formType === "upload") setUploadLoading(false);
      if (formType === "ai") setAiLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Tweet Creation Forms
        </CardTitle>
        <CardDescription>
          Choose the type of tweet you want to create and fill out the
          corresponding form
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Text Only
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              With Upload
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              AI Character
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="space-y-6">
            <TextTweetForm
              form={textTweetForm}
              onChange={setTextTweetForm}
              onSubmit={() => handleSubmit("text")}
              loading={textLoading}
              error={textError}
              result={textResult}
            />
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <UploadTweetForm
              form={uploadTweetForm}
              onChange={setUploadTweetForm}
              onSubmit={() => handleSubmit("upload")}
              loading={uploadLoading}
              error={uploadError}
              result={uploadResult}
            />
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            <AiCharacterTweetForm
              form={aiCharacterForm}
              onChange={setAiCharacterForm}
              onSubmit={() => handleSubmit("ai")}
              loading={aiLoading}
              error={aiError}
              result={aiResult}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
