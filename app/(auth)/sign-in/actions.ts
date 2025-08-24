"use server";

import { SignInValues } from "@/lib/validation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { getClient } from "@/lib/question-generator-clien";
import { LoginResponse } from "@/types";

export async function SignIn(
  credentials: SignInValues
): Promise<{ error?: string }> {
  try {
    
    const client = await getClient();
    const response = await client.post("/login",credentials);
    const data = response.data as LoginResponse
    (await cookies()).set("token", data.access_token!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });
    redirect("/");
  } catch (error: any) {
    console.log("Error throwed when sign in", error);
    if (isRedirectError(error)) throw error;
    return { error: error.message };
  }
}