"use server";
import { getClient } from "@/lib/question-generator-clien";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export async function signUp(
  credentials: SignUpValues
): Promise<{ error: string }> {
  try {
    const { password, repassword } = signUpSchema.parse(credentials);

    if(password !== repassword) return { error: "Mật khẩu không khớp" };
    const client = await getClient();
    await client.post("/register", credentials);
    redirect("/sign-in");
  } catch (error:any) {
    if(isRedirectError(error)) throw error;
    console.log("Error throwed while sign up: ", error);
    return {
      error: error.message
    };
  }
}