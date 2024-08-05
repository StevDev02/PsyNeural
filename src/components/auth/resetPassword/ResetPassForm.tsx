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
import { Lock, UnlockIcon, Send } from "lucide-react";
// Confetti
import JSConfetti from "js-confetti";
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
});

export function ResetPassForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
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
              <FormLabel>Your Email</FormLabel>
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
        <Button
          disabled={loading}
          className="flex items-center justify-centertransition-transform"
          type="submit"
        >
          {!loading ? (
            <div className="flex items-center justify-center gap-1">
              <Lock className="size-4" />
              <span>Reset Password</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1">
              <UnlockIcon className="size-4" />
              <span>Loading...</span>
            </div>
          )}
        </Button>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">You didn't receive an email?</span>
          <Button
            variant="outline"
            className="flex items-center justify-centertransition-transform"
          >
            <div className="flex items-center justify-center gap-1">
              <Send className="size-4" />
              <span>Resend Email</span>
            </div>
          </Button>
        </div>
      </form>
    </Form>
  );
}
