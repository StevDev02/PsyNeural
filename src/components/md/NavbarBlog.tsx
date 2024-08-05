"use client";
// ThemeToggle
import { ThemeToggle } from "@/components/themetoggle";
// UI Components

// Next Components
import Link from "next/link";

import { AlignLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import GeneralRouting from "../routing/GeneralRouting";

export default function NavbarBlog({ title }: { title: string }) {
  return (
    <div className="h-20 w-full flex justify-between items-center">
      {/* <!-- ========== SIDEBAR ========== --> */}
      <div className="flex items-center justify-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-full" variant="ghost" size="icon">
              <AlignLeft className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-2 w-72" side="left">
            {/* <!-- ========== LOGO ========== --> */}
            <div className="flex items-center justify-start gap-2 select-none">
              <Avatar className="size-10">
                <AvatarImage
                  src="/psyneural.webp"
                  alt="PsyNeural"
                  title="PsyNeural"
                  aria-label="PsyNeural"
                  decoding="async"
                  loading="lazy"
                />
                <AvatarFallback className="dark:bg-white dark:text-zinc-950 bg-zinc-900 text-white">
                  PN
                </AvatarFallback>
              </Avatar>
              <p className="text-xl font-extrabold tracking-wide">PsyNeural</p>
            </div>
            {/* <!-- ========== LINKS ========== --> */}
            <GeneralRouting />
          </SheetContent>
        </Sheet>
        {/* <!-- ========== TITLE ========== --> */}
        <Link
          href="/docs/blog"
          aria-label={title}
          title={title}
          role="link"
          className="font-bold text-3xl sm:text-4xl"
        >
          {title}
        </Link>
      </div>
      <ul></ul>
      <div className="flex items-center justify-center gap-2">
        <ThemeToggle />
      </div>
    </div>
  );
}
