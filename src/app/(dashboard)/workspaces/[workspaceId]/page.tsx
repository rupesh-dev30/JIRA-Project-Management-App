import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function WorkspaceIdPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <div>WORKSPACE ID</div>;
}
