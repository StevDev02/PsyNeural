// Next Components
import Link from "next/link";
// UI Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Icons
import { GoogleIcon } from "@/components/custom/icons/GoogleIcon";
import { GithubIcon } from "@/components/custom/icons/GithubIcon";
// Custom UI Components
import Navbar from "@/components/navbar/Navbar";

export default function Dashboard() {
  return (
    <main className="flex min-h-dvh bg-zinc-50 dark:bg-zinc-950 text-sm">
      <Navbar title="Dashboard" />
      <div className=""></div>
    </main>
  );
}
