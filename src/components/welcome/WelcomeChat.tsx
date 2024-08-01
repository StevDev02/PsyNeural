"use client";
import React, {
  forwardRef,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
// UI Components
import { Avatar, AvatarImage } from "@/components/ui/avatar";
// Custom UI Components
import { AnimatedBeam } from "../magicui/AnimatedBeam";
import { FlipWords } from "../custom/animations/FlipWords";
import Particles from "../magicui/particles";
import GradualSpacing from "../magicui/GradualSpacing";
// Icons
import { User2 } from "lucide-react";
import { useTheme } from "next-themes";
import Loading from "@/app/loading";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full bg-zinc-900 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export function WelcomeChat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const AI = useRef<HTMLDivElement>(null);
  const User = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-dvh w-full flex-col items-center justify-center bg-background overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4">
        <div
          className="relative flex w-full h-full p-4 items-center justify-center overflow-hidden"
          ref={containerRef}
        >
          <div className="flex h-full w-full flex-col items-stretch justify-center gap-2">
            <div className="flex flex-row justify-between">
              <Circle ref={AI}>
                <Avatar className="size-10">
                  <AvatarImage
                    src="/psyneural.webp"
                    alt="PsyNeural"
                    title="PsyNeural"
                    aria-label="PsyNeural"
                    decoding="async"
                    loading="lazy"
                  />
                </Avatar>
              </Circle>
              <Circle ref={User}>
                <User2 className="stroke-white size-6" />
              </Circle>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={AI}
            toRef={User}
            startYOffset={10}
            endYOffset={10}
            curvature={-20}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={AI}
            toRef={User}
            startYOffset={-10}
            endYOffset={-10}
            curvature={20}
            reverse
          />
        </div>
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="PsyNeural AI"
        />
      </div>
      <Particles
        className="absolute inset-0"
        quantity={10}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
