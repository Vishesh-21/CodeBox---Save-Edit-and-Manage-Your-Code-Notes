import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="sticky z-10 top-0 bg-background py-6">
      <nav className="flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-4xl font-bold">
            <span className="text-primary">S</span>nippet
            <span className="text-primary">B</span>ox
          </h1>
        </Link>
        <Link href={"https://github.com/Vishesh-21"} target="_blank">
          <Github className="hover:stroke-primary duration-400 hover:-translate-y-1 hover:scale-105 transition-all"/>
        </Link>
      </nav>
    </div>
  );
}
