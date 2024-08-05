import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return notFound();
}
