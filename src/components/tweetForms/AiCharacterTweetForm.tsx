"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Plus, X } from "lucide-react";

type Props = {
  form: {
    prompt: string;
    artStyle: string;
    characterPrompt: string;
    exampleTweets: string[];
  };
  onChange: (newForm: {
    prompt: string;
    artStyle: string;
    characterPrompt: string;
    exampleTweets: string[];
  }) => void;
  onSubmit: () => void;
  loading: boolean;
  error: string | null;
  result: any | null;
};

const artStyles = [
  "Photorealistic",
  "Cartoon",
  "Anime",
  "Digital Art",
  "Oil Painting",
  "Watercolor",
  "Sketch",
  "Pop Art",
  "Minimalist",
  "Abstract",
];

export function AiCharacterTweetForm({
  form,
  onChange,
  onSubmit,
  loading,
  error,
  result,
}: Props) {
  const addExample = () =>
    onChange({ ...form, exampleTweets: [...form.exampleTweets, ""] });

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
        <Label htmlFor="ai-prompt">Prompt</Label>
        <Textarea
          id="ai-prompt"
          placeholder="Enter your tweet prompt here..."
          value={form.prompt}
          onChange={(e) => onChange({ ...form, prompt: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Art Style</Label>
        <Select
          value={form.artStyle}
          onValueChange={(value) => onChange({ ...form, artStyle: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select an art style" />
          </SelectTrigger>
          <SelectContent>
            {artStyles.map((style) => (
              <SelectItem
                key={style}
                value={style.toLowerCase().replace(" ", "-")}
              >
                {style}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="character-prompt">Character Prompt</Label>
        <Textarea
          id="character-prompt"
          placeholder="Describe the character..."
          value={form.characterPrompt}
          onChange={(e) =>
            onChange({ ...form, characterPrompt: e.target.value })
          }
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
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
        ))}
      </div>

      <Button
        onClick={onSubmit}
        className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed w-full"
      >
        Generate AI Character Tweet
      </Button>
    </div>
  );
}
