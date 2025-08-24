import { cookies } from "next/headers"
import { cache } from "react"
import { getClient } from "./lib/question-generator-clien"
import { User } from "./types"

export const validateRequest = cache(
  async(): Promise<
  {user:User, token:string} | { user:null, token: null}
  > => {
    const token = (await cookies()).get("token")?.value ?? null
    if(!token)
      return { user: null, token: null}
    const client = await getClient(token);
    try {
        const response = await client.get("/my-info");
        const user = response.data as User;
      if(!user) return { user: null, token: null}
      return { user, token }
    } catch (error) {
      return { user: null, token: null}
    }
  }
)