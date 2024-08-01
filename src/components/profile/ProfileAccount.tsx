// UI Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
// Icons
import { User2 } from "lucide-react";

export default function ProfileAccount() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full flex items-center justify-between cursor-pointer rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2">
          <div className="flex items-center justify-center gap-2">
            <User2 className="size-3.5" />
            <span>Profile</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
          <DialogDescription>
            In this section you will find how to manage your account.
          </DialogDescription>
        </DialogHeader>
        <form className="flex justify-start flex-col w-full gap-3">
          <div>
            <Label htmlFor="user-email">Email</Label>
            <Input disabled id="user-email" type="email" />
          </div>
          <div>
            <Label htmlFor="picture">Profile Photo</Label>
            <div className="flex items-center justify-center gap-1.5">
              <Avatar className="size-8">
                <AvatarImage
                  src=""
                  alt="My Account"
                  title="My Account"
                  aria-label="My Account"
                  decoding="async"
                  loading="lazy"
                />
                <AvatarFallback className="dark:bg-white dark:text-zinc-950 bg-zinc-900 text-white">
                  <User2 className="size-5" />
                </AvatarFallback>
              </Avatar>
              <Input id="picture" type="file" />
            </div>
            <span className="text-sm text-zinc-400">
              Choose a photo larger than 1MB.
            </span>
          </div>
          <Button className="flex-1" type="submit">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
