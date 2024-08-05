// Next Components
import Link from "next/link";
// UI Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Meteors
import { Meteors } from "@/components/custom/animations/Meteors";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VerifyEmail",
};

export default function VerifyEmail() {
  return (
    <main className="flex min-h-dvh items-center justify-around mx-auto text-sm p-6">
      <Card className="relative flex flex-col overflow-hidden p-8 gap-4 w-[400px]">
        <Meteors className="-z-10" number={10} />
        <CardHeader className="flex items-center justify-center flex-col text-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl">Email Sent</h1>
          <p className="font-light text-sm sm:text-base">
            You've successfully signed up. Please check your email to confirm
            your account before signin. The confirmation link expires in 10
            minutes.
          </p>
        </CardHeader>
        <CardContent>
          {/* <!-- ========== RETURN TO SIGNIN ========== --> */}
          <div className="flex items-center justify-center text-center">
            <Link
              title="Return to Signin Link"
              aria-label="Return to Signin Link"
              href="/auth/signin"
            >
              <Button
                title="Return to Signin Link"
                aria-label="Return to Signin Link"
              >
                Return to signin
              </Button>
            </Link>
          </div>
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
