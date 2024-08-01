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
import { Separator } from "@/components/ui/separator";
// Next Components
import Link from "next/link";
import { usePathname } from "next/navigation";
// Custom UI Components
import ProfileAccount from "../profile/ProfileAccount";
// Icons
import { GithubIcon } from "@/components/custom/icons/GithubIcon";
import {
  User2,
  AlignLeft,
  LucideLayoutDashboard,
  BotIcon,
  BookHeart,
  House,
  Headset,
  Terminal,
  CircleHelp,
  Bug,
} from "lucide-react";
import SignoutBtn from "../auth/signout/SignoutBtn";
import SettingsAccount from "../settings/SettingsAccount";

const SidebarLinks = [
  {
    label: "Home",
    icon: <House className="size-4" />,
    ref: "/",
  },
  {
    label: "Dashboard",
    icon: <LucideLayoutDashboard className="size-4" />,
    ref: "/dashboard",
  },
  {
    label: "Playground",
    icon: <BotIcon className="size-4" />,
    ref: "/dashboard/playground",
  },
  {
    label: "Documentation",
    icon: <BookHeart className="size-4" />,
    ref: "/docs",
  },
  {
    label: "API",
    icon: <Terminal className="size-4" />,
    ref: "/docs/api",
  },
  {
    label: "Support",
    icon: <Headset className="size-4" />,
    ref: "/support",
  },
  {
    label: "About us",
    icon: <CircleHelp className="size-4" />,
    ref: "/about",
  },
];

export default function Navbar({ title }: { title: string }) {
  const pathname = usePathname();
  return (
    <div className="h-20 w-full flex justify-between px-5 items-center landscape:hidden lg:landscape:flex">
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
            <ul className="flex flex-col py-2 gap-1.5 font-semibold text-sm">
              <p className="font-bold text-base">Menu</p>
              <Separator />
              {SidebarLinks.map((link) => (
                <Link
                  role="link"
                  title={`${link.label} | Psyneural`}
                  aria-label={`${link.label} | Psyneural`}
                  className={`flex items-center justify-start gap-2 p-2 rounded-md ${
                    pathname === link.ref
                      ? "active dark:hover:bg-zinc-200 hover:bg-zinc-800 bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                  href={link.ref}
                  prefetch
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
        {/* <!-- ========== TITLE ========== --> */}
        <h1 className="font-bold text-2xl">{title}</h1>
      </div>
      <div className="flex items-center justify-center gap-2">
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
