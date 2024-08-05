import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="flex w-full h-auto items-center justify-center p-8"></main>
  );
}
