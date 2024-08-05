// UI Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Icons
import { Brain, Cpu, Bot, Sparkles } from "lucide-react";

// Custom UI Components
import Navbar from "@/components/navbar/Navbar";
import TimeInChat from "@/components/charts/TimeInChat";

import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return notFound();
}

{
  /* 
<main className="flex flex-col min-h-dvh bg-zinc-50 dark:bg-zinc-950 text-sm">
      <Navbar title="Dashboard" />
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"></div>
      </div>
    </main>
*/
}
