"use client"

import Link from "next/link";
import React from "react";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, Monitor } from "lucide-react";

const Navbar = () => {

  const { theme ,setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="w-full flex items-center justify-between flex-wrap gap-5 px-5 py-3">
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Quest Gen
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="hidden sm:flex">
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")} className="flex gap-2 items-center">
                <Sun/>
                Sáng
                {theme === "light" && <Check  className="ml-auto"/>}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="flex gap-2 items-center">
                <Moon/>
                Tối
                {theme === "dark" && <Check className="ml-auto" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")} className="flex gap-2 items-center">
                <Monitor />
                Mặc định
                {theme === "system" && <Check className="ml-auto" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;