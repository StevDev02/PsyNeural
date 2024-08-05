"use client";
// ThemeToggle
import { ThemeToggle } from "@/components/themetoggle";
// UI Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Custom UI Components
import ProfileAccount from "../profile/ProfileAccount";
// Icons
import { GithubIcon } from "@/components/custom/icons/GithubIcon";
import { User2, AlignLeft, Bug } from "lucide-react";
import SignoutBtn from "../auth/signout/SignoutBtn";
import SettingsAccount from "../settings/SettingsAccount";
import GeneralRouting from "../routing/GeneralRouting";

export default function Navbar({ title }: { title: string }) {
  return (
    <div className="h-20 w-full flex justify-between px-5 items-center">
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
        <h1 className="font-bold text-2xl sm:text-3xl">{title}</h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        {/* <!-- ========== THEME TOGGLE ========== --> */}
        <ThemeToggle />
        {/* <!-- ========== ACCOUNT SETTINGS ========== --> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="focus:outline-none rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
              variant="none"
              size="icon"
            >
              <Avatar className="size-8">
                <AvatarImage
                  src="https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg"
                  alt="My Account"
                  title="My Account"
                  aria-label="My Account"
                  decoding="async"
                  loading="lazy"
                />
                <AvatarFallback className="dark:bg-white dark:text-zinc-950 bg-zinc-900 text-white">
                  <User2 className="size-5" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          {/* <!-- ========== DROPDOWN MENU ========== --> */}
          <DropdownMenuContent className="w-56 mr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ul className="flex flex-col text-sm">
              {/* <!-- ========== PROFILE ========== --> */}
              <ProfileAccount />
              {/* <!-- ========== SETTINGS ========== --> */}
              <SettingsAccount />
              <DropdownMenuSeparator />
              {/* <!-- ========== GITHUB ========== --> */}
              <a
                role="link"
                href="https://github.com/StevDev02/concurso-vercel"
                title="Github | PsyNeural"
                aria-label="Github | PsyNeural"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between cursor-pointer rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2"
              >
                <div className="flex items-center justify-center gap-2">
                  <GithubIcon className="size-3.5" />
                  <span>GitHub</span>
                </div>
              </a>
              {/* <!-- ========== ISSUES ========== --> */}
              <a
                role="link"
                href="https://github.com/StevDev02/concurso-vercel/issues"
                title="Github Issues | PsyNeural"
                aria-label="Github Issues | PsyNeural"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between cursor-pointer rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2"
              >
                <div className="flex items-center justify-center gap-2">
                  <Bug className="size-3.5" />
                  <span>Report an issue</span>
                </div>
              </a>
              <DropdownMenuSeparator />
              <SignoutBtn />
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
