// UI Components
import { Separator } from "../ui/separator";
// Next UI Components
import Link from "next/link";
import { usePathname } from "next/navigation";
// Icons
import {
  LucideLayoutDashboard,
  BotIcon,
  BookHeart,
  House,
  Headset,
  Terminal,
  CircleHelp,
} from "lucide-react";

// Posts

// Links
const SidebarLinks = [
  {
    label: "Home",
    icon: <House className="size-4" />,
    ref: "/",
  },
  {
    label: "Playground",
    icon: <BotIcon className="size-4" />,
    ref: "/dashboard/playground",
  },
  {
    label: "Blog",
    icon: <BookHeart className="size-4" />,
    ref: "/docs/blog",
  },
  {
    label: "API",
    icon: <Terminal className="size-4" />,
    ref: "/docs/blog/posts/guide-of-how-to-use-the-API",
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

export default function GeneralRouting() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col py-2 gap-1.5 font-semibold text-sm sm:text-base">
      <p className="font-bold">Menu</p>
      <Separator />
      {SidebarLinks.map((link) => (
        <Link
          role="link"
          key={link.label}
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
  );
}
