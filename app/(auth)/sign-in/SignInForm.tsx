"use client";
import React, { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInValues, signInSchema } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignIn } from "./actions";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "sonner";

const SignInForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: SignInValues) {
    startTransition(async () => {
      console.log("Before SignIn");
      const { error } = await SignIn(values);
      if (error)
        toast.error(error);
    });
  }

  return (
    <div className="space-y-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên đăng nhập</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập tên đăng nhập hoặc email"
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
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
          >
            Đăng nhập
            <Loader
              className={cn(
                "animate-spin ml-2 hidden",
                isPending && "inline-block"
              )}
            />
          </Button>
        </form>
      </Form>
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-muted" />
        <span>hoặc</span>
        <div className="h-px flex-1 bg-muted" />
      </div>
      <Link
        href="/forgotten"
        className="text-center block hover:underline hover:text-blue-500"
      >
        Quên mật khẩu?
      </Link>
      <Link
        href="/sign-up"
        className="block text-center hover:underline hover:text-blue-500"
      >
        Chưa có tài khoản? Đăng ký
      </Link>
    </div>
  );
};

export default SignInForm;