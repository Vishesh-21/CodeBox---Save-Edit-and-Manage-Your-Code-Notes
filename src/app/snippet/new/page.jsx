import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

export default function NewSnippet() {
  async function createSnippet(formData) {
    "use server";
    const title = formData.get("title");
    const code = formData.get("code");

    const snippet = await prisma.snippet.create({
      data: { title, code, date: new Date() },
    });
    redirect("/");
  }

  return (
    <div className="px-24 mt-4">
      <form className="flex flex-col gap-4" action={createSnippet}>
        <Label htmlFor="title">Title</Label>
        <Input placeholder="Title of your snippet..." id="title" name="title" />
        <Label htmlFor="code">Code</Label>
        <Textarea
          id="code"
          className="h-52"
          placeholder="Code to be store..."
          name="code"
        />
        <Button type="submit" className="self-end">
          <Plus />
          new snippet
        </Button>
      </form>
    </div>
  );
}
