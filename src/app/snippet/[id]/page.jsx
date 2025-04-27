import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Dot, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function page({ params }) {
  const id = parseInt(params.id);

  const snippet = await prisma.snippet.findUnique({ where: { id } });

  if (!snippet)
    return (
      <h1 className="text-3xl fond-bold opacity-65 text-center">
        No, Snippet found... try later
      </h1>
    );

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div className="px-12">
      <h1 className="text-lg border-b-[1.5px]">
        <Dot className="inline leading-2 text-primary" size={40} />
        {(snippet?.title).charAt(0).toUpperCase() + (snippet?.title).slice(1)}
      </h1>
      <div className="relative mx-3 mt-3 rounded p-6 bg-slate-700">
        <pre>
          <code>{snippet?.code}</code>
        </pre>
        <div className="absolute top-4 right-4">
          <Link href={`/snippet/${id}/edit`}>
            <Button variant="ghost" className="text-[0.75rem]">
              <Pencil size={12} />
            </Button>
          </Link>
          <form action={deleteSnippetAction} className="inline">
            <Button className="text-[0.75rem] ml-1" variant="destructive">
              <Trash2 size={12} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();
  return snippets.map((snippet) => ({ id: snippet.id.toString() }));
};
