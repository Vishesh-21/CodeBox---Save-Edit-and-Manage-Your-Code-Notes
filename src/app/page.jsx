import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Home() {

  const snippets = await prisma.snippet.findMany();

 snippets.sort((a, b) => new Date(b.date) - new Date(a.date));

  if(!snippets) return <h1 className="text-center text-3xl font-semibold opacity-65">No Snippets created yet...</h1>

  return (
    <div className="mt-4 px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Snippets</h2>
        <Link href={'/snippet/new'}><Button className="">Add <CirclePlus /></Button></Link>
      </div>
        <div className="mt-4">
          <Table>
            <TableCaption>A list of all snippets created so far.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>S.No.</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className='text-center'>Date</TableHead>
                <TableHead className='text-end'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                snippets.map((snippet,index) => {
                  return <TableRow key={snippet.id}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{snippet.title}</TableCell>
                    <TableCell className='text-center'>{new Date(snippet.date).toLocaleString()}</TableCell>
                    <TableCell className='text-end'><Link href={`/snippet/${snippet.id}`} ><Button variant="ghost">view</Button></Link></TableCell>
                  </TableRow>
                })
              }
            </TableBody>
          </Table>
        </div>
      </div>
  );
}
