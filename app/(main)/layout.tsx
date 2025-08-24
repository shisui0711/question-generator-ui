"use server";

import React from "react";
import AuthorizationProvider from "@/providers/AuthorizationProvider";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { validateRequest } from "@/auth";
import Navbar from "@/components/nav-bar";
import LeftSidebar from "@/components/LeftSidebar";

export default async function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = (await cookies()).get("token")?.value;
  const { user } = await validateRequest();
  if (!token || !user) {
    redirect("/sign-in");
  }
  return (
    <AuthorizationProvider value={{ user: user, token: token }}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
      <div className="py-3 flex w-full grow gap-5 relative">
        <LeftSidebar />
        <div className="px-3 md:px-5 w-full overflow-y-auto">{children}</div>
      </div>
    </div>
    </AuthorizationProvider>
  );
}