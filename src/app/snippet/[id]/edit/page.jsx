import { Editor, EditorForm } from '@/components/Editor'
import { prisma } from '@/lib/prisma';
import React from 'react'

export default async function Page ({params}) {

    const id = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({where :{id}});

    if(!snippet) return <h1 className='text-3xl fond-bold opacity-65 text-center'>No, Snippet found... try later</h1>
    
  return (
    <div>
       <EditorForm  snippet={snippet}/>
    </div>
  )
}
