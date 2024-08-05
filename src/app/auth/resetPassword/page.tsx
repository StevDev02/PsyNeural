// Next Components
import Link from "next/link";
// UI Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// Meteors
import { Meteors } from "@/components/custom/animations/Meteors";

import { Metadata } from "next";
import { ResetPassForm } from "@/components/auth/resetPassword/ResetPassForm";

export const metadata: Metadata = {
  title: "ResetPassword",
};

export default function ResetPassword() {
  return (
    <main className="flex min-h-dvh items-center justify-around mx-auto text-sm p-6">
      <Card className="relative flex flex-col overflow-hidden p-8 gap-4 w-[400px]">
        <Meteors className="-z-10" number={10} />
        <CardHeader className="flex items-center justify-center flex-col text-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl">
            Forgot Password?
          </h1>
          <p className="font-light text-sm sm:text-base">
            Just enter your email below and we'll send you a link to reset your
            password. If you don't receive an email, try again and please check
            your spam folder or contact support.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <ResetPassForm />
        </CardContent>
        {/* <!-- ========== TERMS OF SERVICE & PRIVACY POLICY ========== --> */}
        <CardFooter>
          <span className="text-sm text-center">
            Remember, you agreed to{" "}
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
            , and to receive periodic emails with updates.
          </span>
        </CardFooter>
      </Card>
    </main>
  );
}
