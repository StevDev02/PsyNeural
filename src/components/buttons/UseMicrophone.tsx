import { Mic } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export function UseMicrophone() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="rounded-full" variant="secondary" size="icon">
            <Mic className="size-4" />
            <span className="sr-only">Use Microphone</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">Use Microphone</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
