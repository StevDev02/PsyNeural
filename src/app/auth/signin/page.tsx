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
// Icons
import { GoogleIcon } from "@/components/custom/icons/GoogleIcon";
import { GithubIcon } from "@/components/custom/icons/GithubIcon";
// Custom UI Components
import { SigninForm } from "@/components/auth/signin/SigninForm";
// Spline
import { NormalFace } from "@/components/custom/spline/NormalFace";
// Meteors
import { Meteors } from "@/components/custom/animations/Meteors";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
};

export default function Signin() {
  return (
    <main className="flex min-h-dvh items-center justify-around mx-auto text-sm p-6">
      <NormalFace />
      <Card className="relative flex flex-col overflow-hidden p-8 gap-4 w-[400px]">
        <Meteors className="-z-10" number={10} />
        <CardHeader className="flex items-center justify-center flex-col text-center sm:text-start sm:items-start sm:justify-start">
          <h1 className="font-extrabold text-3xl sm:text-4xl">Welcome Back</h1>
          <p className="font-light text-sm sm:text-base">
            If you dealing with something right now, that you don't want anyone
            else knows, sign in we can help you, trust us.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* <!-- ========== PROVIDERS ========== --> */}
          <form
            id="providers"
            className="flex flex-col sm:flex-row items-center w-full gap-2"
          >
            <Button
              className="flex flex-1 w-full gap-1.5 items-center justify-center"
              variant="outline"
              name="Google"
              id="Google"
            >
              <GoogleIcon />
              Sign in with Google
            </Button>
            <Button
              className="flex flex-1 w-full gap-1.5 items-center justify-center"
              variant="outline"
              name="Github"
              id="Github"
            >
              <GithubIcon />
              Sign in with Github
            </Button>
          </form>
          {/* <!-- ========== OR ========== --> */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex-1 h-[1px] bg-black/5 dark:bg-white/5"></div>
            <span>or</span>
            <div className="flex-1 h-[1px] bg-black/5 dark:bg-white/5"></div>
          </div>
          {/* <!-- ========== SIGNIN FORM ========== --> */}
          <SigninForm />
          {/* <!-- ========== DON'T HAVE AN ACCOUNT? ========== --> */}
          <div className="flex items-center justify-center text-center sm:text-start sm:items-start sm:justify-start">
            <p>
              Don't have an account?{" "}
              <Link
                title="Signup Link"
                aria-label="Signup Link"
                className="hover:underline hover:animate-pulse font-semibold"
                href="/auth/signup"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </CardContent>
        {/* <!-- ========== TERMS OF SERVICE & PRIVACY POLICY ========== --> */}
        <CardFooter>
          <span className="text-sm text-center sm:text-start">
            By continuing, you agree to{" "}
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
