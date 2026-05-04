"use server";

import { User } from "@/types";
import { cookies } from "next/headers";

export async function setUserCookie(user: User) {
  const expiresAt = new Date(Date.now() + 3 * 60 * 60 * 1000);
  const cookieStore = await cookies();
  cookieStore.set("user", JSON.stringify(user), {
    httpOnly: true,
    secure: true,
    path: "/",
    expires: expiresAt,
  });
}

export async function deleteUserCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("user");
}
