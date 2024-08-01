// UI Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Icons
import { User2 } from "lucide-react";

export function MessageUser() {
  return (
    <div className="flex flex-row-reverse gap-2 items-start justify-start">
      {/* <!-- ========== AVATAR BOT ========== --> */}
      <div className="flex gap-2 items-center justify-center select-none">
        <Avatar className="size-8">
          <AvatarImage
            src="https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg"
            alt="PsyNeural"
            title="PsyNeural"
            aria-label="PsyNeural"
            decoding="async"
            loading="lazy"
          />
          <AvatarFallback className="dark:bg-white dark:text-zinc-950 bg-zinc-900 text-white">
            <User2 className="size-5" />
          </AvatarFallback>
        </Avatar>
      </div>
      {/* <!-- ========== MESSAGE USER ========== --> */}
      <div className="flex flex-col justify-end items-end gap-1.5">
        <p className="select-none" id="user-name">
          You
        </p>
        <div className="flex-1 flex flex-col gap-1 max-w-[70%] md:max-w-[60%] bg-zinc-200 text-zinc-950 dark:text-white dark:bg-zinc-900 p-4 rounded-xl">
          <span id="message-user">
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
