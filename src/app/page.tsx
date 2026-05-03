import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const user = JSON.parse(cookieStore.get("user")?.value || "{}");

  return (
    <>
      <h1>Parking Locations</h1>
      {JSON.stringify(user)}
    </>
  );
}
