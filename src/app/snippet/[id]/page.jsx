import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Copy, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function page({ params }) {
  const id = parseInt(params.id);

  const snippet = await prisma.snippet.findUnique({ where: { id } });

  return (
    <div className="px-12">
      <h1 className="text-lg font-semibold   border-b-[1.5px] py-2">
        {(snippet?.title).charAt(0).toUpperCase()+(snippet?.title).slice(1)}
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
          <Link href={"#"}>
            <Button className="text-[0.75rem] ml-1" variant="destructive">
              <Trash2 size={12} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
