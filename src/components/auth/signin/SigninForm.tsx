"use client";
import { useState } from "react";
// React Hook Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// UI Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// Icons
import { Lock, UnlockIcon } from "lucide-react";
// Confetti
import JSConfetti from "js-confetti";
// Next Components
import Link from "next/link";
// Validation Schema
const FormSchema = z.object({
  email: z
    .string()
    .min(3, {
      message: "Email must be at least 3 characters.",
    })
    .regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm, {
      message: "Email doesn't have the right format",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(15, {
      message: "Password must be 15 characters max.",
    })
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,15}$/gm, {
      message: "Password doesn't have the right format",
    }),
});

export function SigninForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      confettiNumber: 50,
    });
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  id="email"
                  minLength={3}
                  type="email"
                  placeholder="example@hotmail.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Password</FormLabel>
                <Link
                  title="Forgot Password"
                  aria-label="Forgot Password"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:animate-pulse font-semibold"
                  href="/auth/resetPassword"
                >
                  Forgot Password?
                </Link>
              </div>
              <FormControl>
                <Input
                  disabled={loading}
                  id="password"
                  minLength={8}
                  maxLength={15}
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={loading}
          className="flex items-center justify-centertransition-transform"
          type="submit"
        >
          {!loading ? (
            <div className="flex items-center justify-center gap-1">
              <Lock className="size-4" />
              <span>Sign in with Email</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1">
              <UnlockIcon className="size-4" />
              <span>Loading...</span>
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
}
