// UI Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MessageBot() {
  return (
    <div className="flex gap-2 items-start justify-start">
      {/* <!-- ========== AVATAR BOT ========== --> */}
      <div className="flex gap-2 items-center justify-center select-none">
        <Avatar className="size-8">
          <AvatarImage
            src="/psyneural.webp"
            alt="PsyNeural"
            title="PsyNeural"
            aria-label="PsyNeural"
            decoding="async"
            loading="lazy"
          />
          <AvatarFallback className="dark:bg-white dark:text-zinc-950 bg-zinc-900 text-white">
            GN
          </AvatarFallback>
        </Avatar>
      </div>
      {/* <!-- ========== MESSAGE BOT ========== --> */}
      <div className="flex flex-col gap-1.5">
        <p className="select-none" id="bot-name">
          Genesis
        </p>
        <div className="flex-1 flex flex-col gap-1 max-w-[70%] md:max-w-[60%] dark:bg-zinc-200 dark:text-zinc-950 text-white bg-zinc-900 p-4 rounded-xl">
          <span id="message-bot">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            amet! Ipsum, eveniet natus error eum totam atque incidunt architecto
            possimus fuga! Tenetur quam labore pariatur error accusantium, eius
            iste perspiciatis!
          </span>
        </div>
      </div>
    </div>
  );
}
