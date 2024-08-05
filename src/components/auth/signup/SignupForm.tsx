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
import { Lock, UnlockIcon, CheckCircle2Icon, CircleIcon } from "lucide-react";
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

export function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
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

  const validationRules = [
    { id: "uppercase", label: "Uppercase letter", regex: /[A-Z]/ },
    { id: "lowercase", label: "Lowercase letter", regex: /[a-z]/ },
    { id: "number", label: "Number", regex: /\d/ },
    {
      id: "special",
      label: "Special character",
      regex: /[!@#$%^&*(),.?":{}|<>]/,
    },
    { id: "length", label: "8 characters or more", regex: /^.{8,15}$/ },
  ];

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
                  placeholder="Enter your email"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          rules={{
            onChange: (e) => {
              setPassword(e.target.value);
              form.setValue("password", e.target.value);
            },
          }}
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  id="password"
                  minLength={8}
                  maxLength={15}
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a new password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <ul className="flex flex-col justify-start gap-1 text-sm text-zinc-400 animate-in">
                {validationRules.map((rule) => (
                  <li
                    key={rule.id}
                    className="flex items-center justify-start gap-1"
                  >
                    <CircleIcon
                      className={`size-4 ${
                        rule.regex.test(password) ? "hidden" : "block"
                      }`}
                    />
                    <CheckCircle2Icon
                      className={`text-green-500 dark:text-green-600 ${
                        rule.regex.test(password) ? "block" : "hidden"
                      } size-4`}
                    />
                    <span>{rule.label}</span>
                  </li>
                ))}
              </ul>
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
              <span>Sign up with Email</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1">
              <UnlockIcon className="size-3" />
              <span>Loading...</span>
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
}
