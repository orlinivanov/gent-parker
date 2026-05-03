"use server";

import { User } from "@/types";
import { cookies } from "next/headers";

export async function setUserCookie(user: User) {
  const cookieStore = await cookies();
  cookieStore.set("user", JSON.stringify(user), {
    httpOnly: true,
    secure: true,
    path: "/",
  });
}
