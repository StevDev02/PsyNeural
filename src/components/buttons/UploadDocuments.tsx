import { CloudUpload } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export function UploadDocuments() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="rounded-full"
            disabled
            variant="secondary"
            size="icon"
          >
            <CloudUpload className="size-4" />
            <span className="sr-only">Attach file</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">Attach File</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
