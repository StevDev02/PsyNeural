import { SquarePen } from "lucide-react";
import { Button } from "../ui/button";

export function NewConversation() {
  return (
    <Button
      type="submit"
      variant="secondary"
      size="sm"
      className="flex items-center justify-center gap-1.5"
    >
      <span className="hidden sm:flex">New Conversation</span>
      <SquarePen className="size-3.5" />
    </Button>
  );
}
