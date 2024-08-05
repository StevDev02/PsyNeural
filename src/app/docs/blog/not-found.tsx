import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPost() {
  return (
    <main className="flex flex-col h-dvh w-full justify-center items-center text-center gap-6">
      <h1 className="text-6xl font-extrabold leading-9 tracking-tight">404</h1>
      <div className="max-w-md flex flex-col gap-2">
        <p className="text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p>it seems that this post is empty or in maintenance.</p>
      </div>
      <Button>
        <Link href="/docs/blog">Back to Blog Page</Link>
      </Button>
    </main>
  );
}
