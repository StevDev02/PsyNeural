// UI Components
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
// Custom UI Components

// Icons
import { Power } from "lucide-react";

export default function SignoutBtn() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="w-full flex items-center justify-between cursor-pointer rounded-md hover:text-white hover:bg-red-600 p-2">
          <div className="flex items-center justify-center gap-2">
            <Power className="size-3.5" />
            <span>Log Out</span>
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will close your session for now, but you can always come
            back.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-600 hover:bg-red-500 text-white dark:text-white dark:bg-red-600 dark:hover:bg-red-500">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
