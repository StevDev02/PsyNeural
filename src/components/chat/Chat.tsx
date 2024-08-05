"use client";
import { Textarea } from "@/components/ui/textarea";
// Custom Components
import { DropdownModels } from "../models/DropdownModels";
import { ClearMessage } from "../buttons/ClearMessage";
import { SendMessage } from "../buttons/SendMessage";
import { UploadDocuments } from "../buttons/UploadDocuments";
import { UseMicrophone } from "../buttons/UseMicrophone";
import { NewConversation } from "../buttons/NewConversation";

export function Chat() {
  return (
    <div className="flex flex-col gap-1.5 text-center w-full landscape:pt-0 p-4 py-2 sm:p-6 sm:pb-0">
      <div className="flex flex-col overflow-hidden w-full rounded-lg border dark:border-zinc-800 border-zinc-200">
        <Textarea
          rows={2}
          spellCheck
          minLength={1}
          placeholder="How can I help you?..."
          id="message"
          className="border-0 p-4 font-medium rounded-none resize-none shadow-none focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
        />
        <div className="flex items-center justify-between p-3 sm:pt-4 bg-white dark:bg-zinc-950">
          <div className="flex items-center justify-center gap-2">
            <UploadDocuments />
            <UseMicrophone />
            <DropdownModels />
          </div>
          <div className="flex items-center justify-center gap-2">
            <NewConversation />
            <ClearMessage />
            <SendMessage />
          </div>
        </div>
      </div>
      <span className="text-zinc-700 flex font-medium items-center justify-center dark:text-zinc-100 landscape:hidden lg:landscape:flex">
        PsyNeural has been trained with web scraping.
      </span>
    </div>
  );
}
