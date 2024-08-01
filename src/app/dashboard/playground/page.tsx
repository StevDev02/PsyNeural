// Next UI Components
import Loading from "@/app/loading";
// React
import { Suspense } from "react";
// Custom UI Components
import Navbar from "@/components/navbar/Navbar";
import { Chat } from "@/components/chat/Chat";
import { MessageBot } from "@/components/messages/MessageBot";
import { MessageUser } from "@/components/messages/MessageUser";
import { WelcomeChat } from "@/components/welcome/WelcomeChat";

export default function Playground() {
  return (
    <main className="flex h-dvh max-h-dvh justify-center items-center text-sm px-0 bg-zinc-100 dark:bg-zinc-950 font-semibold text-zinc-950 dark:text-zinc-300">
      {/* <!-- ========== PLAYGROUND ========== --> */}
      <section className="relative w-full bg-zinc-10 bg-zinc-100 dark:bg-zinc-950">
        <Suspense fallback={<Loading />}>
          {/* <!-- ========== CHAT ========== --> */}
          <form className="flex flex-col py-1 justify-between items-center w-full min-h-dvh max-h-dvh">
            {/* <!-- ========== NAVBAR PLAYGROUND ========== --> */}
            <Navbar title="Playground" />
            {/* <!-- ========== MESSAGES ========== --> */}
            <div className="w-full flex landscape:pt-3 h-auto [mask-image:_linear-gradient(to_top,transparent_0,_white_2%)] dark:[mask-image:_linear-gradient(to_top,transparent_0,_black_2%)] flex-col py-2 px-6 gap-4 landscape:gap-2 lg:landscape:gap-4 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
              {/* <!-- ========== CONVERSATION ========== --> */}
              <WelcomeChat />
            </div>
            {/* <!-- ========== CHAT CONTROLS ========== --> */}
            <Chat />
          </form>
        </Suspense>
      </section>
    </main>
  );
}
