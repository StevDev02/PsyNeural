import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col h-dvh w-full justify-center items-center text-center gap-6">
      <h1 className="text-6xl font-extrabold leading-9 tracking-tight">404</h1>
      <div className="max-w-md flex flex-col gap-2">
        <p className="text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p>
          But dont worry, you can find plenty of other things on our homepage.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button>
          <Link href="/">Back to homepage</Link>
        </Button>
        <Button variant="outline">
          <Link href="/dashboard/playground">Back to playground</Link>
        </Button>
      </div>
    </main>
  );
}
