"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Binary, NotebookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { saveSnippet } from "@/actions";

export const EditorForm = ({ snippet }) => {
  const [code, setCode] = useState(snippet?.code);

  const saveSnippetAction = saveSnippet.bind(null,snippet.id,code);

  return (
    <div className="px-10 mb-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold mb-3">
          <Binary className="inline" size={20} /> Editor
        </h1>
        <form action={saveSnippetAction}>
          <Button type='submit'>
            <NotebookText />
            Save
          </Button>
        </form>
      </div>
      <Editor
        height="600px"
        width="100%"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={(newValue) => setCode(newValue)}
      />
    </div>
  );
};
