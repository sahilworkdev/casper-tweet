"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";

type Props = {
  form: { prompt: string; exampleTweets: string[] };
  onChange: (newForm: { prompt: string; exampleTweets: string[] }) => void;
  onSubmit: () => void;
  loading: boolean;
  error: string | null;
  result: any | null;
};

export function TextTweetForm({
  form,
  onChange,
  onSubmit,
  loading,
  error,
  result,
}: Props) {
  const addExample = () => {
    onChange({ ...form, exampleTweets: [...form.exampleTweets, ""] });
  };

  const updateExample = (index: number, value: string) => {
    const updated = [...form.exampleTweets];
    updated[index] = value;
    onChange({ ...form, exampleTweets: updated });
  };

  const removeExample = (index: number) => {
    const updated = form.exampleTweets.filter((_, i) => i !== index);
    onChange({ ...form, exampleTweets: updated });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="text-prompt">Prompt</Label>
        <Textarea
          id="text-prompt"
          placeholder="Enter your tweet prompt here..."
          value={form.prompt}
          onChange={(e) => onChange({ ...form, prompt: e.target.value })}
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Example Tweets</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addExample}
            className="flex items-center gap-1"
          >
            <Plus className="h-3 w-3" />
            Add Example
          </Button>
        </div>

        {form.exampleTweets.map((tweet, index) => (
          <div key={index} className="flex gap-2">
            <Textarea
              placeholder={`Example tweet ${index + 1}...`}
              value={tweet}
              onChange={(e) => updateExample(index, e.target.value)}
              className="flex-1"
              rows={3}
            />
            {form.exampleTweets.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeExample(index)}
                className="shrink-0"
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
        ))}
      </div>

      <Button
        onClick={onSubmit}
        disabled={loading}
        className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed w-full"
      >
        {loading ? "Generating..." : "Generate Text Tweet"}
      </Button>

      {error && (
        <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {result && (
        <div className="p-4 bg-gray-100 border border-gray-300 rounded-md space-y-2 mt-4">
          {result.tweet_text && (
            <div>
              <p className="font-semibold">Generated Tweet:</p>
              <p>{result.tweet_text}</p>
            </div>
          )}
          {result.hashtags?.length > 0 && (
            <div>
              <p className="font-semibold">Hashtags:</p>
              <p>{result.hashtags.join(" ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
