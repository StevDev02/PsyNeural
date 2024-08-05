import { Metadata } from "next";

// Custom UI Components
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Support",
};

export default function Support() {
  return (
    <main className="flex w-full h-auto items-center justify-center">
      <Navbar title="Support" />
    </main>
  );
}
