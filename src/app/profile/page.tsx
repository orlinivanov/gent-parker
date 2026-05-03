import UserProfileForm from "@/components/form/UserProfileForm";
import { cookies } from "next/headers";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const user = JSON.parse(cookieStore.get("user")?.value || "{}");

  return <UserProfileForm user={user} />;
}
