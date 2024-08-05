import { Eraser } from "lucide-react";
import { Button } from "../ui/button";

export function ClearMessage() {
  return (
    <Button
      type="reset"
      variant="outline"
      size="sm"
      className="flex items-center justify-center gap-1.5"
    >
      <span className="hidden sm:flex">Clean Message</span>
      <Eraser className="size-3.5" />
    </Button>
  );
}
