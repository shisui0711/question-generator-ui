"use client";

import React from "react";
import Link from "next/link";
import { Book, Bookmark, Copy, FileText, Home, Image, Layers, MessageCircle, User, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthorization } from "@/providers/AuthorizationProvider";

const LeftSidebar = ({ className }: { className?: string }) => {
  const { user } = useAuthorization();

  return (
    <div
      className={cn(
        "sticky top-[5.25rem] left-5 h-[87vh] hidden md:block w-[300px] p-2 flex-none space-y-3 rounded-2xl bg-card shadow-sm",
        className
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-3 rounded-2xl p-3 hover:bg-background"
      >
        <Home />
        <span>Trang chủ</span>
      </Link>
      <Link
        href="/bloom-question"
        className="flex items-center gap-3 rounded-2xl p-3 hover:bg-background"
      >
        <Layers />
        <span>Bloom's Question</span>
      </Link>
      <Link
        href="/similar-question"
        className="flex items-center gap-3 rounded-2xl p-3 hover:bg-background"
      >
        <Copy />
        <span>Similar Question</span>
      </Link>
      <Link
        href="/image-question"
        className="flex items-center gap-3 rounded-2xl p-3 hover:bg-background"
      >
        <Image />
        <span>Image to Question</span>
      </Link>
      <Link
        href="/document-question"
        className="flex items-center gap-3 rounded-2xl p-3 hover:bg-background"
      >
        <FileText />
        <span>Document to Question</span>
      </Link>
      <Link
        href="/subject-question"
        className="flex items-center gap-3 rounded-2xl p-3 hover:bg-background"
      >
        <Book />
        <span>Subject to Question</span>
      </Link>
    </div>
  );
};

export default LeftSidebar;