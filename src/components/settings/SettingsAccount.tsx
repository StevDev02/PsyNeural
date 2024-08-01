// UI Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// Custom UI Components
import { SelectLanguage } from "@/components/settings/SelectLanguage";
// Icons
import { Settings, GlobeLock, AudioLines } from "lucide-react";
import Link from "next/link";
import { ModelsVoices } from "./ModelsVoices";

export default function SettingsAccount() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full flex items-center justify-between cursor-pointer rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2">
          <div className="flex items-center justify-center gap-2">
            <Settings className="size-3.5" />
            <span>Settings</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            In this section you will find how to manage your settings.
          </DialogDescription>
        </DialogHeader>
        <Tabs className="flex w-full h-72">
          <TabsList className="flex flex-2 flex-col justify-start gap-2 px-1">
            <TabsTrigger
              className="flex items-center justify-start gap-1"
              value="General"
            >
              <Settings className="size-3.5" />
              <span>General</span>
            </TabsTrigger>
            <TabsTrigger
              className="flex items-center justify-start gap-1"
              value="Security"
            >
              <GlobeLock className="size-3.5" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger
              className="flex items-center justify-start gap-1"
              value="Audio"
            >
              <AudioLines className="size-3.5" />
              <span>Speech & Audio</span>
            </TabsTrigger>
          </TabsList>
          <div className="flex-1 w-full text-sm">
            {/* <!-- ========== GENERAL ========== --> */}
            <TabsContent value="General">
              <div className="flex flex-col w-full">
                <SelectLanguage />
              </div>
            </TabsContent>
            {/* <!-- ========== SECURITY ========== --> */}
            <TabsContent value="Security">
              <div className="flex flex-col w-full gap-2">
                <p className="text-lg font-bold">Security</p>
                <span>
                  At PsychNeural AI, your privacy and security are our top
                  priorities. All your data is protected with state-of-the-art
                  encryption technology and handled under strict confidentiality
                  protocols. You can speak and chat with confidence, knowing
                  your information is secure and private.
                </span>
                <span>
                  Remember, you agreed to our{" "}
                  <Link
                    title="Terms of Service Link"
                    aria-label="Terms of Service Link"
                    className="hover:underline hover:animate-pulse font-bold"
                    href="/legal/terms-of-service"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    title="Privacy Policy Link"
                    aria-label="Privacy Policy Link"
                    className="hover:underline hover:animate-pulse font-bold"
                    href="/legal/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>
            </TabsContent>
            {/* <!-- ========== AUDIO CONTROLS ========== --> */}
            <TabsContent value="Audio">
              <div className="flex flex-col w-full">
                <ModelsVoices />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
