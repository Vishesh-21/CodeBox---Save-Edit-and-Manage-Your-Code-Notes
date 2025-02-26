import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function NewSnippet() {
  return (
    <div className='px-24 mt-4'>
        <form className='flex flex-col gap-4' >
            <Label htmlFor="title" >Title</Label>
            <Input placeholder="Title of your snippet..." id='title'/>
            <Label htmlFor="code">Code</Label>
            <Textarea id='code' className="h-52" placeholder="Code to be store..."/>
            <Button>Save</Button>
        </form>
    </div>
  )
}
