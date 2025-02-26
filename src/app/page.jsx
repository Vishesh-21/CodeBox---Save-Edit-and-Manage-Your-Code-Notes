import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="mt-4 px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Snippets</h2>
        <Link href={'/snippet/new'}><Button className="">Add <CirclePlus /></Button></Link>
      </div>
    </div>
  );
}
