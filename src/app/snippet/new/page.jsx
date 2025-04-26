"use client";

import { createSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Plus } from "lucide-react";
import React, { useState } from "react";

export default function NewSnippet() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target);
    await createSnippet(formData);

    setLoading(false);
  }

  return (
    <div className="px-24 mt-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Label htmlFor="title">Title</Label>
        <div className="flex gap-5">
          <Input
            required
            placeholder="Title of your snippet..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
          />
          <Button type="button">
            <Brain /> AI
          </Button>
        </div>

        <Label htmlFor="code">Code</Label>
        <Textarea
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-52"
          required
          placeholder="Code to be stored..."
          name="code"
        />

        <Button type="submit" className="self-end" disabled={loading}>
          {loading ? (
            "Saving..."
          ) : (
            <>
              <Plus /> New Snippet
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
