import { CornerDownLeft } from "lucide-react";
import { Button } from "../ui/button";

export function SendMessage() {
  return (
    <Button
      type="submit"
      size="sm"
      className="flex items-center justify-center gap-1.5"
    >
      <span className="hidden sm:flex">Send Message</span>
      <CornerDownLeft className="size-3.5" />
    </Button>
  );
}
